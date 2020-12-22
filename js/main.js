import {
  BoxBufferGeometry,
  DoubleSide,
  Mesh,
  RawShaderMaterial,
  TextureLoader,
  MeshStandardMaterial,
  IcosahedronBufferGeometry,
  BackSide,
  Vector3,
  Vector2,
  FrontSide,
  Color,
} from "../third_party/three.module.js";
//import { initScene, update } from "../js/scene.js";
import { obj } from "./sceneVoronoi.js";
import { renderer, scene, camera, resize, onResize } from "../js/renderer.js";
//import { Post } from "./post.js";
import { Vesc } from "../vesc/vesc.js";
import Maf from "../third_party/Maf.js";
import Easings from "../third_party/easings.js";

const easers = [];
function register(easer) {
  easers.push(easer);
}

function update() {
  for (const easer of easers) {
    if (easer.playing) {
      easer.update();
    }
  }
  requestAnimationFrame(update);
}
update();

class Easer {
  constructor() {
    this.onChangeFn = () => {};
    this.current = null;
    this.timestamp = 0;
    this.duration = 0;
    this.playing = false;
    register(this);
  }

  set(target, duration) {
    if (this.value) {
      this.current = this.value;
    }
    this.timestamp = performance.now();
    this.duration = duration;
    this.target = target;
    if (this.current === null) {
      this.current = target;
    }
    this.playing = true;
  }

  update() {
    const delta = Maf.clamp(
      0,
      1,
      (performance.now() - this.timestamp) / this.duration
    );
    this.value = Maf.mix(this.current, this.target, Easings.OutBounce(delta));
    this.onChangeFn(this.value);
    if (this.value === this.target) {
      this.playing = false;
    }
  }

  onChange(fn) {
    this.onChangeFn = fn;
    return this;
  }
}

const baubleVS = `#version 300 es
precision highp float;

in vec3 position;
in vec3 normal;
in vec2 uv;

uniform vec2 resolution;
uniform mat3 normalMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

uniform vec3 voronoiScale;
uniform float distortionFactor;
uniform float normalDistance;
uniform float noiseDistort;
uniform float noiseScale;
uniform float twistX;
uniform float twistY;
uniform float twistZ;
uniform float dodecahedronFactor;
uniform float icosahedronFactor;
uniform float cubeFactor;
uniform float sphereFactor;
uniform float smoothness;

out vec4 vWorldPosition;
out vec4 vEyePosition;
out vec3 vPosition;
out vec2 vUv;
out float strength;

out vec3 vTangent;
out vec3 vBinormal;
out vec3 vNormal;

// https://www.shadertoy.com/view/ldl3Dl

vec3 hash( vec3 x )
{
	x = vec3( dot(x,vec3(127.1,311.7, 74.7)),
			  dot(x,vec3(269.5,183.3,246.1)),
			  dot(x,vec3(113.5,271.9,124.6)));

	return fract(sin(x)*43758.5453123);
}

vec3 voronoi( in vec3 x )
{
    vec3 p = floor( x );
    vec3 f = fract( x );

	float id = 0.0;
    vec2 res = vec2( 100.0 );
    for( int k=-1; k<=1; k++ )
    for( int j=-1; j<=1; j++ )
    for( int i=-1; i<=1; i++ )
    {
        vec3 b = vec3( float(i), float(j), float(k) );
        vec3 r = vec3( b ) - f + hash( p + b );
        float d = dot( r, r );

        if( d < res.x )
        {
			id = dot( p+b, vec3(1.0,57.0,113.0 ) );
            res = vec2( d, res.x );			
        }
        else if( d < res.y )
        {
            res.y = d;
        }
    }

    return vec3( sqrt( res ), abs(id) );
}

vec3 opTwistX( vec3 p, float twist ) {
  float k = twist;
  float c = cos(k*p.x);
  float s = sin(k*p.x);
  mat2  m = mat2(c,-s,s,c);
  vec2 r = m*p.yz;
  vec3 q = vec3(p.x,r.x,r.y);
  return q;
}

vec3 opTwistY( vec3 p, float twist ) {
  float k = twist;
  float c = cos(k*p.y);
  float s = sin(k*p.y);
  mat2  m = mat2(c,-s,s,c);
  vec2 r = m*p.xz;
  vec3 q = vec3(r.x,p.y,r.y);
  return q;
}

vec3 opTwistZ( vec3 p, float twist ) {
  float k = twist;
  float c = cos(k*p.z);
  float s = sin(k*p.z);
  mat2  m = mat2(c,-s,s,c);
  vec2 r = m*p.xy;
  vec3 q = vec3(r.x,r.y,p.z);
  return q;
}

vec3 rotate(vec3 p) {
  return opTwistX(opTwistY(opTwistZ(p, twistZ), twistY), twistX);
}

float hash(float h) {
	return fract(sin(h) * 43758.5453123);
}

float noise(vec3 x) {
	vec3 p = floor(x);
	vec3 f = fract(x);
	f = f * f * (3.0 - 2.0 * f);

	float n = p.x + p.y * 157.0 + 113.0 * p.z;
	return mix(
			mix(mix(hash(n + 0.0), hash(n + 1.0), f.x),
					mix(hash(n + 157.0), hash(n + 158.0), f.x), f.y),
			mix(mix(hash(n + 113.0), hash(n + 114.0), f.x),
					mix(hash(n + 270.0), hash(n + 271.0), f.x), f.y), f.z);
}

float fbm(vec3 p) {
	float f = 0.0;
	f = 0.5000 * noise(p);
	p *= 2.01;
	f += 0.2500 * noise(p);
	p *= 2.02;
	f += 0.1250 * noise(p);

	return f;
}


// https://www.shadertoy.com/view/3llGzX


// simple LCG

#define LCG(k) k = (65 * k) % 1021
#define lr(k) float(k)/1021.

// permutation polynomial

int permp (int i1, int i2)
{
      int t = (i1 + i2) & 255;
        
      return ((112 * t + 153) * t + 151) & 255;
}

// return the two closest distances for 3D Worley noise
// type controls the type of metric used

vec2 worley(int type, vec3 p)
{
    vec2 dl = vec2(20.0);
    ivec3 iv = ivec3(floor(p));
    vec3 fv = fract(p);
    
    int j = 0; // initialization for Knuth's "algorithm L"
    ivec3 di = ivec3(1), ki = -di;
    ivec4 fi = ivec4(0, 1, 2, 3);
    
    // instead of writing a triply nested loop (!!)
    // generate the indices for the neighbors in Gray order (Knuth's "algorithm L")
    // see section 7.2.1.1 of TAOCP, Volume 4A or https://doi.org/10.1145/360336.360343
    
	for (int k = 0; k < 27; k++) // loop through all neighbors
    { 
		 // seeding
        int s = permp(permp(permp(0, iv.z + ki.z), iv.y + ki.y), iv.x + ki.x); LCG(s);
            
		 for (int m = 0; m < 2; m++) // two points per cell
             {
                // generate feature points within the cell
                LCG(s); float sz = lr(s);
                LCG(s); float sy = lr(s);
                LCG(s); float sx = lr(s);
                
                vec3 tp = vec3(ki) + vec3(sx, sy, sz) - fv;
                float c = 0.0;
                if (type == 1) c = dot(tp, tp); // Euclidean metric
                if (type == 2) c = abs(tp.x) + abs(tp.y) + abs(tp.z); // Manhattan metric
                if (type == 3) c = max(abs(tp.x), max(abs(tp.y), abs(tp.z))); // Chebyshev metric
                
                float m1 = min(c, dl.x); // ranked distances
                dl = vec2(min(m1, dl.y), max(m1, min(max(c, dl.x), dl.y)));
             }
        
        // updating steps for Knuth's "algorithm L"
        j = fi[0]; fi[0] = 0; ki[2 - j] += di[j];
        if ((ki[2 - j] & 1) == 1) {
            di[j] = -di[j];
            fi[j] = fi[j + 1]; fi[j + 1] = j + 1;
        }
	}
    
    if (type == 1) dl = sqrt(dl); // don't forget to root at the end for Euclidean distance
        
    return dl;
}

// sstep - "smootherstep alternative"
float sstep(float x)
{
  x = clamp(x, 0.0, 1.0);
  float ix = 1.0 - x;
  x = x * x;
  return x / (x + ix * ix);
}


// vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
// vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

// float snoise(vec3 v){ 
//   const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
//   const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// // First corner
//   vec3 i  = floor(v + dot(v, C.yyy) );
//   vec3 x0 =   v - i + dot(i, C.xxx) ;

// // Other corners
//   vec3 g = step(x0.yzx, x0.xyz);
//   vec3 l = 1.0 - g;
//   vec3 i1 = min( g.xyz, l.zxy );
//   vec3 i2 = max( g.xyz, l.zxy );

//   //  x0 = x0 - 0. + 0.0 * C 
//   vec3 x1 = x0 - i1 + 1.0 * C.xxx;
//   vec3 x2 = x0 - i2 + 2.0 * C.xxx;
//   vec3 x3 = x0 - 1. + 3.0 * C.xxx;

// // Permutations
//   i = mod(i, 289.0 ); 
//   vec4 p = permute( permute( permute( 
//              i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
//            + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
//            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// // Gradients
// // ( N*N points uniformly over a square, mapped onto an octahedron.)
//   float n_ = 1.0/7.0; // N=7
//   vec3  ns = n_ * D.wyz - D.xzx;

//   vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)

//   vec4 x_ = floor(j * ns.z);
//   vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

//   vec4 x = x_ *ns.x + ns.yyyy;
//   vec4 y = y_ *ns.x + ns.yyyy;
//   vec4 h = 1.0 - abs(x) - abs(y);

//   vec4 b0 = vec4( x.xy, y.xy );
//   vec4 b1 = vec4( x.zw, y.zw );

//   vec4 s0 = floor(b0)*2.0 + 1.0;
//   vec4 s1 = floor(b1)*2.0 + 1.0;
//   vec4 sh = -step(h, vec4(0.0));

//   vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
//   vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

//   vec3 p0 = vec3(a0.xy,h.x);
//   vec3 p1 = vec3(a0.zw,h.y);
//   vec3 p2 = vec3(a1.xy,h.z);
//   vec3 p3 = vec3(a1.zw,h.w);

// //Normalise gradients
//   vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
//   p0 *= norm.x;
//   p1 *= norm.y;
//   p2 *= norm.z;
//   p3 *= norm.w;

// // Mix final noise value
//   vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
//   m = m * m;
//   return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
//                                 dot(p2,x2), dot(p3,x3) ) );
// }

// vec3 snoiseVec3( vec3 x ){
//   float s  = snoise(vec3( x ));
//   float s1 = snoise(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));
//   float s2 = snoise(vec3( x.z + 14.2 , x.x - 124.5 , x.y + 99.4 ));
//   vec3 c = vec3( s , s1 , s2 );
//   return c;
// }

// vec3 curlNoise( vec3 p ){
//   const float e = .1;
//   vec3 dx = vec3( e   , 0.0 , 0.0 );
//   vec3 dy = vec3( 0.0 , e   , 0.0 );
//   vec3 dz = vec3( 0.0 , 0.0 , e   );

//   vec3 p_x0 = snoiseVec3( p - dx );
//   vec3 p_x1 = snoiseVec3( p + dx );
//   vec3 p_y0 = snoiseVec3( p - dy );
//   vec3 p_y1 = snoiseVec3( p + dy );
//   vec3 p_z0 = snoiseVec3( p - dz );
//   vec3 p_z1 = snoiseVec3( p + dz );

//   float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;
//   float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;
//   float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;

//   const float divisor = 1.0 / ( 2.0 * e );
//   return  vec3( x , y , z );// * divisor;
//   //return normalize( vec3( x , y , z ) * divisor );
// }


vec4 map(in vec3 pos ){
  
  // for(int i=0; i<4; i++) {
  //   pos += .1*curlNoise(.5*pos);
  // }

  float value = voronoi(pos*voronoiScale).x;
  // vec2 w = worley(1, pos*voronoiScale);
  // float value = length(w.xy)/(w.y + w.x) - w.x;
  float d = distortionFactor*value;
  //d += noiseDistort*fbm(noiseScale*pos);
  //d = pow(d, 2.);
  //d = exp(d);
  //d = sign(d) * sqrt(abs(d));
  d += noiseDistort*fbm(noiseScale*pos);
  vec3 p = pos + normalize(pos) * d;
  p = rotate(p);
  return vec4(p, value);
}

vec4 calc(in float r,  in float phi, in float theta ){
  vec3 pos = vec3(
    r * sin(theta) * cos(phi),
    r * sin(theta) * sin(phi),
    r * cos(theta)
  );
  return map(pos);
}

vec3 calcNormal( in vec3 pos, out vec3 tangent, out vec3 binormal ) {
  float r = length(pos);
	float phi = atan( pos.y, pos.x );
	float theta = acos( pos.z );

	float e = normalDistance;
	vec3 dx = calc( r,phi + e, theta ).xyz - calc( r, phi - e, theta ).xyz;
	vec3 dz = calc( r,phi, theta + e ).xyz - calc( r, phi, theta - e ).xyz;
  
  tangent = normalize(dx);
  binormal = normalize(dz);
  vec3 normal = normalize(cross(tangent, binormal));

  tangent = normalize(cross(normal,vec3(1.,0.,0.)));
  binormal = normalize(cross(normal, tangent));
  tangent = normalize(cross(normal, binormal));

  return normal;
}

// Polyhedra stuff

#define EPSILON 	0.0001
#define MAXDIST 	10.0
#define MAXSTEPS	100

float sdSphere( vec3 p, float s )
{
  return length(p)-s;
}
float udRoundBox( vec3 p, vec3 b, float r ) {
  return length(max(abs(p)-b,0.0))-r;
}
float dot2( in vec3 v ) { return dot(v,v); }
float sdTetrahedron(vec3 p, float size)
{
    const float k = sqrt(2.0);
    p /= size;
    p.xz = abs(p.xz);
    
    float m = 2.0*p.z - k*p.y - 1.0;
    p = (m>0.0) ? p : vec3(p.z,-p.y,p.x);
    float s1 = clamp(p.x,0.0,1.0);
    float s2 = clamp((p.x-p.y*k-p.z+2.0)/4.0,0.0,1.0);
    
    m = 2.0*p.z - k*p.y - 1.0;
    float d = sign(m)*sqrt((sign(p.y*k+p.z+1.0)+sign(2.0-3.0*p.x-k*p.y-p.z)<1.0) 
                  ?
                  min( dot2(vec3(s1,-k*0.5,0)-p), 
                       dot2(vec3(s2, k*0.5-k*s2,1.0-s2)-p) )
                  :
                  m*m/6.0 );
    
    return d * size;
}
float opSmoothUnion( float d1, float d2, float k ) {
  float h = clamp( 0.5 + 0.5*(d2-d1)/k, 0.0, 1.0 );
  return mix( d2, d1, h ) - k*h*(1.0-h); 
}

float opSmoothSubtraction( float d1, float d2, float k ) {
  float h = clamp( 0.5 - 0.5*(d2+d1)/k, 0.0, 1.0 );
  return mix( d2, -d1, h ) + k*h*(1.0-h);
}

float opSmoothIntersection( float d1, float d2, float k ) {
  float h = clamp( 0.5 - 0.5*(d2-d1)/k, 0.0, 1.0 );
  return mix( d2, d1, h ) + k*h*(1.0-h);
}

float sdRoundBox( vec3 p, vec3 b, float r )
{
  vec3 q = abs(p) - b;
  return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0) - r;
}
float sdOctahedron( vec3 p, float s)
{
  p = abs(p);
  float m = p.x+p.y+p.z-s;
  vec3 q;
       if( 3.0*p.x < m ) q = p.xyz;
  else if( 3.0*p.y < m ) q = p.yzx;
  else if( 3.0*p.z < m ) q = p.zxy;
  else return m*0.57735027;
    
  float k = clamp(0.5*(q.z-q.y+s),0.0,s); 
  return length(vec3(q.x,q.y-s+k,q.z-k)); 
}
// https://www.shadertoy.com/view/XtyXzW
#define PI 3.14159265359
#define PHI (1.618033988749895)
#define TAU 6.283185307179586
#define GDFVector3 normalize(vec3(1, 1, 1 ))
#define GDFVector4 normalize(vec3(-1, 1, 1))
#define GDFVector5 normalize(vec3(1, -1, 1))
#define GDFVector6 normalize(vec3(1, 1, -1))
#define GDFVector7 normalize(vec3(0, 1, PHI+1.))
#define GDFVector8 normalize(vec3(0, -1, PHI+1.))
#define GDFVector9 normalize(vec3(PHI+1., 0, 1))
#define GDFVector10 normalize(vec3(-PHI-1., 0, 1))
#define GDFVector11 normalize(vec3(1, PHI+1., 0))
#define GDFVector12 normalize(vec3(-1, PHI+1., 0))
#define GDFVector13 normalize(vec3(0, PHI, 1))
#define GDFVector14 normalize(vec3(0, -PHI, 1))
#define GDFVector15 normalize(vec3(1, 0, PHI))
#define GDFVector16 normalize(vec3(-1, 0, PHI))
#define GDFVector17 normalize(vec3(PHI, 1, 0))
#define GDFVector18 normalize(vec3(-PHI, 1, 0))
#define fGDFBegin float d = 0.;
#define fGDF(v) d = max(d, abs(dot(p, v)));
#define fGDFEnd return d - r;
// Version with variable exponent.
// This is slow and does not produce correct distances, but allows for bulging of objects.
#define fGDFExp(v) d += pow(abs(dot(p, v)), e);
// Version with without exponent, creates objects with sharp edges and flat faces
#define fGDF(v) d = max(d, abs(dot(p, v)));
// https://www.shadertoy.com/view/lssfW4
#define fGDFExpEnd return pow(d, 1./e) - r;
#define fGDFEnd return d - r;
float fDodecahedron(vec3 p, float r, float e) {
	fGDFBegin
  fGDFExp(GDFVector13) fGDFExp(GDFVector14) fGDFExp(GDFVector15) fGDFExp(GDFVector16)
  fGDFExp(GDFVector17) fGDFExp(GDFVector18)
  fGDFExpEnd
}
float fDodecahedron(vec3 p, float r) {
    fGDFBegin
    fGDF(GDFVector13) fGDF(GDFVector14) fGDF(GDFVector15) fGDF(GDFVector16)
    fGDF(GDFVector17) fGDF(GDFVector18)
    fGDFEnd
}
float fIcosahedron(vec3 p, float r) {
    fGDFBegin
    fGDF(GDFVector3) fGDF(GDFVector4) fGDF(GDFVector5) fGDF(GDFVector6)
    fGDF(GDFVector7) fGDF(GDFVector8) fGDF(GDFVector9) fGDF(GDFVector10)
    fGDF(GDFVector11) fGDF(GDFVector12)
    fGDFEnd
}
float fIcosahedron(vec3 p, float r, float e) {
  fGDFBegin
  fGDFExp(GDFVector3) fGDFExp(GDFVector4) fGDFExp(GDFVector5) fGDFExp(GDFVector6)
  fGDFExp(GDFVector7) fGDFExp(GDFVector8) fGDFExp(GDFVector9) fGDFExp(GDFVector10)
  fGDFExp(GDFVector11) fGDFExp(GDFVector12)
  fGDFExpEnd
}
float mapPolyhedra (vec3 p) {
  // float tetra = sdTetrahedron(p, max(.0001,tetrahedronFactor)) - .1;
  // float cube = sdRoundBox(p, vec3(cubeFactor), .1);
  // float octa = sdOctahedron(p, 1.25 * octahedronFactor) - .1;
  // float icosa = fIcosahedron(p, 1. * icosahedronFactor, 50.);
  // float dodeca = fDodecahedron(p, 1. * dodecahedronFactor, 50.);
  float sphere = sdSphere(p, 1.);
  float cube = sdRoundBox(p, vec3(1.), .2);
  float icosa = fIcosahedron(p, 1., 50.);
  float tetra = sdTetrahedron(p, max(.0001,1.)) - .1;
  float dodeca = fDodecahedron(p, 1., 50.);
  float octa = sdOctahedron(p, 1.25 ) - .1;
  float a = sphere;//opSmoothUnion(sphere, dodeca, bulgeFactor);
  //a = sphere;
  // a = opSmoothUnion(a, octa, smoothness);
  // a = opSmoothUnion(a, icosa, smoothness);
  // a = opSmoothUnion(a, dodeca, smoothness);
  // a = opSmoothUnion(a, sphere, smoothness);
  a += distortionFactor * voronoi(voronoiScale*p).x;
  a += noiseDistort*fbm(noiseScale*p);
  
  return a;
  
  // //float d = displacement(pp);
  // //return d + ( sdCappedCylinder(pp, 1., .5) - .1);
  // float icosa = fIcosahedron(pp, 1., 50.);
  // //return icosa;
  // float dodeca = fDodecahedron(pp, 1., 50.);
  // //return dodeca;
  // //float pyramid =  sdPyramid(pp, 1., 2.) - .1;
  // float octa = sdOctahedron(pp, 1.25) - .1;
  // //return octa;
  // float sphere = sdSphere(p, 1.1);
  // return sphere;
  // //return sdRoundBox(pp, vec3(.5,.5,.5), .05);
  // float tetra = sdTetrahedron(pp, 1.) - .1;
  // //return tetra;
  // //return  opSmoothUnion(icosa, dodeca, .05);
  // return  opSmoothUnion(sphere, dodeca, .05);
  // //return opSmoothIntersection(dodeca, icosa, .5);
  // return sdPyramid(pp, 1., .75) - .1;
}

vec3 calcNormal (vec3 p) {
  float d = mapPolyhedra(p);
  return normalize (vec3 (
      mapPolyhedra (p - vec3 (normalDistance, 0.0, 0.0)) - d,
      mapPolyhedra (p - vec3 (0.0, normalDistance, 0.0)) - d,
      mapPolyhedra (p - vec3 (0.0, 0.0, normalDistance)) - d
  ));
}

float poly(in vec3 pos) {
  vec3 p = pos;
  float dodeca = fDodecahedron(p, 1.*dodecahedronFactor, 50.);
  float icosa = fIcosahedron(p, 1.*icosahedronFactor, 50.);
  float sphere = sdSphere(p, 4.*sphereFactor);
  float cube = sdRoundBox(p, vec3(1.*cubeFactor), .1);
  float tetra = sdTetrahedron(p, max(.0001,1.)) - .1;
  //float octa = sdOctahedron(p, 1.25 ) - .1;

  float a = cube;
  a = opSmoothUnion(a, icosa, smoothness);
  a = opSmoothUnion(a, dodeca, smoothness);
  a = opSmoothUnion(a, sphere, smoothness);

  return a;
}

float displacement(in vec3 pos) {
  float a = 0.;  
  a += distortionFactor * voronoi(voronoiScale*pos).x;
  a += noiseDistort * fbm(noiseScale*pos);
  return a;
}

float march (vec3 ro, vec3 rd) {
  float d = EPSILON;
  float t = 0.0;
  for (int i = 0; i < MAXSTEPS; ++i) {
    vec3 p = ro + rd * d;
    t = poly(p);
    if (t < EPSILON || d >= MAXDIST)
        break;
    d += t;
  }
  vec3 p = ro + d * rd;
  d += displacement(p);
  return d;
}

vec3 sphericalToCartesian(in float r, in float phi, in float theta) {
  return vec3(
    r * sin(theta) * cos(phi),
    r * sin(theta) * sin(phi),
    r * cos(theta)
  );
}

vec3 getPolyPos(in vec3 pos) {
  vec3 ro = 2. * pos;
  vec3 dir = -normalize(pos);
  float d = march(ro, dir);
  vec3 newPos = ro + d * dir;
  return newPos;
}

vec3 polyNormal(in vec3 p) {
  // float h = normalDistance; // replace by an appropriate value
  // const vec2 k = vec2(1,-1);
  // return normalize( k.xyy*polyN( p + k.xyy*h ) + 
  //                   k.yyx*polyN( p + k.yyx*h ) + 
  //                   k.yxy*polyN( p + k.yxy*h ) + 
  //                   k.xxx*polyN( p + k.xxx*h ) );
                    
  // float d = poly(p);
  // return normalize(vec3(
  //     poly(p - vec3(normalDistance, 0.0, 0.0)) - d,
  //     poly(p - vec3(0.0, normalDistance, 0.0)) - d,
  //     poly(p - vec3(0.0, 0.0, normalDistance)) - d
  // ));

  // float e = normalDistance;
  // vec3 binormal = cross(normalize(p), tangent);
  // vec3 dx = getPolyPos(p + binormal * vec3(e,0.,0.)) - getPolyPos(p - binormal * vec3(e,0.,0.));
  // vec3 dz = getPolyPos(p + tangent * vec3(0.,0.,e)) - getPolyPos(p - tangent * vec3(0.,0.,e));

  // return normalize(cross(dx,dz));

  float r = length(p);
  float phi = atan(p.y, p.x);
  float theta = acos(p.z);

  float e = normalDistance;
  vec3 dx = rotate(getPolyPos(sphericalToCartesian(r,phi - e, theta ))).xyz - rotate(getPolyPos(sphericalToCartesian(r, phi + e, theta ))).xyz;
  vec3 dz = rotate(getPolyPos(sphericalToCartesian(r,phi, theta - e ))).xyz - rotate(getPolyPos(sphericalToCartesian(r, phi, theta + e ))).xyz;
  
  vec3 tangent = normalize(dx);
  vec3 binormal = normalize(dz);
  vec3 normal = normalize(cross(tangent, binormal));
  return normal;

  /*
  //float d = poly(p);
  return normalize (vec3 (
      poly(p - vec3 (normalDistance, 0.0, 0.0)) - poly(p + vec3 (normalDistance, 0.0, 0.0)),
      poly(p - vec3 (0.0, normalDistance, 0.0)) - poly(p + vec3 (0.0, normalDistance, 0.0)) ,
      poly(p - vec3 (0.0, 0.0, normalDistance)) - poly(p + vec3 (0.0, 0.0, normalDistance))
  ));
  */
}

void main() {
  vUv = uv;
  
  // vec4 distort = map(position);
  // vPosition = distort.xyz;
  // strength = distort.a;
  // //strength = noise(position*5.);
  // vec3 t = vec3(0.);
  // vec3 b = vec3(0.);
  // vNormal = normalMatrix * calcNormal(position, t, b);
  // // // vTangent = normalMatrix * t;
  // // // vBinormal = normalMatrix * b;
  
  // vec3 ro = 2.*position;
  // vec3 rd = - normalize( position );
  // float d = march( ro, rd, 0. );
  // vPosition = ro + d * rd;
  // //vNormal = normalMatrix* calcNormal(vPosition, 0.) * -1.;
  // vNormal = normalMatrix* rotate(calcNormal (vPosition, 0.) * -1.);
  // vPosition = rotate(vPosition);

  vPosition = rotate(getPolyPos(position));
  vNormal = normalMatrix * polyNormal(position);

  vWorldPosition = modelMatrix * vec4(vPosition, 1. );
  vEyePosition = viewMatrix * vWorldPosition;
  gl_Position = projectionMatrix * vEyePosition;
}`;

const baubleFS = `#version 300 es
precision highp float;

in vec4 vEyePosition;
in vec3 vPosition;
in vec4 vWorldPosition;
in float strength;
in vec2 vUv;

in vec3 vTangent;
in vec3 vBinormal;
in vec3 vNormal;

uniform sampler2D matCapMap;
uniform sampler2D matCapMap2;
uniform vec3 color1;
uniform vec3 color2;

uniform float curvatureRim;
uniform float stripeFrequency;
uniform float stripeOffset;
uniform float frostFactor;
uniform float slopeFactor;
uniform float slopeWidth;
uniform int patternType;

out vec4 color;

#define M_PI 3.1415926535897932384626433832795
#define M_TAU (2. * M_PI)

float aastep(float threshold, float value) {
  float afwidth = 0.7 * fwidth(value);
  return smoothstep(threshold-afwidth, threshold+afwidth, value);
}

float hash(float h) {
	return fract(sin(h) * 43758.5453123);
}

float noise(vec3 x) {
	vec3 p = floor(x);
	vec3 f = fract(x);
	f = f * f * (3.0 - 2.0 * f);

	float n = p.x + p.y * 157.0 + 113.0 * p.z;
	return mix(
			mix(mix(hash(n + 0.0), hash(n + 1.0), f.x),
					mix(hash(n + 157.0), hash(n + 158.0), f.x), f.y),
			mix(mix(hash(n + 113.0), hash(n + 114.0), f.x),
					mix(hash(n + 270.0), hash(n + 271.0), f.x), f.y), f.z);
}

float rand(vec2 co){
  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}


// A single iteration of Bob Jenkins' One-At-A-Time hashing algorithm.
uint hash( uint x ) {
    x += ( x << 10u );
    x ^= ( x >>  6u );
    x += ( x <<  3u );
    x ^= ( x >> 11u );
    x += ( x << 15u );
    return x;
}

// Compound versions of the hashing algorithm I whipped together.
uint hash( uvec2 v ) { return hash( v.x ^ hash(v.y)                         ); }
uint hash( uvec3 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z)             ); }
uint hash( uvec4 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z) ^ hash(v.w) ); }

// Construct a float with half-open range [0:1] using low 23 bits.
// All zeroes yields 0.0, all ones yields the next smallest representable value below 1.0.
float floatConstruct( uint m ) {
    const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
    const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32

    m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
    m |= ieeeOne;                          // Add fractional part to 1.0

    float  f = uintBitsToFloat( m );       // Range [1:2]
    return f - 1.0;                        // Range [0:1]
}

// Pseudo-random value in half-open range [0:1].
float random( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
float random( vec2  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
float random( vec3  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
float random( vec4  v ) { return floatConstruct(hash(floatBitsToUint(v))); }

float getStripe(in vec2 uv, in float e) {
  float v = stripeOffset + sin(stripeFrequency*uv.y);
  v = .5 + .5 * v;
  v = smoothstep(.5-e, .5+e, v);
  return v;
}

float getSpiral(in vec2 uv, in float e) {
  float v = stripeOffset + sin(uv.x*2.*M_PI + stripeFrequency*uv.y);
  v = .5 + .5 * v;
  v = smoothstep(.5-e, .5+e, v);
  return v;
}

float getPattern(in vec2 uv, out float slope, in float fw) {
  float v0;
  if(patternType==1) {
    v0 = getStripe(uv, fw);
  }else{
    v0 = getSpiral(uv, fw);
  }
  float e = .0005;//5.*afwidth;
  float v1;
  if(patternType == 1){
    v1 = getStripe(vec2(uv.x, uv.y-e), fw);
  } else {
    v1 = getSpiral(vec2(uv.x, uv.y-e), fw);
  }
  slope = slopeFactor*(v0 - v1);
  return v0;
}

vec3 cartesianToSpherical(in vec3 p) {
  float r = length(p);
  float theta = atan(p.y, p.x);
  float phi = atan(sqrt(p.x*p.x + p.y*p.y), p.z);
  return vec3(r, (theta + M_PI) / M_TAU, phi / M_TAU); 
}

vec2 matCapUV(in vec3 eye, in vec3 normal) {
  vec3 r = reflect(eye, normal);
  float m = 2.82842712474619 * sqrt(r.z + 1.0);
  vec2 vN = r.xy / m + .5;
  return vN;
}

vec3 rgb2hsl( in vec3 c ) {
  float h = 0.0;
	float s = 0.0;
	float l = 0.0;
	float r = c.r;
	float g = c.g;
	float b = c.b;
	float cMin = min( r, min( g, b ) );
	float cMax = max( r, max( g, b ) );

	l = ( cMax + cMin ) / 2.0;
	if ( cMax > cMin ) {
		float cDelta = cMax - cMin;
        
        //s = l < .05 ? cDelta / ( cMax + cMin ) : cDelta / ( 2.0 - ( cMax + cMin ) ); Original
		s = l < .0 ? cDelta / ( cMax + cMin ) : cDelta / ( 2.0 - ( cMax + cMin ) );
        
		if ( r == cMax ) {
			h = ( g - b ) / cDelta;
		} else if ( g == cMax ) {
			h = 2.0 + ( b - r ) / cDelta;
		} else {
			h = 4.0 + ( r - g ) / cDelta;
		}

		if ( h < 0.0) {
			h += 6.0;
		}
		h = h / 6.0;
	}
	return vec3( h, s, l );
}

vec3 hsl2rgb( in vec3 c ) {
    vec3 rgb = clamp( abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0, 0.0, 1.0 );
    return c.z + c.y * (rgb-0.5)*(1.0-abs(2.0*c.z-1.0));
}

vec3 blendHue(vec3 base, vec3 blend) {
    vec3 baseHSL = rgb2hsl(base);
    vec3 blendHSL = rgb2hsl(blend);
    return hsl2rgb(vec3(blendHSL.r, blendHSL.g > 0.0 ? baseHSL.g : 0.0, baseHSL.b));
}

void main() {

  float fw = fwidth(vEyePosition.xy).x;//length(vec2(dFdx(vEyePosition.x), dFdy(vEyePosition.y)));
  float slope = 0.;
  float pattern = getPattern(cartesianToSpherical(vPosition).yz, slope, slopeWidth*fw);
  
//  float pattern = getPattern(vUv, slope);

  // mat3 tbn = mat3(normalize(vTangent), normalize(vBinormal), normalize(vNormal));
  // vec3 n = normalize(tbn * normalize(vec3(0.,0.,1.)));
  // n = normalize(tbn * vec3(0.,0.,1.));

  // vec3 denormTangent = dFdx(vUv.y)*dFdy(vEyePosition.xyz)-dFdx(vEyePosition.xyz)*dFdy(vUv.y);
  // vec3 tangent = normalize(denormTangent-vNormal*dot(vNormal,denormTangent));
  // vec3 normal = normalize(vNormal);
  // vec3 bitangent = cross(normal,tangent);

  vec3 n = normalize(vNormal);

    n.x += frostFactor*rand(vPosition.xy) * pattern;
    n.y += frostFactor*rand(vPosition.yz) * pattern;
    n.z += frostFactor*rand(vPosition.xy) * pattern;
    n = normalize(n);
  
  // Compute curvature
  vec3 dx = dFdx(vEyePosition.xyz/vEyePosition.w);
  vec3 dy = dFdy(vEyePosition.xyz/vEyePosition.w);
  vec3 xneg = n - dx;
  vec3 xpos = n + dx;
  vec3 yneg = n - dy;
  vec3 ypos = n + dy;
  float depth = length(vEyePosition);
  float curvature = abs((cross(xneg, xpos).y - cross(yneg, ypos).x) *50./depth)* curvatureRim;
  
  vec2 vN = matCapUV(normalize(vEyePosition.xyz), n);
  vN.y += .1*slope;

  vec4 c1 = texture(matCapMap, vN);
  vec4 c2 = texture(matCapMap2, vN);

  float s = pattern;
  color.rgb = mix(blendHue(c1.rgb,color1), blendHue(c2.rgb, color2), s);
  color.rgb += vec3(curvature);
  //color.rgb = vec3(s);
    
  //color = vec4(.5 + .5 * vNormal, 1.);
  color.a = 1.;//pattern + .5;
  //color.rgb = vec3(slope*100., stripe, 0.);
  //color.rgb = vec3(noise(1000.*vPosition.xyz));
}`;

const backdropVS = `#version 300 es
precision highp float;

in vec3 position;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.);
}
`;

const backdropFS = `#version 300 es
precision highp float;

uniform vec2 resolution;

out vec4 color;

void main() {
  float d = 1.-length(gl_FragCoord.xy/resolution-.5);
  color = vec4(d, d, d, 1.);
}`;

const loader = new TextureLoader();

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

//renderer.domElement.style.display = "none";

const defaultParams = {
  sphereDetail: isMobile() ? 40 : 40,
  icosahedronFactor: 0,
  dodecahedronFactor: 0,
  cubeFactor: 0,
  sphereFactor: 0,
  smoothness: 0.5,
  voronoiScaleX: 1.7,
  voronoiScaleY: 1.7,
  voronoiScaleZ: 1.7,
  distortionFactor: -0.07,
  normalDistance: 0.05,
  curvatureRim: 1,
  noiseScale: 1.78,
  noiseDistort: 0.1,
  stripeFrequency: 20,
  stripeOffset: 0,
  frostFactor: 0.05,
  slopeFactor: 1,
  slopeWidth: 1,
  twistX: 0,
  twistY: 0,
  twistZ: 0,
  wireframe: false,
  pattern: 1,
  color1: "#b70000",
  color2: "#b70000",
};

function deserialise() {
  if (window.location.hash) {
    try {
      return JSON.parse(decodeURIComponent(window.location.hash.substr(1)));
    } catch (e) {}
  }

  const data = localStorage.getItem("baubles");
  if (data) {
    try {
      return JSON.parse(data);
    } catch (e) {
      return {};
    }
  }
  return {};
}

const vesc = new Vesc();
const state = vesc.createProxy({ ...defaultParams, ...deserialise() });
const stateMat = vesc.createProxy({
  matcap: "./assets/red.jpg",
  matcap2: "./assets/black.jpg",
  reset: () => {
    const keys = Object.keys(defaultParams);
    for (const key of keys) {
      state[key] = defaultParams[key];
    }
  },
});
const materialFolder = vesc.addFolder("Parameters");
materialFolder.add("Geometry");
materialFolder
  .add(state, "sphereDetail", 0, 200, 10)
  .onChange((v) => {
    if (box.geometry.parameters.detail !== v) {
      box.geometry = new IcosahedronBufferGeometry(1, v);
    }
  })
  .setText("Sphere detail")
  .setDescription(
    "Defines the tessellation of the base geometry. Higher is more detail, but worse performance."
  );
materialFolder.add(state, "cubeFactor", 0, 1, 0.01).onChange((v) => {
  material.uniforms.cubeFactor.value = v;
});
materialFolder.add(state, "icosahedronFactor", 0, 1, 0.01).onChange((v) => {
  material.uniforms.icosahedronFactor.value = v;
});
materialFolder.add(state, "dodecahedronFactor", 0, 1, 0.01).onChange((v) => {
  material.uniforms.dodecahedronFactor.value = v;
});
materialFolder.add(state, "sphereFactor", 0, 1, 0.01).onChange((v) => {
  material.uniforms.sphereFactor.value = v;
});
materialFolder.add(state, "smoothness", 0, 1, 0.01).onChange((v) => {
  material.uniforms.smoothness.value = v;
});
materialFolder.add(state, "twistX", -Math.PI, Math.PI, 0.01).onChange((v) => {
  material.uniforms.twistX.value = v;
});
materialFolder.add(state, "twistY", -Math.PI, Math.PI, 0.01).onChange((v) => {
  material.uniforms.twistY.value = v;
});
materialFolder.add(state, "twistZ", -Math.PI, Math.PI, 0.01).onChange((v) => {
  material.uniforms.twistZ.value = v;
});
materialFolder.add("Voronoi");
materialFolder.add(state, "voronoiScaleX", 0, 10, 0.01).onChange((v) => {
  material.uniforms.voronoiScale.value.x = v;
});
materialFolder.add(state, "voronoiScaleY", 0, 10, 0.01).onChange((v) => {
  material.uniforms.voronoiScale.value.y = v;
});
materialFolder.add(state, "voronoiScaleZ", 0, 10, 0.01).onChange((v) => {
  material.uniforms.voronoiScale.value.z = v;
});
// const dEaser = new Easer().onChange(
//   (v) => (material.uniforms.distortionFactor.value = v)
// );
materialFolder
  .add(state, "distortionFactor", -0.1, 0.1, 0.001)
  .onChange((v) => {
    material.uniforms.distortionFactor.value = v;
    //dEaser.set(v, 250);
  });
materialFolder.add("FBM");
materialFolder.add(state, "noiseScale", 0, 10, 0.01).onChange((v) => {
  material.uniforms.noiseScale.value = v;
});
materialFolder.add(state, "noiseDistort", -1, 1, 0.01).onChange((v) => {
  material.uniforms.noiseDistort.value = v;
});
materialFolder.add("Surface");
materialFolder.add(state, "normalDistance", 0.001, 0.1, 0.001).onChange((v) => {
  material.uniforms.normalDistance.value = v;
});
materialFolder.add(state, "curvatureRim", 0, 4, 0.01).onChange((v) => {
  material.uniforms.curvatureRim.value = v;
});
materialFolder.add("Pattern");
materialFolder
  .add(state, "pattern", [
    [1, "Stripes"],
    [2, "Spiral"],
  ])
  .onChange((v) => {
    material.uniforms.patternType.value = v;
  });
// const fEaser = new Easer().onChange(
//   (v) => (material.uniforms.stripeFrequency.value = v)
// );
materialFolder.add(state, "stripeFrequency", 0, 200, 1).onChange((v) => {
  //fEaser.set(v, 250);
  material.uniforms.stripeFrequency.value = v;
});
// const oEaser = new Easer().onChange(
//   (v) => (material.uniforms.stripeOffset.value = v)
// );
materialFolder.add(state, "stripeOffset", -1.1, 1.1, 0.01).onChange((v) => {
  //oEaser.set(v, 250);
  material.uniforms.stripeOffset.value = v;
});
materialFolder.add(state, "frostFactor", 0, 0.1, 0.01).onChange((v) => {
  material.uniforms.frostFactor.value = v;
});
materialFolder.add(state, "slopeFactor", -5, 5, 0.01).onChange((v) => {
  material.uniforms.slopeFactor.value = v;
});
materialFolder.add(state, "slopeWidth", 0, 100, 0.1).onChange((v) => {
  material.uniforms.slopeWidth.value = v;
});
materialFolder
  .addColor(state, "color1")
  .setText("Color #1")
  .onChange((v) => material.uniforms.color1.value.set(v));
materialFolder
  .addColor(state, "color2")
  .setText("Color #2")
  .onChange((v) => material.uniforms.color2.value.set(v));
materialFolder
  .addFile(stateMat, "matcap")
  .setText("MatCap #1")
  .onChange((v) => {
    material.uniforms.matCapMap.value = loader.load(v);
  });
materialFolder
  .addFile(stateMat, "matcap2")
  .setText("MatCap #2")
  .onChange((v) => (material.uniforms.matCapMap2.value = loader.load(v)));
materialFolder.add("Actions");

materialFolder.add(stateMat, "reset").setText("Reset parameters");
materialFolder.add(state, "wireframe").onChange((v) => {
  material.wireframe = v;
});

window.state = state;

const material = new RawShaderMaterial({
  uniforms: {
    matCapMap: { value: null },
    matCapMap2: { value: null },
    cubeFactor: { value: state.cubeFactor },
    icosahedronFactor: { value: state.icosahedronFactor },
    dodecahedronFactor: { value: state.dodecahedronFactor },
    sphereFactor: { value: state.sphereFactor },
    smoothness: { value: state.smoothness },
    voronoiScale: {
      value: new Vector3(
        state.voronoiScaleX,
        state.voronoiScaleY,
        state.voronoiScaleZ
      ),
    },
    distortionFactor: { value: state.distortionFactor },
    curvatureRim: { value: state.curvatureRim },
    normalDistance: { value: state.normalDistance },
    noiseScale: { value: state.noiseScale },
    noiseDistort: { value: state.noiseDistort },
    frostFactor: { value: state.frostFactor },
    patternType: { value: state.pattern },
    slopeFactor: { value: state.slopeFactor },
    slopeWidth: { value: state.slopeWidth },
    stripeFrequency: { value: state.stripeFrequency },
    stripeOffset: { value: state.stripeOffset },
    twistX: { value: state.twistX },
    twistY: { value: state.twistY },
    twistZ: { value: state.twistZ },
    color1: { value: new Color(state.color1) },
    color2: { value: new Color(state.color2) },
  },
  vertexShader: baubleVS,
  fragmentShader: baubleFS,
  //side: BackSide,
  //transparent: true,
  wireframe: state.wireframe,
});

function serialise() {
  const data = JSON.stringify(state);
  localStorage.setItem("baubles", data);
  window.location.hash = encodeURIComponent(data);
}

let active = true;
window.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    active = !active;
  }
});

function render() {
  if (active) {
    obj.group.rotation.y = performance.now();
    // material.side = BackSide;
    // renderer.render(scene, camera);
    // renderer.autoClear = false;
    // box.scale.setScalar(0.99);
    // renderer.render(scene, camera);
    // material.side = FrontSide;
    // renderer.render(scene, camera);
    // box.scale.setScalar(1);
    // renderer.render(scene, camera);
    // renderer.autoClear = true;
    renderer.render(scene, camera);
    renderer.setAnimationLoop(render);
  }
}

const backdropMaterial = new RawShaderMaterial({
  uniforms: {
    resolution: { value: new Vector2() },
  },
  vertexShader: backdropVS,
  fragmentShader: backdropFS,
  side: BackSide,
});
const backdrop = new Mesh(
  new IcosahedronBufferGeometry(10, 10),
  backdropMaterial
);
scene.add(backdrop);

const box = new Mesh(
  new IcosahedronBufferGeometry(1, state.sphereDetail),
  material
);
scene.add(box);

async function init() {
  //obj.init(material);
  //scene.add(obj.group);
  //const controllers = await initScene(scene, material, gui);
  resize();
  render();
}

onResize(() => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const dPR = window.devicePixelRatio;
  backdropMaterial.uniforms.resolution.value.set(width * dPR, height * dPR);
  //post.setSize(width * dPR, height * dPR);
});

init();

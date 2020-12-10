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
} from "../third_party/three.module.js";
import * as dat from "../third_party/dat.gui.module.js";
//import { initScene, update } from "../js/scene.js";
import { obj } from "./sceneVoronoi.js";
import { renderer, scene, camera, resize, onResize } from "../js/renderer.js";
//import { Post } from "./post.js";

const gui = new dat.GUI();

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

uniform float voronoiScale;
uniform float distortionFactor;
uniform float normalDistance;
uniform float noiseDistort;
uniform float noiseScale;
uniform float rotateX;
uniform float rotateY;
uniform float rotateZ;

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
  return opTwistX(opTwistY(opTwistZ(p, rotateZ), rotateY), rotateX);
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
  vec3 p = pos + normalize(pos) * d;
  //p = opTwistY(p,1.);
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

#define EPSILON 	0.001
#define MAXDIST 	100.0
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
  return mix( d2, d1, h ) - k*h*(1.0-h); }
float opSmoothSubtraction( float d1, float d2, float k ) {
  float h = clamp( 0.5 - 0.5*(d2+d1)/k, 0.0, 1.0 );
  return mix( d2, -d1, h ) + k*h*(1.0-h); }
float opSmoothIntersection( float d1, float d2, float k ) {
  float h = clamp( 0.5 - 0.5*(d2-d1)/k, 0.0, 1.0 );
  return mix( d2, d1, h ) + k*h*(1.0-h); }
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
float mapPolyhedra (vec3 p, float t) {
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
  float a = opSmoothUnion(sphere, dodeca,.4);
  // a = opSmoothUnion(a, octa, smoothness);
  // a = opSmoothUnion(a, icosa, smoothness);
  // a = opSmoothUnion(a, dodeca, smoothness);
  // a = opSmoothUnion(a, sphere, smoothness);
  a += noiseDistort*fbm(noiseScale*p);

  a += distortionFactor * voronoi(voronoiScale*p).x;
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

vec3 calcNormal (vec3 p, float t) {
    float d = mapPolyhedra (p, t);
    return normalize (vec3 (
        mapPolyhedra (p - vec3 (normalDistance, 0.0, 0.0), t) - d,
        mapPolyhedra (p - vec3 (0.0, normalDistance, 0.0), t) - d,
        mapPolyhedra (p - vec3 (0.0, 0.0, normalDistance), t) - d
    ));
}

float march (vec3 ro, vec3 rd, float time) {
 	float d = EPSILON;
    float t = 0.0;
    for (int i = 0; i < MAXSTEPS; ++i) {
     	vec3 p = ro + rd * d;
       	t = mapPolyhedra (p, time);
        if (t < EPSILON || d >= MAXDIST)
            break;
        d += t;
    }
    return d;
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
  // vTangent = normalMatrix * t;
  // vBinormal = normalMatrix * b;
  
  vec3 ro = 2.*position;
  vec3 rd = - normalize( position );
  float d = march( ro, rd, 0. );
  vPosition = ro + d * rd;
  //vNormal = normalMatrix* calcNormal(vPosition, 0.) * -1.;
  vNormal = normalMatrix* rotate(calcNormal (vPosition, 0.) * -1.);
  vPosition = rotate(vPosition);

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
uniform float curvatureRim;
uniform float stripeFrequency;
uniform float stripeOffset;
uniform float frostFactor;

out vec4 color;

#define M_PI 3.1415926535897932384626433832795
#define M_TAU (2. * M_PI)

float aastep(float threshold, float value) {
  float afwidth = 0.7 * length(vec2(dFdx(value), dFdy(value)));
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

float getStripe(in vec2 uv) {
  float v = stripeOffset + sin(uv.x*2.*M_PI + stripeFrequency*uv.y);
  v = .5 + .5 * v;
  v = smoothstep(.49, .51, v);
  return v;
}

float getPattern(in vec2 uv, out float slope) {
  float v0 = getStripe(uv);
  float e = .001;
  float v1 = getStripe(vec2(uv.x, uv.y-e));
  slope = v0 - v1;
  return v0;
}

vec3 cartesianToSpherical(in vec3 p){
  float r = length(p);
  float theta = atan(p.y, p.x);
  float phi = atan(sqrt(p.x*p.x + p.y*p.y), p.z);
  return vec3(r, (theta + M_PI) / M_TAU, phi / M_TAU); 
}

void main() {

  float slope = 0.;
  float stripe = getPattern(cartesianToSpherical(vPosition).yz, slope);

  // mat3 tbn = mat3(normalize(vTangent), normalize(vBinormal), normalize(vNormal));
  // vec3 n = normalize(tbn * normalize(vec3(0.,0.,1.)));
  // n = normalize(tbn * vec3(0.,0.,1.));

  // vec3 denormTangent = dFdx(vUv.y)*dFdy(vEyePosition.xyz)-dFdx(vEyePosition.xyz)*dFdy(vUv.y);
  // vec3 tangent = normalize(denormTangent-vNormal*dot(vNormal,denormTangent));
  // vec3 normal = normalize(vNormal);
  // vec3 bitangent = cross(normal,tangent);

  vec3 n = normalize(vNormal);

  if(stripe>.5) {
    n.x += frostFactor*rand(vPosition.xy);
    n.y += frostFactor*rand(vPosition.yz);
    n.z += frostFactor*rand(vPosition.xy);
    n = normalize(n);
    //vN += .05 * (random(1000.*vEyePosition.xyz) - .5);
  }

  // Compute curvature
  vec3 dx = dFdx(vEyePosition.xyz/vEyePosition.w);
  vec3 dy = dFdy(vEyePosition.xyz/vEyePosition.w);
  vec3 xneg = n - dx;
  vec3 xpos = n + dx;
  vec3 yneg = n - dy;
  vec3 ypos = n + dy;
  float depth = length(vEyePosition);
  float curvature = abs((cross(xneg, xpos).y - cross(yneg, ypos).x) *50./depth)* curvatureRim;
  
  vec3 eye = normalize(vEyePosition.xyz);
  vec3 r = reflect(eye, n);
  float m = 2. * sqrt( pow( r.x, 2. ) + pow( r.y, 2. ) + pow( r.z + 1., 2. ) );
  vec2 vN = r.xy / m + .5;
  float afwidth = length(vec2(dFdx(vUv.x), dFdy(vUv.y)));
  vN.y += .1*slope;

  vec4 c1 = texture(matCapMap, vN);
  vec4 c2 = texture(matCapMap2, vN);

  // float a = atan(vPosition.z/vPosition.x) * 2.;
  // float stripe = sin(10.*vPosition.y+a);
  // stripe = .5 + .5 * stripe;
  // stripe =smoothstep(.74, .75, stripe);
  //float stripe = .5 + .5 * sin(vUv.x*2.*M_PI + 80.*vUv.y);
  //stripe = smoothstep(.84, .85, stripe);
  float s = aastep(.5, stripe);//stripe;//smoothstep(.49, .51, strength);
  //s = 1.-smoothstep(0., .35, strength);
  color.rgb = mix(c1.rgb, c2.rgb, s);//smoothstep(.25, .75, strength));
  color.rgb += vec3(curvature);
  //color.rgb = vec3(s);
    
//  color = vec4(.5 + .5 * normal, 1.);
  color.a = 1.;
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
const matCapTexture = loader.load("./assets/matcap-red.jpg");
const matCapTexture2 = loader.load("./assets/gold.jpg");

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

const params = {
  sphereDetail: isMobile() ? 40 : 160,
  voronoiScale: 1.7,
  distortionFactor: -0.07,
  normalDistance: 0.05,
  curvatureRim: 1,
  noiseScale: 1.78,
  noiseDistort: 0.1,
  stripeFrequency: 20,
  stripeOffset: 0,
  frostFactor: 0.05,
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
};

const material = new RawShaderMaterial({
  uniforms: {
    matCapMap: { value: matCapTexture },
    matCapMap2: { value: matCapTexture2 },
    voronoiScale: { value: params.voronoiScale },
    distortionFactor: { value: params.distortionFactor },
    curvatureRim: { value: params.curvatureRim },
    normalDistance: { value: params.normalDistance },
    noiseScale: { value: params.noiseScale },
    noiseDistort: { value: params.noiseDistort },
    frostFactor: { value: params.frostFactor },
    stripeFrequency: { value: params.stripeFrequency },
    stripeOffset: { value: params.stripeOffset },
    rotateX: { value: params.rotateX },
    rotateY: { value: params.rotateY },
    rotateZ: { value: params.rotateZ },
  },
  vertexShader: baubleVS,
  fragmentShader: baubleFS,
  //side: BackSide,
  //transparent: true,
  //wireframe: true,
});

const materialFolder = gui.addFolder("material");
materialFolder.add(params, "sphereDetail", 0, 200, 10).onChange((v) => {
  box.geometry = new IcosahedronBufferGeometry(1, v);
});
materialFolder
  .add(params, "voronoiScale", 0, 10, 0.01)
  .onChange((v) => (material.uniforms.voronoiScale.value = v));
materialFolder
  .add(params, "distortionFactor", -1, 1, 0.01)
  .onChange((v) => (material.uniforms.distortionFactor.value = v));
materialFolder
  .add(params, "noiseScale", 0, 10, 0.01)
  .onChange((v) => (material.uniforms.noiseScale.value = v));
materialFolder
  .add(params, "noiseDistort", -1, 1, 0.01)
  .onChange((v) => (material.uniforms.noiseDistort.value = v));
materialFolder
  .add(params, "normalDistance", 0.001, 0.1, 0.001)
  .onChange((v) => (material.uniforms.normalDistance.value = v));
materialFolder
  .add(params, "curvatureRim", 0, 4, 0.01)
  .onChange((v) => (material.uniforms.curvatureRim.value = v));
materialFolder
  .add(params, "stripeFrequency", 0, 200, 1)
  .onChange((v) => (material.uniforms.stripeFrequency.value = v));
materialFolder
  .add(params, "stripeOffset", -1, 1, 0.01)
  .onChange((v) => (material.uniforms.stripeOffset.value = v));
materialFolder
  .add(params, "frostFactor", 0, 0.1, 0.01)
  .onChange((v) => (material.uniforms.frostFactor.value = v));
materialFolder
  .add(params, "rotateX", 0, 2 * Math.PI, 0.01)
  .onChange((v) => (material.uniforms.rotateX.value = v));
materialFolder
  .add(params, "rotateY", 0, 2 * Math.PI, 0.01)
  .onChange((v) => (material.uniforms.rotateY.value = v));
materialFolder
  .add(params, "rotateZ", 0, 2 * Math.PI, 0.01)
  .onChange((v) => (material.uniforms.rotateZ.value = v));
let active = true;
window.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    active = !active;
  }
});

function render() {
  if (active) {
    obj.group.rotation.y = performance.now() / 1000;
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
  new IcosahedronBufferGeometry(1, params.sphereDetail),
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

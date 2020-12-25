import {
  Mesh,
  IcosahedronBufferGeometry,
  RawShaderMaterial,
  NearestFilter,
  RGBAFormat,
  FloatType,
  DataTexture,
  BufferAttribute,
  Vector3,
  TextureLoader,
  Color,
} from "../third_party/three.module.js";
import Maf from "../third_party/Maf.js";
import { ShaderPass } from "./ShaderPass.js";
import { shader as sdf } from "../shaders/sdf.js";
import { shader as rotate } from "../shaders/rotate.js";
import { shader as voronoi } from "../shaders/voronoi.js";
import { shader as fbm } from "../shaders/fbm.js";
import { shader as curl } from "../shaders/curl.js";

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

const baubleVS = `#version 300 es
precision highp float;

in float vertexid;
in vec3 position;
in vec3 normal;
in vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;
uniform mat4 modelMatrix;
uniform mat4 viewMatrix;

uniform sampler2D positionMap;
uniform sampler2D normalMap;

out vec2 vUv;
out vec3 vNormal;
out float vStrength;
out vec4 vWorldPosition;
out vec4 vEyePosition;
out vec3 vPosition;

void main() {
  vec2 size = vec2(textureSize(positionMap, 0));
  float index = vertexid;
  vec2 lookupUv = vec2(mod(index, size.x)+.5, mod(floor(index/size.x),size.y)+.5)/size;
  vec4 pos = texture(positionMap, lookupUv);
  vStrength = pos.w;
  vNormal = normalMatrix * texture(normalMap, lookupUv).xyz;
  vUv = lookupUv;

  vPosition = pos.xyz;
  vWorldPosition = modelMatrix * vec4(vPosition, 1. );
  vEyePosition = viewMatrix * vWorldPosition;
  gl_Position = projectionMatrix * vEyePosition;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos.xyz, 1.);    
}`;

const baubleFS = `#version 300 es
precision highp float;

uniform sampler2D matCapMap;
uniform sampler2D matCapMap2;
uniform bool useHue1;
uniform vec3 color1;
uniform bool useHue2;
uniform vec3 color2;

uniform float curvatureRim;
uniform float stripeFrequency;
uniform float stripeOffset;
uniform float frostFactor;
uniform float frostFactor2;
uniform float slopeFactor;
uniform float slopeWidth;
uniform int patternType;

in vec2 vUv;
in vec3 vNormal;
in float vStrength;
in vec4 vWorldPosition;
in vec4 vEyePosition;
in vec3 vPosition;

out vec4 color;

#define M_PI 3.1415926535897932384626433832795
#define M_TAU (2. * M_PI)

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
  float e = .0005;//5.*afwidth;
  float v0;
  float v1;
  switch(patternType) {
    case 1:
      v0 = getStripe(uv, fw);
      v1 = getStripe(vec2(uv.x, uv.y-e), fw);
      slope = slopeFactor*(v0 - v1);
      break;
    case 2:
      v0 = getSpiral(uv, fw);
      v1 = getSpiral(vec2(uv.x, uv.y-e), fw);
      slope = slopeFactor*(v0 - v1);
      break;
    case 3:
      v0 = vStrength+.5;
      v0 = smoothstep(.5-e, .5+e, v0);
      slope = dFdx(v0);
      break;
  }
  return v0;
}

vec3 cartesianToSpherical(in vec3 p) {
  float r = length(p);
  float theta = atan(p.y, p.x);
  float phi = atan(sqrt(p.x*p.x + p.y*p.y), p.z);
  return vec3(r, (theta + M_PI) / M_TAU, phi / M_TAU); 
}

float rand(vec2 co){
  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
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
  float fw = fwidth(vEyePosition.xy).x;

  float slope = 0.;
  float pattern = getPattern(cartesianToSpherical(vPosition).yz, slope, slopeWidth*fw);
  
  vec3 n = normalize(vNormal);

  float f = mix(frostFactor, frostFactor2, pattern);
  n.x += f * rand(vPosition.xy);
  n.y += f * rand(vPosition.yz);
  n.z += f * rand(vPosition.xy);
  n = normalize(n);

  // Compute curvature.
  vec3 dx = dFdx(vEyePosition.xyz/vEyePosition.w);
  vec3 dy = dFdy(vEyePosition.xyz/vEyePosition.w);
  vec3 xneg = n - dx;
  vec3 xpos = n + dx;
  vec3 yneg = n - dy;
  vec3 ypos = n + dy;
  float depth = length(vEyePosition);
  float curvature = abs((cross(xneg, xpos).y - cross(yneg, ypos).x) *50./depth)* curvatureRim;

  // Lookup matcap.
  vec2 vN = matCapUV(normalize(vEyePosition.xyz), n);
  vN.y += .1*slope; // distort based on the pattern slope.

  vec4 c1 = texture(matCapMap, vN);
  vec4 c2 = texture(matCapMap2, vN);

  if(useHue1){
    c1.rgb = blendHue(c1.rgb, color1);
  }

  if(useHue2){
    c2.rgb = blendHue(c2.rgb, color2);
  }
  
  color = vec4(0.,0.,0.,1.);
  color = mix(c1, c2, pattern);
  color.rgb += vec3(curvature);
}`;

const orthoVS = `#version 300 es
precision highp float;

in vec3 position;
in vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

out vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.xyz, 1.);    
}`;

const gen = `

uniform vec3 voronoiScale;
uniform float voronoiStrength;

uniform float noiseStrength;
uniform float noiseScale;

uniform float curlScale;
uniform float curlFactor;
uniform int curlIterations;

uniform float twistX;
uniform float twistY;
uniform float twistZ;

uniform float tetrahedronFactor;
uniform float octahedronFactor;
uniform float dodecahedronFactor;
uniform float icosahedronFactor;
uniform float cubeFactor;
uniform float sphereFactor;
uniform float smoothness;
uniform float chamfer;

${voronoi}

${rotate}

${fbm}

${sdf}


float poly(in vec3 pos) {
  vec3 p = pos;
  float dodeca = fDodecahedron(p, 1.*dodecahedronFactor, 50./chamfer);
  float icosa = fIcosahedron(p, 1.*icosahedronFactor, 50./chamfer);
  float sphere = sdSphere(p, 4.*sphereFactor);
  float cube = sdRoundBox(p, vec3(1.*cubeFactor), .1*chamfer);
  float octa = sdOctahedron(p, 1.25 * octahedronFactor ) - .1*chamfer;
  float tetra = sdTetrahedron(p, max(.0001,tetrahedronFactor)) - .1*chamfer;
  
  float a = sphere;
  a = opSmoothUnion(a, tetra, smoothness);
  a = opSmoothUnion(a, cube, smoothness);
  a = opSmoothUnion(a, octa, smoothness);
  a = opSmoothUnion(a, icosa, smoothness);
  a = opSmoothUnion(a, dodeca, smoothness);

  return a;
}

float displacement(in vec3 pos) {
  float a = 0.;
  a += voronoiStrength * voronoi(voronoiScale*pos).x;
  a += noiseStrength * fbm(noiseScale*pos);

  //a = sign(a) * sqrt(abs(a));

  return a;
}

float march(vec3 ro, vec3 rd, out float disturb) {
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
  
  return d;
}

vec3 getPos(in vec3 pos, out float disturb) {
  vec3 ro = 2. * pos;
  vec3 dir = -normalize(pos);
  float d = march(ro, dir, disturb);
  vec3 newPos = ro + d * dir;
  //for(int i=0; i<curlIterations; i++){
  //newPos += .1*curlFactor*(curlNoise(curlScale*newPos));
  //}
  disturb = displacement(newPos);
  newPos += disturb * dir;
  return rotate(newPos);
}

vec3 getPos(in vec3 pos) {
  float d;
  return getPos(pos, d);
}`;

const surfaceFS = `#version 300 es
precision highp float;

uniform sampler2D positionMap;

in vec2 vUv;

out vec4 color;

${gen}

void main() {
  vec4 pos = texture(positionMap, vUv);
  float strength;
  vec3 newPos = getPos(pos.xyz, strength);
  color = vec4(newPos, strength);
}`;

const normalFS = `#version 300 es
precision highp float;

uniform sampler2D positionMap;
uniform float normalDistance;

in vec2 vUv;

out vec4 color;

${gen}

vec3 sphericalToCartesian(in float r, in float phi, in float theta) {
  return vec3(
    r * sin(theta) * cos(phi),
    r * sin(theta) * sin(phi),
    r * cos(theta)
  );
}

${isMobile() ? "#define MOBILE" : ""}

vec3 calcNormal(in vec3 p) {
  float r = length(p);
  float phi = atan(p.y, p.x);
  float theta = acos(p.z);

  float e = normalDistance;
  #ifdef MOBILE
  // Simplify mobile version workload with slightly coarser normals.
  vec3 op = getPos(p);
  vec3 dx = getPos(sphericalToCartesian(r,phi - e, theta )).xyz - op;
  vec3 dz = getPos(sphericalToCartesian(r,phi, theta - e )).xyz - op;
  #else
  vec3 dx = getPos(sphericalToCartesian(r,phi - e, theta )).xyz - getPos(sphericalToCartesian(r, phi + e, theta )).xyz;
  vec3 dz = getPos(sphericalToCartesian(r,phi, theta - e )).xyz - getPos(sphericalToCartesian(r, phi, theta + e )).xyz;
  #endif

  vec3 tangent = normalize(dx);
  vec3 binormal = normalize(dz);
  vec3 normal = normalize(cross(tangent, binormal));
  return normal;
}

void main() {
  vec4 pos = texture(positionMap, vUv);
  vec3 n = calcNormal(pos.xyz);
  color = vec4(n, 1.);
}`;

const loader = new TextureLoader();

class Bauble extends Mesh {
  constructor(renderer) {
    const geometry = new IcosahedronBufferGeometry(1, 1);
    const baubleMaterial = new RawShaderMaterial({
      uniforms: {
        positionMap: { value: null },
        normalMap: { value: null },
        // shading
        patternType: { value: 0 },
        slopeWidth: { value: 0 },
        slopeFactor: { value: 0 },
        stripeFrequency: { value: 0 },
        stripeOffset: { value: 0 },
        curvatureRim: { value: 1 },
        // strip 1
        matCapMap: { value: loader.load("./assets/red.jpg") },
        frostFactor: { value: 0 },
        useHue1: { value: false },
        color1: { value: new Color() },
        // strip 2
        matCapMap2: { value: loader.load("./assets/black.jpg") },
        frostFactor2: { value: 0 },
        useHue2: { value: false },
        color2: { value: new Color() },
      },
      vertexShader: baubleVS,
      fragmentShader: baubleFS,
    });
    super(geometry, baubleMaterial);

    const surfaceShader = new RawShaderMaterial({
      uniforms: {
        positionMap: { value: null },
        // rotation
        twistX: { value: 0 },
        twistY: { value: 0 },
        twistZ: { value: 0 },
        // sdf
        cubeFactor: { value: 0 },
        tetrahedronFactor: { value: 0 },
        octahedronFactor: { value: 0 },
        icosahedronFactor: { value: 0 },
        dodecahedronFactor: { value: 0 },
        sphereFactor: { value: 0 },
        smoothness: { value: 0 },
        chamfer: { value: 0 },
        // voronoi
        voronoiScale: { value: new Vector3(1.7, 1.7, 1.7) },
        voronoiStrength: { value: -0.07 },
        // fbm
        noiseScale: { value: 1.78 },
        noiseStrength: { value: 0.1 },
        // curl
        curlScale: { value: 1 },
        curlFactor: { value: 1 },
        curlIterations: { value: 10 },
      },
      vertexShader: orthoVS,
      fragmentShader: surfaceFS,
    });
    const surfacePass = new ShaderPass(renderer, surfaceShader, {
      type: FloatType,
      format: RGBAFormat,
      minFilter: NearestFilter,
      magFilter: NearestFilter,
    });
    this.surfacePass = surfacePass;

    const normalShader = new RawShaderMaterial({
      uniforms: {
        positionMap: { value: null },
        normalDistance: { value: 0.05 },
        // rotation
        twistX: { value: 0 },
        twistY: { value: 0 },
        twistZ: { value: 0 },
        // sdf
        cubeFactor: { value: 0 },
        tetrahedronFactor: { value: 0 },
        octahedronFactor: { value: 0 },
        icosahedronFactor: { value: 0 },
        dodecahedronFactor: { value: 0 },
        sphereFactor: { value: 0 },
        smoothness: { value: 0 },
        chamfer: { value: 0 },
        // voronoi
        voronoiScale: { value: new Vector3(1.7, 1.7, 1.7) },
        voronoiStrength: { value: -0.07 },
        // fbm
        noiseScale: { value: 1.78 },
        noiseStrength: { value: 0.1 },
        // curl
        curlScale: { value: 1 },
        curlFactor: { value: 1 },
        curlIterations: { value: 10 },
      },
      vertexShader: orthoVS,
      fragmentShader: normalFS,
    });
    const normalPass = new ShaderPass(renderer, normalShader, {
      type: FloatType,
      format: RGBAFormat,
      minFilter: NearestFilter,
      magFilter: NearestFilter,
    });
    this.normalPass = normalPass;

    this.material.uniforms.positionMap.value = surfacePass.fbo.texture;
    this.material.uniforms.normalMap.value = normalPass.fbo.texture;

    this.generateBuffers();

    this.update();
  }

  generateBuffers() {
    const positions = this.geometry.attributes.position;
    const w = Maf.nextPowerOfTwo(Math.ceil(Math.sqrt(positions.count)));
    const h = Maf.nextPowerOfTwo(positions.count / w);
    // const w = Math.ceil(Math.sqrt(positions.count));
    // const h = w;
    const positionData = new Float32Array(w * h * 4);
    const ids = new Float32Array(w * h);
    let ptr = 0;
    for (let i = 0; i < ids.length; i++) {
      positionData[ptr] = -100000;
      positionData[ptr + 1] = -100000;
      positionData[ptr + 2] = -100000;
      positionData[ptr + 3] = 0;
      ids[i] = i;
      ptr += 4;
    }
    ptr = 0;
    for (let i = 0; i < positions.count; i++) {
      positionData[ptr] = positions.array[i * 3];
      positionData[ptr + 1] = positions.array[i * 3 + 1];
      positionData[ptr + 2] = positions.array[i * 3 + 2];
      positionData[ptr + 3] = 1;
      ids[i] = i;
      ptr += 4;
    }
    this.positionTexture = new DataTexture(
      positionData,
      w,
      h,
      RGBAFormat,
      FloatType
    );
    this.positionTexture.minFilter = NearestFilter;
    this.positionTexture.magFilter = NearestFilter;
    this.positionTexture.generateMipmaps = false;

    this.geometry.setAttribute("vertexid", new BufferAttribute(ids, 1));

    this.surfacePass.shader.uniforms.positionMap.value = this.positionTexture;
    this.normalPass.shader.uniforms.positionMap.value = this.positionTexture;
    this.surfacePass.setSize(w, h);
    this.normalPass.setSize(w, h);
  }

  set normalDistance(v) {
    this.normalPass.shader.uniforms.normalDistance.value = v;
    this.update();
  }

  set cubeFactor(v) {
    this.surfacePass.shader.uniforms.cubeFactor.value = v;
    this.normalPass.shader.uniforms.cubeFactor.value = v;
    this.update();
  }

  set tetrahedronFactor(v) {
    this.surfacePass.shader.uniforms.tetrahedronFactor.value = v;
    this.normalPass.shader.uniforms.tetrahedronFactor.value = v;
    this.update();
  }

  set icosahedronFactor(v) {
    this.surfacePass.shader.uniforms.icosahedronFactor.value = v;
    this.normalPass.shader.uniforms.icosahedronFactor.value = v;
    this.update();
  }

  set dodecahedronFactor(v) {
    this.surfacePass.shader.uniforms.dodecahedronFactor.value = v;
    this.normalPass.shader.uniforms.dodecahedronFactor.value = v;
    this.update();
  }

  set octahedronFactor(v) {
    this.surfacePass.shader.uniforms.octahedronFactor.value = v;
    this.normalPass.shader.uniforms.octahedronFactor.value = v;
    this.update();
  }

  set sphereFactor(v) {
    this.surfacePass.shader.uniforms.sphereFactor.value = v;
    this.normalPass.shader.uniforms.sphereFactor.value = v;
    this.update();
  }
  set tetrahedronFactor(v) {
    this.surfacePass.shader.uniforms.tetrahedronFactor.value = v;
    this.normalPass.shader.uniforms.tetrahedronFactor.value = v;
    this.update();
  }

  set smoothness(v) {
    this.surfacePass.shader.uniforms.smoothness.value = v;
    this.normalPass.shader.uniforms.smoothness.value = v;
    this.update();
  }

  set chamfer(v) {
    this.surfacePass.shader.uniforms.chamfer.value = v;
    this.normalPass.shader.uniforms.chamfer.value = v;
    this.update();
  }

  set twistX(v) {
    this.surfacePass.shader.uniforms.twistX.value = v;
    this.normalPass.shader.uniforms.twistX.value = v;
    this.update();
  }

  set twistY(v) {
    this.surfacePass.shader.uniforms.twistY.value = v;
    this.normalPass.shader.uniforms.twistY.value = v;
    this.update();
  }

  set twistZ(v) {
    this.surfacePass.shader.uniforms.twistZ.value = v;
    this.normalPass.shader.uniforms.twistZ.value = v;
    this.update();
  }

  set voronoiStrength(v) {
    this.surfacePass.shader.uniforms.voronoiStrength.value = v;
    this.normalPass.shader.uniforms.voronoiStrength.value = v;
    this.update();
  }

  set voronoiScaleX(v) {
    this.surfacePass.shader.uniforms.voronoiScale.value.x = v;
    this.normalPass.shader.uniforms.voronoiScale.value.x = v;
    this.update();
  }

  set voronoiScaleY(v) {
    this.surfacePass.shader.uniforms.voronoiScale.value.y = v;
    this.normalPass.shader.uniforms.voronoiScale.value.y = v;
    this.update();
  }

  set voronoiScaleZ(v) {
    this.surfacePass.shader.uniforms.voronoiScale.value.z = v;
    this.normalPass.shader.uniforms.voronoiScale.value.z = v;
    this.update();
  }

  set noiseScale(v) {
    this.surfacePass.shader.uniforms.noiseScale.value = v;
    this.normalPass.shader.uniforms.noiseScale.value = v;
    this.update();
  }

  set noiseStrength(v) {
    this.surfacePass.shader.uniforms.noiseStrength.value = v;
    this.normalPass.shader.uniforms.noiseStrength.value = v;
    this.update();
  }

  set curlScale(v) {
    this.surfacePass.shader.uniforms.curlScale.value = v;
    this.normalPass.shader.uniforms.curlScale.value = v;
    this.update();
  }

  set curlFactor(v) {
    this.surfacePass.shader.uniforms.curlFactor.value = v;
    this.normalPass.shader.uniforms.curlFactor.value = v;
    this.update();
  }

  set curlIterations(v) {
    this.surfacePass.shader.uniforms.curlIterations.value = v;
    this.normalPass.shader.uniforms.curlIterations.value = v;
    this.update();
  }

  set stripeFrequency(v) {
    this.material.uniforms.stripeFrequency.value = v;
  }

  set stripeOffset(v) {
    this.material.uniforms.stripeOffset.value = v;
  }

  set frostFactor(v) {
    this.material.uniforms.frostFactor.value = v;
  }

  set frostFactor2(v) {
    this.material.uniforms.frostFactor2.value = v;
  }

  set patternType(v) {
    this.material.uniforms.patternType.value = v;
  }

  set slopeWidth(v) {
    this.material.uniforms.slopeWidth.value = v;
  }

  set slopeFactor(v) {
    this.material.uniforms.slopeFactor.value = v;
  }

  set curvatureRim(v) {
    this.material.uniforms.curvatureRim.value = v;
  }

  set matCapMap(v) {
    this.material.uniforms.matCapMap.value = v;
  }

  set matCapMap2(v) {
    this.material.uniforms.matCapMap2.value = v;
  }

  set color1(v) {
    this.material.uniforms.color1.value.set(v);
  }

  set color2(v) {
    this.material.uniforms.color2.value.set(v);
  }

  set useHue1(v) {
    this.material.uniforms.useHue1.value = v;
  }

  set useHue2(v) {
    this.material.uniforms.useHue2.value = v;
  }

  set sphereDetail(v) {
    if (this.geometry.parameters.detail !== v) {
      this.geometry = new IcosahedronBufferGeometry(1, v);
      this.generateBuffers();
      this.update();
    }
  }

  update() {
    this.surfacePass.render();
    this.normalPass.render();
  }
}

export { Bauble };

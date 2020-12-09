import {
  Group,
  Mesh,
  BufferGeometry,
  Vector3,
  IcosahedronGeometry,
  Vector2,
  CylinderGeometry,
} from "../third_party/three.module.js";
import { SimplifyModifier } from "../third_party/SimplifyModifier.js";
import Maf from "../third_party/Maf.js";

let polyhedron;
const group = new Group();
let material;
//const geo = new CylinderGeometry(4, 4, 2.2, 36 * 6, 50, true);
const geo = new IcosahedronGeometry(4, 40);

const params = {
  scale: 1,
  noise: 1,
};

const EPSILON = 0.001;
const MAXSTEPS = 100;
const MAXDIST = 100;

function sdSphere(p, s) {
  return p.length() - s;
}

Vector3.prototype.abs = function () {
  return new Vector3(Math.abs(this.x), Math.abs(this.y), Math.abs(this.z));
};

Vector3.prototype.max = function (v) {
  return new Vector3(
    Math.max(this.x, v.x),
    Math.max(this.y, v.y),
    Math.max(this.z, v.z)
  );
};

const zero = new Vector3(0, 0, 0);

function sdRoundBox(p, b, r) {
  const q = p.clone().abs().sub(b);
  const l =
    q.max(zero).length() + Math.min(Math.max(q.x, Math.max(q.y, q.z)), 0.0) - r;

  return l;
}

function sdTorus(p, t) {
  const q = new Vector2(new Vector2(p.x, p.z).length() - t.x, p.y);
  return q.length() - t.y;
}

class Util {
  constructor(p, r, e) {
    this.p = p;
    this.d = 0;
    this.r = r;
    this.e = e;

    const PI = Math.PI;
    const PHI = 1.618033988749895;
    const TAU = 2 * Math.PI;
    this.Vector3 = new Vector3(1, 1, 1).normalize();
    this.Vector4 = new Vector3(-1, 1, 1).normalize();
    this.Vector5 = new Vector3(1, -1, 1).normalize();
    this.Vector6 = new Vector3(1, 1, -1).normalize();
    this.Vector7 = new Vector3(0, 1, PHI + 1).normalize();
    this.Vector8 = new Vector3(0, -1, PHI + 1).normalize();
    this.Vector9 = new Vector3(PHI + 1, 0, 1).normalize();
    this.Vector10 = new Vector3(-PHI - 1, 0, 1).normalize();
    this.Vector11 = new Vector3(1, PHI + 1, 0).normalize();
    this.Vector12 = new Vector3(-1, PHI + 1, 0).normalize();
    this.Vector13 = new Vector3(0, PHI, 1).normalize();
    this.Vector14 = new Vector3(0, -PHI, 1).normalize();
    this.Vector15 = new Vector3(1, 0, PHI).normalize();
    this.Vector16 = new Vector3(-1, 0, PHI).normalize();
    this.Vector17 = new Vector3(PHI, 1, 0).normalize();
    this.Vector18 = new Vector3(-PHI, 1, 0).normalize();
  }

  begin() {
    this.d = 0;
  }

  add(v) {
    if (this.e) {
      this.d += Math.pow(Math.abs(p.dot(v)), this.e);
    } else {
      this.d = Math.max(this.d, Math.abs(this.p.dot(v)));
    }
  }

  end() {
    if (this.e) {
      return Math.pow(this.d, 1 / this.e) - this.r;
    } else {
      return this.d - this.r;
    }
  }
}

function fIcosahedron(p, r, e) {
  const u = new Util(p, r, e);
  u.begin();
  u.add(u.Vector3);
  u.add(u.Vector4);
  u.add(u.Vector5);
  u.add(u.Vector6);
  u.add(u.Vector7);
  u.add(u.Vector8);
  u.add(u.Vector9);
  u.add(u.Vector10);
  u.add(u.Vector11);
  u.add(u.Vector12);
  return u.end();
}

function fDodecahedron(p, r, e) {
  const u = new Util(p, r, e);
  u.begin();
  u.add(u.Vector13);
  u.add(u.Vector14);
  u.add(u.Vector15);
  u.add(u.Vector16);
  u.add(u.Vector17);
  u.add(u.Vector18);
  return u.end();
}

function clamp(v, minVal, maxVal) {
  return Math.min(maxVal, Math.max(minVal, v));
}

function opSmoothUnion(d1, d2, k) {
  const h = Maf.clamp(0.5 + (0.5 * (d2 - d1)) / k, 0.0, 1.0);
  return Maf.mix(d2, d1, h) - k * h * (1.0 - h);
}
// float opSmoothSubtraction( float d1, float d2, float k ) {
//   float h = clamp( 0.5 - 0.5*(d2+d1)/k, 0.0, 1.0 );
//   return mix( d2, -d1, h ) + k*h*(1.0-h); }
// float opSmoothIntersection( float d1, float d2, float k ) {
//   float h = clamp( 0.5 - 0.5*(d2-d1)/k, 0.0, 1.0 );
//   return mix( d2, d1, h ) + k*h*(1.0-h); }

function sdOctahedron(p, s) {
  p = p.abs();
  const m = p.x + p.y + p.z - s;
  const q = new Vector3();
  if (3.0 * p.x < m) q.set(p.x, p.y, p.z);
  else if (3.0 * p.y < m) q.set(p.y, p.z, p.x);
  else if (3.0 * p.z < m) q.set(p.z, p.x, p.y);
  else return m * 0.57735027;

  const k = clamp(0.5 * (q.z - q.y + s), 0.0, s);
  return new Vector3(q.x, q.y - s + k, q.z - k).length();
}

function opTwistX(p, k) {
  const c = Math.cos(k * p.x);
  const s = Math.sin(k * p.x);
  const ry = p.y * c - p.z * s;
  const rz = p.y * s + p.z * c;
  const q = new Vector3(p.x, ry, rz);
  return q;
}

function opTwistY(p, k) {
  const c = Math.cos(k * p.y);
  const s = Math.sin(k * p.y);
  const rx = p.x * c - p.z * s;
  const rz = p.x * s + p.z * c;
  const q = new Vector3(rx, p.y, rz);
  return q;
}

function opTwistZ(p, k) {
  const c = Math.cos(k * p.z);
  const s = Math.sin(k * p.z);
  const rx = p.x * c - p.y * s;
  const ry = p.x * s + p.y * c;
  const q = new Vector3(rx, ry, p.z);
  return q;
}

function map(p) {
  //const q = opTwistY(p, 0);
  let cube = sdRoundBox(p, new Vector3(0.5, 0.5, 0.5), 0.1);
  // return cube;
  let sphere = sdSphere(p, 1.5);
  // let torus = sdTorus(p, new Vector2(1, 0.5));
  const icosahedron = fIcosahedron(p, 1, 100);
  // return icosahedron;
  const octahedron = sdOctahedron(p, 1) - 0.1;
  // return octahedron;
  const dodecahedron = fDodecahedron(p, 1, 100);
  const d = opSmoothUnion(sphere, dodecahedron, 1);
  return d;
}

const p = new Vector3();

function march(ro, rd, time) {
  let d = EPSILON;
  let t = 0.0;
  for (let i = 0; i < MAXSTEPS; ++i) {
    p.copy(rd).multiplyScalar(d).add(ro);
    t = map(p);
    if (t < EPSILON || d >= MAXDIST) break;
    d += t;
  }
  return d;
}

async function generate() {
  if (polyhedron) {
    group.remove(polyhedron);
  }

  const v = new Vector3();
  const vertices = geo.vertices;
  for (let j = 0; j < vertices.length; j++) {
    v.copy(vertices[j]);

    const n = v.clone().normalize().multiplyScalar(-1);
    var d = march(v, n);
    const p = n.clone().multiplyScalar(d).add(v);
    vertices[j].copy(p);
  }

  for (let j = 0; j < vertices.length; j++) {
    v.copy(vertices[j]);
    //v.copy(opTwistX(v, 0.5));
    v.copy(opTwistY(v, 0.5));
    //v.copy(opTwistZ(v, 0.5));
    vertices[j].copy(v);
  }

  const simplifier = new SimplifyModifier();
  const count = geo.faces.length * 0.4;
  const simplified = geo; //simplifier.modify(geo, count);
  simplified.computeVertexNormals();
  simplified.computeFaceNormals();

  polyhedron = new Mesh(simplified, material);
  polyhedron.scale.setScalar(3);

  polyhedron.castShadow = polyhedron.receiveShadow = true;
  group.add(polyhedron);
}

const obj = {
  init: async (m, q, r) => {
    material = m;
    params.q = q || params.q;
    params.r = r || params.r;
    await generate();
  },
  update: () => {},
  group,
  generate: () => generate(material),
  params: (gui) => {
    gui.add(params, "scale", 0.1, 2, 0.1).onChange(generate);
    gui.add(params, "noise", 0.1, 2, 0.1).onChange(generate);
  },
};

export { obj };

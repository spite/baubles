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

function dot(a, b) {
  return a.x * b.x + a.y * b.y + a.z * b.z;
}

const v1 = new Vector3(127.1, 311.7, 74.7);
const v2 = new Vector3(269.5, 183.3, 246.1);
const v3 = new Vector3(113.5, 271.9, 124.6);

const tmp = new Vector3();
const a = new Vector3();
function hash(a) {
  tmp.set(dot(a, v1), dot(a, v2), dot(a, v3));

  return {
    x: Maf.fract(Math.sin(tmp.x) * 43758.5453123),
    y: Maf.fract(Math.sin(tmp.y) * 43758.5453123),
    z: Maf.fract(Math.sin(tmp.z) * 43758.5453123),
  };
}

const p = new Vector3();
const f = new Vector3();
const res = new Vector2();
const b = new Vector3();
const r = new Vector3();
const v4 = new Vector3(1.0, 57.0, 113.0);

function voronoi(x) {
  p.set(Math.floor(x.x), Math.floor(x.y), Math.floor(x.z));
  f.set(Maf.fract(x.x), Maf.fract(x.y), Maf.fract(x.z));

  let id = 0.0;
  res.set(100, 100.0);
  for (let k = -1; k <= 1; k++) {
    for (let j = -1; j <= 1; j++) {
      for (let i = -1; i <= 1; i++) {
        b.set(i, j, k);
        tmp.copy(p).add(b);
        const h = hash(tmp);
        r.set(b.x - f.x + h.x, b.y - f.y + h.y, b.z - f.z + h.z);
        const d = dot(r, r);
        if (d < res.x) {
          id = dot(tmp, v4);
          res.set(d, res.x);
        } else if (d < res.y) {
          res.y = d;
        }
      }
    }
  }

  return Math.sqrt(res.x); // new Vector3(Math.sqrt(res.x), Math.sqrt(res.y), Math.abs(id));
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

const v = new Vector3();
function calcVoronoiPos(pos) {
  v.copy(pos).multiplyScalar(0.25);
  tmp.copy(v).multiplyScalar(2);
  const vr = voronoi(tmp);
  tmp.copy(v).normalize().multiplyScalar(-1);
  var d = -0.1 * Maf.smoothStep(0, 1, vr);
  tmp.multiplyScalar(d).add(v);
  return tmp.clone();
}

function sphericalToCartesian(r, theta, phi) {
  const x = r * Math.sin(theta) * Math.cos(phi);
  const y = r * Math.sin(theta) * Math.sin(phi);
  const z = r * Math.cos(theta);
  return new Vector3(x, y, z);
}

function calcNormal(pos) {
  const inc = 0.0001;
  tmp.clone(pos);
  tmp.x += inc;
  let p1 = voronoi(tmp);
  tmp.clone(pos);
  tmp.x -= inc;
  let p2 = voronoi(tmp);
  const x = p1 - p2;

  tmp.clone(pos);
  tmp.y += inc;
  p1 = voronoi(tmp);
  tmp.clone(pos);
  tmp.y -= inc;
  p2 = voronoi(tmp);
  const y = p1 - p2;

  tmp.clone(pos);
  tmp.z += inc;
  p1 = voronoi(tmp);
  tmp.clone(pos);
  tmp.z -= inc;
  p2 = voronoi(tmp);
  const z = p1 - p2;

  return new Vector3(x, y, z).normalize();
}

async function generate() {
  if (polyhedron) {
    group.remove(polyhedron);
  }

  const normals = [];
  const vertices = geo.vertices;
  for (let j = 0; j < vertices.length; j++) {
    const p1 = calcVoronoiPos(vertices[j]);
    vertices[j].copy(p1);
    normals[j] = calcNormal(vertices[j]);
  }

  // for (let j = 0; j < geo.faces.length; j++) {
  //   const face = geo.faces[j];
  //   face.vertexNormals[0].copy(normals[face.a]);
  //   face.vertexNormals[1].copy(normals[face.b]);
  //   face.vertexNormals[2].copy(normals[face.c]);
  // }

  // for (let j = 0; j < vertices.length; j++) {
  //   v.copy(vertices[j]);
  //   //v.copy(opTwistX(v, 0.5));
  //   v.copy(opTwistY(v, 5));
  //   //v.copy(opTwistZ(v, 0.5));
  //   //vertices[j].copy(v);
  // }

  const simplifier = new SimplifyModifier();
  const count = geo.faces.length * 0.4;
  const simplified = geo; //simplifier.modify(geo, count);
  simplified.computeVertexNormals(true);
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

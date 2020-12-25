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
import { Bauble } from "./bauble.js";

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

const bauble = new Bauble(renderer);
scene.add(bauble);

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

//renderer.domElement.style.display = "none";

const defaultParams = {
  sphereDetail: 80,
  tetrahedronFactor: 0,
  octahedronFactor: 0,
  icosahedronFactor: 0,
  dodecahedronFactor: 1,
  cubeFactor: 0,
  sphereFactor: 0.25,
  chamfer: 1,
  smoothness: 0.5,
  voronoiScaleX: 4,
  voronoiScaleY: 4,
  voronoiScaleZ: 4,
  voronoiStrength: -0.035,
  curlScale: 1,
  curlFactor: 1,
  curlIterations: 0,
  normalDistance: 0.05,
  curvatureRim: 1,
  noiseScale: 1.78,
  noiseStrength: 0.1,
  stripeFrequency: 20,
  stripeOffset: 0,
  frostFactor: 0.05,
  frostFactor2: 0,
  slopeFactor: 1,
  slopeWidth: 1,
  twistX: 0,
  twistY: 0,
  twistZ: 0,
  wireframe: false,
  pattern: 2,
  matcap1: "Black",
  matcap2: "Red",
  useHue1: false,
  color1: "#b70000",
  useHue2: false,
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

function serialise(state) {
  const data = JSON.stringify(state);
  localStorage.setItem("baubles", data);
  window.location.hash = encodeURIComponent(data);
}

const matcaps = {
  Black: "black.jpg",
  "Black matte": "black-matte.jpg",
  Red: "red.jpg",
  "Red matte": "red-matte.jpg",
  Gold: "gold.jpg",
  Silver: "silver.jpg",
  Cream: "cream.png",
};

const vesc = new Vesc();
const state = vesc.createProxy({ ...defaultParams, ...deserialise() });
vesc.onChange(() => {
  serialise(state);
});
const stateMat = vesc.createProxy({
  matcapFile: null,
  matcap2File2: null,
  reset: () => {
    const keys = Object.keys(defaultParams);
    for (const key of keys) {
      state[key] = defaultParams[key];
    }
  },
  randomizeShape: () => {
    vesc.randomize([
      "tetrahedronFactor",
      "octahedronFactor",
      "icosahedronFactor",
      "dodecahedronFactor",
      "cubeFactor",
      //"sphereFactor",
      "smoothness",
    ]);
  },
  randomizeVoronoi: () => {
    vesc.randomize([
      "voronoiScaleX",
      "voronoiScaleY",
      "voronoiScaleZ",
      "voronoiStrength",
    ]);
  },
  randomizeFBM: () => {
    vesc.randomize(["noiseScale", "noiseStrength"]);
  },
  randomizeShading: () => {
    vesc.randomize([
      "stripeFrequency",
      "stripeOffset",
      "frostFactor",
      "frostFactor2",
      //"slopeWidth",
      "slopeFactor",
      "pattern",
      "matcap1",
      "matcap2",
    ]);
  },
});
const materialFolder = vesc.addFolder("Parameters");
const geometryFolder = materialFolder.addFolder("Geometry");
geometryFolder
  .add(state, "sphereDetail", 0, 200, 10)
  .onChange((v) => {
    bauble.sphereDetail = isMobile() ? v / 4 : v;
  })
  .setText("Sphere detail")
  .setDescription(
    "Defines the tessellation of the base geometry. Higher is more detail, but worse performance."
  );
const polyFolder = geometryFolder.addFolder("Shape (SDF values)");
polyFolder
  .add(state, "tetrahedronFactor", 0, 1, 0.01)
  .onChange((v) => {
    bauble.tetrahedronFactor = v;
  })
  .setText("Tetrahedron")
  .setDescription("Defines the amount of tetrahedron in the shape");
polyFolder
  .add(state, "cubeFactor", 0, 1, 0.01)
  .onChange((v) => {
    bauble.cubeFactor = v;
  })
  .setText("Cube")
  .setDescription("Defines the amount of cube in the shape");
polyFolder
  .add(state, "octahedronFactor", 0, 1, 0.01)
  .onChange((v) => {
    bauble.octahedronFactor = v;
  })
  .setText("Octahedron")
  .setDescription("Defines the amount of octahedron in the shape");
polyFolder
  .add(state, "icosahedronFactor", 0, 1, 0.01)
  .onChange((v) => {
    bauble.icosahedronFactor = v;
  })
  .setText("Icosahedron")
  .setDescription("Defines the amount of icosahedron in the shape");
polyFolder
  .add(state, "dodecahedronFactor", 0, 1, 0.01)
  .onChange((v) => {
    bauble.dodecahedronFactor = v;
  })
  .setText("Dodecahedron")
  .setDescription("Defines the amount of dodecahedron in the shape");
polyFolder
  .add(state, "sphereFactor", 0, 1, 0.01)
  .onChange((v) => {
    bauble.sphereFactor = v;
  })
  .setText("Sphere")
  .setDescription("Defines the amount of sphere in the shape");
polyFolder
  .add(state, "smoothness", 0, 1, 0.01)
  .onChange((v) => {
    bauble.smoothness = v;
  })
  .setText("Smoothness")
  .setDescription("Defines the smoothness of the union of shapes");
polyFolder
  .add(state, "chamfer", 0, 3, 0.01)
  .onChange((v) => {
    bauble.chamfer = v;
  })
  .setText("Chamfer")
  .setDescription("Defines the amount of chamfer in each shape");
polyFolder.add(stateMat, "randomizeShape").setText("Randomize shape");

// ROTATION

const twistFolder = geometryFolder.addFolder("Twist");
twistFolder
  .add(state, "twistX", -Math.PI, Math.PI, 0.01)
  .onChange((v) => {
    bauble.twistX = v;
  })
  .setText("Twist X")
  .setDescription("Defines the twist applied on axis X");
twistFolder
  .add(state, "twistY", -Math.PI, Math.PI, 0.01)
  .onChange((v) => {
    bauble.twistY = v;
  })
  .setText("Twist Y")
  .setDescription("Defines the twist applied on axis Y");
twistFolder
  .add(state, "twistZ", -Math.PI, Math.PI, 0.01)
  .onChange((v) => {
    bauble.twistZ = v;
  })
  .setText("Twist Z")
  .setDescription("Defines the twist applied on axis Z");

// VORONOI

const surfaceFolder = geometryFolder.addFolder("Surface noise");
const voronoiFolder = surfaceFolder.addFolder("Voronoi");
voronoiFolder
  .add(state, "voronoiScaleX", 0, 10, 0.01)
  .onChange((v) => {
    bauble.voronoiScaleX = v;
  })
  .setText("Scale X")
  .setDescription("The X scale of the voronoi noise");
voronoiFolder
  .add(state, "voronoiScaleY", 0, 10, 0.01)
  .onChange((v) => {
    bauble.voronoiScaleY = v;
  })
  .setText("Scale Y")
  .setDescription("The Y scale of the voronoi noise");
voronoiFolder
  .add(state, "voronoiScaleZ", 0, 10, 0.01)
  .onChange((v) => {
    bauble.voronoiScaleZ = v;
  })
  .setText("Scale Z")
  .setDescription("The Z scale of the voronoi noise");
voronoiFolder
  .add(state, "voronoiStrength", -1, 1, 0.001)
  .onChange((v) => {
    bauble.voronoiStrength = v;
  })
  .setText("Strength")
  .setDescription("The strength of the voronoi noise displacement");
voronoiFolder
  .add(stateMat, "randomizeVoronoi")
  .setText("Randomize voronoi values");

// CURL

const curlFolder = surfaceFolder.addFolder("Curl");
curlFolder.add("WARNING: Use at your own risk!");
curlFolder
  .add(state, "curlScale", 0, 10, 0.01)
  .onChange((v) => {
    bauble.curlScale = v;
  })
  .setText("Scale")
  .setDescription("The XYZ scale of the curl noise");
curlFolder
  .add(state, "curlFactor", 0, 1, 0.01)
  .onChange((v) => {
    bauble.curlFactor = v;
  })
  .setText("Strength")
  .setDescription("The strength of the curl noise displacement");
curlFolder
  .add(state, "curlIterations", 0, 100, 0.01)
  .onChange((v) => {
    bauble.curlIterations = v;
  })
  .setText("Iterations")
  .setDescription("Number of times the vertex will be displaced");

// FBM

const noiseFolder = surfaceFolder.addFolder("FBM");
noiseFolder
  .add(state, "noiseScale", 0, 10, 0.01)
  .onChange((v) => {
    bauble.noiseScale = v;
  })
  .setText("Scale")
  .setDescription("The XYZ scale of the FBM noise");
noiseFolder
  .add(state, "noiseStrength", -1, 1, 0.01)
  .onChange((v) => {
    bauble.noiseStrength = v;
  })
  .setText("Strength")
  .setDescription("The strength of the FBM noise displacement");
noiseFolder.add(stateMat, "randomizeFBM").setText("Randomize FBM noise values");

// SHADING

const shadingFolder = materialFolder.addFolder("Shading");
shadingFolder
  .add(state, "normalDistance", 0.01, 0.1, 0.001)
  .onChange((v) => {
    bauble.normalDistance = v;
  })
  .setText("Normal distance")
  .setDescription(
    "Defines the distance to sample around to calculate the gradient"
  );
shadingFolder.add(state, "curvatureRim", 0, 4, 0.01).onChange((v) => {
  bauble.curvatureRim = v;
});

const patternFolder = shadingFolder.addFolder("Pattern");
patternFolder
  .add(state, "pattern", [
    [1, "Stripes"],
    [2, "Spiral"],
    //[3, "Strength"],
  ])
  .onChange((v) => {
    bauble.patternType = v;
  });

patternFolder.add(state, "stripeFrequency", 0, 200, 1).onChange((v) => {
  bauble.stripeFrequency = v;
});
patternFolder.add(state, "stripeOffset", -1.1, 1.1, 0.01).onChange((v) => {
  bauble.stripeOffset = v;
});
patternFolder.add(state, "slopeFactor", -5, 5, 0.01).onChange((v) => {
  bauble.slopeFactor = v;
});
patternFolder.add(state, "slopeWidth", 0, 100, 0.1).onChange((v) => {
  bauble.slopeWidth = v;
});

const stripeFolder1 = patternFolder.addFolder("Stripe 1");
stripeFolder1
  .add(state, "frostFactor", 0, 0.1, 0.01)
  .onChange((v) => {
    bauble.frostFactor = v;
  })
  .setText("Frostiness");

const stripeFolder2 = patternFolder.addFolder("Stripe 2");
stripeFolder2
  .add(state, "frostFactor2", 0, 0.1, 0.01)
  .onChange((v) => {
    bauble.frostFactor2 = v;
  })
  .setText("Frostiness");

const matcapSelection = [];
for (const id of Object.keys(matcaps)) {
  matcapSelection.push([id, id]);
}
stripeFolder1
  .add(state, "matcap1", matcapSelection)
  .onChange((v) => {
    bauble.matCapMap = loader.load(`./assets/${matcaps[v]}`);
  })
  .setText("Material");
stripeFolder2
  .add(state, "matcap2", matcapSelection)
  .onChange((v) => {
    bauble.matCapMap2 = loader.load(`./assets/${matcaps[v]}`);
  })
  .setText("Material");

stripeFolder1
  .add(state, "useHue1")
  .setText("Use hue")
  .onChange((v) => (bauble.useHue1 = v));
stripeFolder1
  .addColor(state, "color1")
  .setText("Color")
  .onChange((v) => (bauble.color1 = v));
stripeFolder2
  .add(state, "useHue2")
  .setText("Use hue")
  .onChange((v) => (bauble.useHue2 = v));
stripeFolder2
  .addColor(state, "color2")
  .setText("Color")
  .onChange((v) => (bauble.color2 = v));
stripeFolder1
  .addFile(stateMat, "matcapFile")
  .setText("MatCap")
  .onChange((v) => {
    if (v) {
      bauble.matCapMap = loader.load(v);
    }
  });
stripeFolder2
  .addFile(stateMat, "matcapFile2")
  .setText("MatCap")
  .onChange((v) => {
    if (v) {
      bauble.matCapMap2 = loader.load(v);
    }
  });

shadingFolder.add(stateMat, "randomizeShading").setText("Randomize shading");

const actionsFolder = materialFolder.addFolder("Actions");
actionsFolder.add(stateMat, "reset").setText("Reset parameters");
actionsFolder.add(state, "wireframe").onChange((v) => {
  bauble.material.wireframe = v;
});

window.state = state;

let active = true;
window.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    active = !active;
  }
});

function render() {
  if (active) {
    //    bauble.update();
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

async function init() {
  //obj.init(material);
  //scene.add(obj.group);
  //const controllers = await initScene(scene, material, gui);
  resize();
  render();
  document.querySelector("#info").className = "hidden";
}

onResize(() => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const dPR = window.devicePixelRatio;
  backdropMaterial.uniforms.resolution.value.set(width * dPR, height * dPR);
  //post.setSize(width * dPR, height * dPR);
});

window.addEventListener("load", () => init());

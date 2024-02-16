// ////////////////////////////////////////////////////////////////////////
// import(/* webpackIgnore: true */ 'https://docs.lume.io/modules/three/src/Three.js').then(module => console.log(module.default));

// import {Motor} from 'lume';
// // import {Motor} from '../../node_modules/lume/src/core/Motor';
// import * as THREE from "lume";
// import {GUI} from "lume";
// import {MarchingCubes} from "lume";
// import {ToonShader1, ToonShader2, ToonShaderHatching, ToonShaderDotted} from "lume";
// // import * as THREE from "https://docs.lume.io/modules/three/src/Three.js";
// // import {GUI} from "https://docs.lume.io/modules/three/examples/jsm/libs/lil-gui.module.min.js";
// // import {MarchingCubes} from "https://docs.lume.io/modules/three/examples/jsm/objects/MarchingCubes.js";
// // import {ToonShader1, ToonShader2, ToonShaderHatching, ToonShaderDotted} from "https://docs.lume.io/modules/three/examples/jsm/shaders/ToonShader.js";
// // // import Stats from "https://docs.lume.io/modules/three/examples/jsm/libs/stats.module.js";
// // // import {OrbitControls} from "https://docs.lume.io/modules/three/examples/jsm/controls/OrbitControls.js";

// let currentMaterial = 'liquid2'
// let resolution = 60
// const numBlobs = window.innerWidth <= 720 ? 5 : 10
// cameraRig.distance = cameraRig.minDistance = cameraRig.maxDistance = window.innerWidth <= 720 ? 2000 : 1500

// const effectController = {
//   material: currentMaterial,

//   speed: 0.2,
//   resolution,
//   isolation: 15,
//   numBlobs,

//   floor: false,
//   wallx: false,
//   wallz: false,

//   dummy: function () {},
// }

// let time = 0

// const clock = new THREE.Clock()

// const container = document.getElementById('lume-container')

// // MATERIALS

// const materials = generateMaterials()

// // MARCHING CUBES

// const effect = new MarchingCubes(resolution, materials[currentMaterial], true, true, 100000)
// effect.position.set(0, 0, 0)
// effect.scale.set(700, 1000, 700)

// effect.enableUvs = false
// effect.enableColors = false

// // LUME ///////////////
// const lumeScene = document.getElementById('lumeScene')
// lumeScene.three.add(effect)

// // STATS

// // const stats = new Stats()
// // lume-container.appendChild(stats.dom)

// // GUI

// setupGui()

// Motor.addRenderTask(animate)

// //

// function generateMaterials() {
//   // environment map

//   // TODO use local images
//   const path = "https://threejs.org/examples/textures/cube/SwedishRoyalCastle/"
//   const format = '.jpg'
//   const urls = [
//     path + 'px' + format,
//     path + 'nx' + format,
//     path + 'py' + format,
//     path + 'ny' + format,
//     path + 'pz' + format,
//     path + 'nz' + format,
//   ]

//   // With cube map
//   const cubeTextureLoader = new THREE.CubeTextureLoader()
//   const reflectionCube = cubeTextureLoader.load(urls)
//   const refractionCube = cubeTextureLoader.load(urls)
//   refractionCube.mapping = THREE.CubeRefractionMapping
//   // With equirectangular image.
//   // const textureLoader = new THREE.TextureLoader()
//   // const refractionCube = textureLoader.load('./nasa-astrobee-robot/luna-station.jpg')
//   // refractionCube.mapping = THREE.CubeRefractionMapping

//   // toons

//   const toonMaterial1 = createShaderMaterial(ToonShader1, light.three, ambientLight.three)
//   const toonMaterial2 = createShaderMaterial(ToonShader2, light.three, ambientLight.three)
//   const hatchingMaterial = createShaderMaterial(ToonShaderHatching, light.three, ambientLight.three)
//   const dottedMaterial = createShaderMaterial(ToonShaderDotted, light.three, ambientLight.three)

//   // TODO use local images
//   const texture = new THREE.TextureLoader().load("https://threejs.org/examples/textures/uv_grid_opengl.jpg")
//   texture.wrapS = THREE.RepeatWrapping
//   texture.wrapT = THREE.RepeatWrapping
//   texture.colorSpace = THREE.SRGBColorSpace

//   const materials = {
//     shiny: new THREE.MeshStandardMaterial({color: 0x9c0000, envMap: reflectionCube, roughness: 0.1, metalness: 1.0}),
//     chrome: new THREE.MeshLambertMaterial({color: 0xffffff, envMap: reflectionCube}),
//     liquid: new THREE.MeshLambertMaterial({color: 0xffffff, envMap: refractionCube, refractionRatio: 0.85}),
//     liquid2: new THREE.MeshPhysicalMaterial({
//       color: '#ff6500', // blood orange
//       // color: 'orange', // blood orange
//       // color: '#white', // blood orange
//       metalness: 0,
//       roughness: 0.8,
//       // envMap: refractionCube,
//       ior: 1.5,
//       transmission: 0.9,
//       thickness: 2,
//     }),
//     matte: new THREE.MeshPhongMaterial({specular: 0x494949, shininess: 1}),
//     flat: new THREE.MeshLambertMaterial({
//       /*TODO flatShading: true */
//     }),
//     textured: new THREE.MeshPhongMaterial({color: 0xffffff, specular: 0x111111, shininess: 1, map: texture}),
//     colors: new THREE.MeshPhongMaterial({color: 0xffffff, specular: 0xffffff, shininess: 2, vertexColors: true}),
//     multiColors: new THREE.MeshPhongMaterial({shininess: 2, vertexColors: true}),
//     plastic: new THREE.MeshPhongMaterial({specular: 0xc1c1c1, shininess: 250}),
//     toon1: toonMaterial1,
//     toon2: toonMaterial2,
//     hatching: hatchingMaterial,
//     dotted: dottedMaterial,
//   }

//   return materials
// }

// function createShaderMaterial(shader, threeLight, threeAmbient) {
//   const u = THREE.UniformsUtils.clone(shader.uniforms)

//   const vs = shader.vertexShader
//   const fs = shader.fragmentShader

//   const material = new THREE.ShaderMaterial({uniforms: u, vertexShader: vs, fragmentShader: fs})

//   material.uniforms['uDirLightPos'].value = threeLight.position
//   material.uniforms['uDirLightColor'].value = threeLight.color

//   material.uniforms['uAmbientLightColor'].value = threeAmbient.color

//   return material
// }

// //

// function setupGui() {
//   const createHandler = function (id) {
//     return function () {
//       currentMaterial = id

//       effect.material = materials[id]
//       effect.enableUvs = currentMaterial === 'textured' ? true : false
//       effect.enableColors = currentMaterial === 'colors' || currentMaterial === 'multiColors' ? true : false
//     }
//   }

//   // Initial
//   createHandler(currentMaterial)()

//   let h

//   const gui = new GUI()

//   // material (type)

//   h = gui.addFolder('Materials')

//   for (const m in materials) {
//     effectController[m] = createHandler(m)
//     h.add(effectController, m).name(m)
//   }

//   // simulation

//   h = gui.addFolder('Simulation')

//   h.add(effectController, 'speed', 0.1, 8.0, 0.05)
//   h.add(effectController, 'numBlobs', 1, 50, 1)
//   h.add(effectController, 'resolution', 14, 100, 1)
//   h.add(effectController, 'isolation', 10, 300, 1)

//   h.add(effectController, 'floor')
//   h.add(effectController, 'wallx')
//   h.add(effectController, 'wallz')
// }

// // this controls content of marching cubes voxel field

// function updateCubes(object, time, numblobs, floor, wallx, wallz) {
//   object.reset()

//   // fill the field with some metaballs

//   const rainbow = [
//     new THREE.Color(0xff0000),
//     new THREE.Color(0xffbb00),
//     new THREE.Color(0xffff00),
//     new THREE.Color(0x00ff00),
//     new THREE.Color(0x0000ff),
//     new THREE.Color(0x9400bd),
//     new THREE.Color(0xc800eb),
//   ]
//   const subtract = 12
//   const strength = 1.2 / ((Math.sqrt(numblobs) - 1) / 4 + 1)

//   for (let i = 0; i < numblobs; i++) {
//     const ballx = Math.sin(i + 1.26 * time * (1.03 + 0.5 * Math.cos(0.21 * i))) * 0.27 + 0.5
//     const bally = Math.abs(Math.cos(i + 1.12 * time * Math.cos(1.22 + 0.1424 * i))) * 0.77 // dip into the floor
//     const ballz = Math.cos(i + 1.32 * time * 0.1 * Math.sin(0.92 + 0.53 * i)) * 0.27 + 0.5

//     if (currentMaterial === 'multiColors') {
//       object.addBall(ballx, bally, ballz, strength, subtract, rainbow[i % 7])
//     } else {
//       object.addBall(ballx, bally, ballz, strength, subtract)
//     }
//   }

//   if (floor) object.addPlaneY(2, 12)
//   if (wallz) object.addPlaneZ(2, 12)
//   if (wallx) object.addPlaneX(2, 12)

//   object.update()
// }

// //

// function animate() {
//   update()
//   // stats.update()
//   lumeScene.needsUpdate() // Notify that Lume scene should redraw
// }

// function update() {
//   const delta = clock.getDelta()

//   time += delta * effectController.speed * 0.5

//   // marching cubes

//   if (effectController.resolution !== resolution) {
//     resolution = effectController.resolution
//     effect.init(Math.floor(resolution))
//   }

//   if (effectController.isolation !== effect.isolation) {
//     effect.isolation = effectController.isolation
//   }

//   updateCubes(
//     effect,
//     time,
//     effectController.numBlobs,
//     effectController.floor,
//     effectController.wallx,
//     effectController.wallz,
//   )
// }
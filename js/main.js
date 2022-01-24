const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.5, 1000);
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color(0x574073);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Sets Camera Position
camera.position.z = 25;

//Initializes the lighting
//Hemisphere Light
const hemisphereLight = new THREE.HemisphereLight(0xffe8d6, 0x261c4f, 0.3);
scene.add(hemisphereLight);

//Point Light
const pointLight = new THREE.PointLight(0xff99f8, 0.5, 100);
pointLight.position.set(-9, -2, 7);
scene.add(pointLight);

//Directional Light
const directionalLight = new THREE.DirectionalLight(0xffe8d6, 1, castShadow = true);
scene.add(directionalLight);

//Initializes the textures to use for couch and table
const fabricTexture = new THREE.TextureLoader().load('assets/textures/couch_fabric.jpg');
const woodTexture = new THREE.TextureLoader().load('assets/textures/wood_texture.jpg');
const rugPattern = new THREE.TextureLoader().load('assets/textures/rug_pattern.jpg');
const outsideView = new THREE.TextureLoader().load('assets/textures/sunset_texture.jpg');
const posterPicture = new THREE.TextureLoader().load('assets/textures/poster_texture.jpg');
const posterPicture2 = new THREE.TextureLoader().load('assets/textures/poster_texture_2.jpg');
const wallTexture = new THREE.TextureLoader().load('assets/textures/wall_texture.jpg');
const leavesTexture = new THREE.TextureLoader().load('assets/textures/leaves_texture.jpg');
const floorTexture = new THREE.TextureLoader().load('assets/textures/floor_texture.jpg');

//Couch
const couchMaterial = new THREE.MeshLambertMaterial({ map: fabricTexture });

const couchSeatGeometry = new THREE.BoxGeometry(19, 5, 7);
const couchArmsGeometry = new THREE.BoxGeometry(3, 8, 7);
const couchBackGeometry = new THREE.BoxGeometry(22, 12, 7);

const couchSeat = new THREE.Mesh(couchSeatGeometry, couchMaterial);
const couchArmR = new THREE.Mesh(couchArmsGeometry, couchMaterial);
const couchArmL = new THREE.Mesh(couchArmsGeometry, couchMaterial);
const couchBack = new THREE.Mesh(couchBackGeometry, couchMaterial);

scene.add(couchSeat);
scene.add(couchArmR);
scene.add(couchArmL);
scene.add(couchBack);

// Window
const skyGeometry = new THREE.PlaneGeometry(30, 12);
const skyMaterial = new THREE.MeshBasicMaterial({ map: outsideView, side: THREE.DoubleSide });
const sky = new THREE.Mesh(skyGeometry, skyMaterial);
scene.add(sky);

const windowFrameGeometry = new THREE.PlaneGeometry(30, 1.5);
const windowFrameMaterial = new THREE.MeshLambertMaterial({ map: woodTexture, side: THREE.DoubleSide });
const windowFrame1 = new THREE.Mesh(windowFrameGeometry, windowFrameMaterial);
const windowFrame2 = new THREE.Mesh(windowFrameGeometry, windowFrameMaterial);
const windowFrame3 = new THREE.Mesh(windowFrameGeometry, windowFrameMaterial);
const windowFrame4 = new THREE.Mesh(windowFrameGeometry, windowFrameMaterial);
const windowFrame5 = new THREE.Mesh(windowFrameGeometry, windowFrameMaterial);
scene.add(windowFrame1);
scene.add(windowFrame2);
scene.add(windowFrame3);

//Table
const tableMaterial = new THREE.MeshPhongMaterial({ map: woodTexture });

const tableTopGeometry = new THREE.BoxGeometry(19, 2, 8);
const tableLegsGeometry = new THREE.CylinderGeometry(1, 1, 4, 13);

const tableTop = new THREE.Mesh(tableTopGeometry, tableMaterial);
const tableLegR1 = new THREE.Mesh(tableLegsGeometry, tableMaterial);
const tableLegR2 = new THREE.Mesh(tableLegsGeometry, tableMaterial);
const tableLegL1 = new THREE.Mesh(tableLegsGeometry, tableMaterial);
const tableLegL2 = new THREE.Mesh(tableLegsGeometry, tableMaterial);

scene.add(tableTop);
scene.add(tableLegR1);
scene.add(tableLegR2);
scene.add(tableLegL1);
scene.add(tableLegL2);

//Rug
const rugGeometry = new THREE.PlaneGeometry(25, 13);
const rugMaterial = new THREE.MeshLambertMaterial({ map: rugPattern, side: THREE.DoubleSide });
const rug = new THREE.Mesh(rugGeometry, rugMaterial);
scene.add(rug);

//Posters
const posterGeometry = new THREE.PlaneGeometry(13, 19);
const posterMaterial = new THREE.MeshLambertMaterial({ map: posterPicture, side: THREE.DoubleSide });
const aestheticPoster = new THREE.Mesh(posterGeometry, posterMaterial);
scene.add(aestheticPoster);

const motivationMaterial = new THREE.MeshLambertMaterial({ map: posterPicture2, side: THREE.DoubleSide });
const motivationalPoster = new THREE.Mesh(posterGeometry, motivationMaterial);
scene.add(motivationalPoster);

//Weird cube
const weirdCubeGeometry = new THREE.BoxGeometry(2, 2, 2);
const weirdCubeMaterial = new THREE.MeshNormalMaterial();
const weirdCube = new THREE.Mesh(weirdCubeGeometry, weirdCubeMaterial);
scene.add(weirdCube);

//Wall
const wallGeometry = new THREE.PlaneGeometry(120, 45);
const wallMaterial = new THREE.MeshLambertMaterial({ map: wallTexture, side: THREE.DoubleSide });
const wall = new THREE.Mesh(wallGeometry, wallMaterial);
scene.add(wall);

//Floor
const floorGeometry = new THREE.PlaneGeometry(150, 45);
const floorMaterial = new THREE.MeshLambertMaterial({ map: floorTexture, side: THREE.DoubleSide });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
scene.add(floor);


//Vase
const vaseGeometry = new THREE.CylinderGeometry(3.5, 2.5, 4, 6);
const vaseMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
const vase1 = new THREE.Mesh(vaseGeometry, vaseMaterial);
const vase2 = new THREE.Mesh(vaseGeometry, vaseMaterial);
const vase3 = new THREE.Mesh(vaseGeometry, vaseMaterial);
scene.add(vase1);
scene.add(vase2);
scene.add(vase3);

const plantGeometry = new THREE.ConeGeometry(2, 8, 13);
const plantMaterial = new THREE.MeshLambertMaterial({ color: 0x32a852, map: leavesTexture });
const plant1 = new THREE.Mesh(plantGeometry, plantMaterial);
const plant2 = new THREE.Mesh(plantGeometry, plantMaterial);
const plant3 = new THREE.Mesh(plantGeometry, plantMaterial);
scene.add(plant1);
scene.add(plant2);
scene.add(plant3);

function animate() {
  requestAnimationFrame(animate);

  //Couch assembly
  couchSeat.position.x = -9;
  couchSeat.position.y = -7;
  couchSeat.position.z = -3;

  couchArmR.position.x = -20;
  couchArmR.position.y = -5.5;
  couchArmR.position.z = -3;

  couchArmL.position.x = 0.5;
  couchArmL.position.y = -5.5;
  couchArmL.position.z = -3;

  couchBack.position.x = -9;
  couchBack.position.y = -3;
  couchBack.position.z = -6;

  //Table assembly
  tableTop.position.x = -9;
  tableTop.position.y = -5;
  tableTop.position.z = 7;

  tableLegR1.position.x = -1;
  tableLegR1.position.y = -6.5;
  tableLegR1.position.z = 10;

  tableLegR2.position.x = -0.5;
  tableLegR2.position.y = -8.5;
  tableLegR2.position.z = 1.5;

  tableLegL1.position.x = -17;
  tableLegL1.position.y = -6.5;
  tableLegL1.position.z = 10;

  tableLegL2.position.x = -19.5;
  tableLegL2.position.y = -8.5;
  tableLegL2.position.z = 1.5;

  //Sky and Window
  sky.position.x = -11;
  sky.position.y = 12;
  sky.position.z = -7;

  windowFrame1.position.x = -11;
  windowFrame1.position.y = 18;
  windowFrame1.position.z = -7;

  windowFrame2.position.x = -11;
  windowFrame2.position.y = 12;
  windowFrame2.position.z = -7;

  windowFrame3.position.x = -11;
  windowFrame3.position.y = 6;
  windowFrame3.position.z = -7;

  //Posters
  aestheticPoster.position.x = 15;
  aestheticPoster.position.y = 10;
  aestheticPoster.position.z = -7;

  motivationalPoster.position.x = 34;
  motivationalPoster.position.y = 10;
  motivationalPoster.position.z = -7;

  //Rug
  rug.position.x = -11;
  rug.position.y = -11;
  rug.position.z = 3;

  rug.rotation.x = 14;

  //Weird Cube
  weirdCube.position.x = -9;
  weirdCube.position.y = -2;
  weirdCube.position.z = 7;

  weirdCube.rotation.x += 0.01;
  weirdCube.rotation.y += 0.01;

  //Vase
  vase1.position.x = 8;
  vase1.position.y = -10;
  vase1.position.z = -7;

  vase2.position.x = 18;
  vase2.position.y = -10;
  vase2.position.z = -7;

  vase3.position.x = 28;
  vase3.position.y = -10;
  vase3.position.z = -7;

  plant1.position.x = 8;
  plant1.position.y = -4;
  plant1.position.z = -7;

  plant2.position.x = 18;
  plant2.position.y = -4;
  plant2.position.z = -7;

  plant3.position.x = 28;
  plant3.position.y = -4;
  plant3.position.z = -7;

  //Wall
  wall.position.y = 12;
  wall.position.z = -10;

  //Floor
  floor.position.y = -12;
  floor.position.z = -3;

  floor.rotation.x = 14;

  renderer.render(scene, camera);
}
animate();
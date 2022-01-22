const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.5, 1000);
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color(0xDCCFEC);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Sets Camera Position
camera.position.z = 25;

//Initializes the lighting
//Hemisphere Light
const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x7366ff, 1);
scene.add(hemisphereLight);

//Initializes the textures to use for couch and table
const fabricTexture = new THREE.TextureLoader().load('assets/textures/couch_fabric.jpg');
const woodTexture = new THREE.TextureLoader().load('assets/textures/wood_texture.jpg');
const rugPattern = new THREE.TextureLoader().load('assets/textures/rug_pattern.jpg');

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


function animate() {
  requestAnimationFrame(animate);
  // insert code here

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

  //Rug
  rug.position.x = -11;
  rug.position.y = -11;
  rug.position.z = 3;

  rug.rotation.x = 14;
  //end
  renderer.render(scene, camera);
}
animate();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.5, 1000);
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color(0xDCCFEC);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Sets Camera Position
camera.position.z = 25;

function animate() {
  requestAnimationFrame(animate);
  // insert code here


  //end
  renderer.render(scene, camera);
}
animate();
// import { OBJLoader } from './lib/OBJLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
scene.background = new THREE.Color(0xefffff);

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const PointLight = new THREE.PointLight(0x00ffff);
PointLight.position.set(5, 5, 5);
scene.add(PointLight);

camera.position.z = 5;
var countX = 0.01;


let LOADING_MANAGER;
let object;

const loader = new OBJLoader();
loader.load(
    './models/Tree.obj',
    function ( object ) {
        scene.add( object );
    },
    function ( xhr ) {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },
    function ( error ) {
        console.log( 'An error happened' );
    }
);


function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // cube.position.x += countX;
    cube.rotation.y += 0.01;

    if (config.flagMoveLeft)   {camera.position.x -= 0.1}
    if (config.flagMoveForward){camera.position.z -= 0.1}
    if (config.flagMoveBack)   {camera.position.z += 0.1}
    if (config.flagMoveRight)  {camera.position.x += 0.1}

    if (config.flagMoveUp)     {camera.position.y += 0.1}
    if (config.flagMoveDown)   {camera.position.y -= 0.1}

    renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.render( scene, camera );
}
animate();

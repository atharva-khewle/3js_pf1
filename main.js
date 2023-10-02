import './style.css'
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Reflector } from 'three/examples/jsm/objects/Reflector.js'


let theme = 0;
let starrt= 0;
 
const scene = new THREE.Scene();


const white = new THREE.TextureLoader().load('./assets/images/white.png');
const black = new THREE.TextureLoader().load('./assets/images/black.jpg');
const yellow3 = new THREE.TextureLoader().load('./assets/images/yellow3.jpg');
scene.background = 0;


const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);


//rendering graphics in scene
const renderer = new THREE.WebGLRenderer(
  {
    //canvas is set to be an element with id as bg
    canvas : document.querySelector('#bg'),
  }
);

//ratio of renderer
renderer.setPixelRatio(window.devicePixelRatio);


var ratio= innerWidth/innerHeight;


renderer.setSize(window.innerWidth*0.8,0.8*window.innerHeight);

camera.position.set(0,0,30);
// camera.lookAt(0,0,5000000);



//renderers render method . when this function is called then only the scene is rendered
renderer.render(scene,camera);

//geometry made of shape
// const geo = new THREE.TorusGeometry(20,10,15,150);

// // material set for shape
// const mat = new THREE.MeshStandardMaterial({color: 0xFFFF00});

// //material and geomertry applied to 3d shape
// const toruss = new THREE.Mesh(geo,mat);

//3d shape added
// scene.add(toruss);
const bgtexture = new THREE.TextureLoader().load('./assets/images/github.png');

const g = new THREE.IcosahedronGeometry(2,1);
const gm = new THREE.MeshStandardMaterial({map:bgtexture});

const deca = new THREE.Mesh(g,gm);
// scene.add(deca);

// cube.addEventListener( 'click',function(){window.open("https://www.geeksforgeeks.org/how-to-open-url-in-new-tab-using-javascript/", "_blank");}  );


//controler through mouse
const xontrols = new OrbitControls(camera,renderer.domElement);



$(window).resize(function(){
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
  renderer.setSize(window.innerWidth*0.8,0.8*window.innerHeight);
})




//light source made, white light 


var ptlight1 = new THREE.PointLight(0xffffff,100000);
var ptlight2 = new THREE.PointLight(0xffffff,100000);
var ptlight3 = new THREE.PointLight(0xffffff,100000);

var ptlight4 = new THREE.PointLight(0x000000,100000);
var ptlight5 = new THREE.PointLight(0x000000,100000);
var ptlight6 = new THREE.PointLight(0x000000,100000);

ptlight1.position.set(0,0,100);
ptlight2.position.set(0,100,0);
ptlight3.position.set(100,0,0);

ptlight4.position.set(0,0,-100);
ptlight5.position.set(0,-100,0);
ptlight6.position.set(-100,0,0);
scene.add(ptlight1);
scene.add(ptlight2);
scene.add(ptlight3);

scene.add(ptlight4);
scene.add(ptlight5);
scene.add(ptlight6);
let a1=0;
let b1=0;


$('.theme').click(function(){
  if (theme==0){
    scene.background = white;
    $('body').css('background-color','white');

    a1=100;
    b1=10000000000;
    
    theme=1;
    // location.reload(true);
  }else{
    scene.background = 0;
    $('body').css('background-color','black');
   
    b1=100;
    a1=10000000000;

    


    theme =0;
    // location.reload(true);
  }



  ptlight4.position.set(0,0,a1);
  ptlight5.position.set(0,a1,0);
  ptlight6.position.set(a1,0,0);

  ptlight1.position.set(0,0,b1);
  ptlight2.position.set(0,b1,0);
  ptlight3.position.set(b1,0,0);

});












//-----------------------------test only keep one light on








const lighthelper2 = new THREE.PointLightHelper(ptlight2);
scene.add(lighthelper2);
const lighthelper3 = new THREE.PointLightHelper(ptlight3);
scene.add(lighthelper3);
const lighthelper1 = new THREE.PointLightHelper(ptlight1);
scene.add(lighthelper1);

const lighthelper4 = new THREE.PointLightHelper(ptlight4);
scene.add(lighthelper4);
const lighthelper5 = new THREE.PointLightHelper(ptlight5);
scene.add(lighthelper5);
const lighthelper6 = new THREE.PointLightHelper(ptlight6);
scene.add(lighthelper6);

const ambientlight1 = new THREE.AmbientLight(0xFFFFFF,100);
// scene.add(ambientlight1);

const gridhelper1 = new THREE.GridHelper(500,100);
// scene.add(gridhelper1);
const gridhelper2 = new THREE.GridHelper(500,100);
gridhelper2.rotation.x = 1.57;
// scene.add(gridhelper2);
















//---------------------------------------------gltf models-------------------------------------------------------------------------
//paper model 

// const gltfl = new GLTFLoader();
// gltfl.load('./assets/models/punpun/scene.gltf', (gltfScene)=>{

//   // so we can animate this
//   var lmodel = gltfScene;


//   gltfScene.scene.scale.set(1.5,1.5,1.5);


//   gltfScene.scene.rotation.y = 3.1;
//   gltfScene.scene.rotation.x = 0.22;

//   // gltfScene.scene.castShadow

//   gltfScene.scene.position.set(0,-12,0)
//   scene.add(gltfScene.scene);
// });









const gltfl2 = new GLTFLoader();
gltfl2.load('./assets/models/github/scene.gltf', (gltfScene)=>{

  // so we can animate this
  var lmodel2 = gltfScene;


  gltfScene.scene.scale.set(0.3,0.3,0.3);


  // gltfScene.scene.rotation.y = 3.1;
  // gltfScene.scene.rotation.x = 0.22;

  // gltfScene.scene.castShadow

  gltfScene.scene.position.set(10,3,10)
  // scene.add(gltfScene.scene);
});








const gltfl3 = new GLTFLoader();
gltfl3.load('./assets/models/linkedin/scene.gltf', (gltfScene)=>{

  // so we can animate this
  var lmodel3 = gltfScene;


  gltfScene.scene.scale.set(3,3,3);


  // gltfScene.scene.rotation.y = 3.1;
  // gltfScene.scene.rotation.x = 0.22;

  // gltfScene.scene.castShadow

  gltfScene.scene.position.set(11,-1,10)
  // scene.add(gltfScene.scene);
});



let lmodel4;
const gltfl4 = new GLTFLoader();
gltfl4.load('./assets/models/python2/scene.gltf', (gltfScene)=>{

  // so we can animate this
  lmodel4 = gltfScene;


  // gltfScene.scene.scale.set(50,50,50);


  gltfScene.scene.rotation.y = 3.1;
  
 
  // gltfScene.scene.rotation.x = 0.22;

  // gltfScene.scene.castShadow

  // gltfScene.scene.position.set(0,-12,0)
  // scene.add(gltfScene.scene);
});






const bgtexturee = new THREE.TextureLoader().load('./3Dmodels/images/v.jpg');


const bg = new THREE.Mesh(
  new THREE.SphereGeometry(1.5,50,50),
  new THREE.MeshPhongMaterial( { 
    color: 0xffffff,
    // envMap: envMap, // optional environment map
    specular: 0xffffff,
    // shininess: 50,
    reflectivity:10, 
} ) 

);



// scene.add(bg);



const mirrorOptions = {
  clipBias: 0.000,
  textureWidth: window.innerWidth*window.devicePixelRatio,
  textureHeight: window.innerHeight*window.devicePixelRatio,
  color: 0x0000ff,
  multisample: 5,
}

const mball = new Reflector(
  new THREE.SphereGeometry(2,50,50),mirrorOptions);

  // scene.add(mball);










let lmodel5;
const gltfl5 = new GLTFLoader();
gltfl5.load('./assets/models/python/scene.gltf', (gltfScene)=>{

  // so we can animate this
   lmodel5 = gltfScene;


   gltfScene.scene.scale.set(10,10,10);



  // gltfScene.scene.rotation.y = 3.1;
  // gltfScene.scene.rotation.x = 0.22;

  // gltfScene.scene.castShadow

  // gltfScene.scene.position.set(0,-12,0)
  scene.add(gltfScene.scene);
});





//------------------------------------------------------------------------------------------------------------------------------------





















function movecam(){
  //tells how far we are from top
  
const t = document.body.getBoundingClientRect().top;




camera.position.y = t*  0.1;
camera.position.x = t*  0.5;


}


//eventlistner set and it triggers movecam function
document.body.onscroll= movecam;




let rx=0;
let ry=0;
let rz=0;


function animate(){
  requestAnimationFrame(animate);
  

  xontrols.update();
if (rx<200){rx+=0.004;}
else{rx=0;}
  
  // ptlight1.position.set(100*Math.cos(rx),0,100*Math.sin(rx));
  // ptlight2.position.set(100*Math.cos(rx),100*Math.sin(rx),0);
  // ptlight3.position.set(100*Math.cos(rx),0,100*Math.sin(rx));
  

if (lmodel4){

  // lmodel4.scene.rotation.x -=0.002;
  lmodel4.scene.rotation.y -=0.002;
  // lmodel4.scene.rotation.z +=0.002;
}
if (lmodel5){

  // lmodel5.scene.rotation.x +=0.004;
  lmodel5.scene.rotation.y -=0.0014;
  // lmodel5.scene.rotation.z -=0.001;
}



  renderer.render(scene,camera);
}

animate();

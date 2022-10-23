import { OrbitControls} from 'three/addons/controls/OrbitControls';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { OBJLoader } from 'three/addons/loaders/OBJLoader';
import { MTLLoader } from 'three/addons/loaders/MTLLoader';
import * as THREE from 'three';

export default class ViewObject{
    constructor(canvasRef) {
        this.renderer = new THREE.WebGLRenderer({
            canvas: canvasRef,
            antialias: false,
            alpha: true,
        });
        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 100 );
        this.camera.position.set(1, 1, 1);
        this.scene.add(this.camera);

        const loader = new GLTFLoader();

        loader.load('\\Objects\\from_the_chubby_kitchen.glb', ( object ) => {
            
            this.scene.add(object.scene);

        }, undefined, function (error) {
            console.error(error);
        });

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        ambientLight.castShadow = true;
        this.scene.add(ambientLight);

        const spotLight = new THREE.SpotLight(0xffffff, 1);
        spotLight.castShadow = true;
        spotLight.position.set(32, 64, 32);
        this.scene.add(spotLight);
        
        const controls = new OrbitControls(this.camera,this.renderer.domElement);

        this.renderer.setSize(720, 720);

    

        this.update();
    }

    // ******************* PUBLIC EVENTS ******************* //
    updateValue(value) {
      // Whatever you need to do with React props
    }

    onMouseMove() {
      // Mouse moves
    }

    onWindowResize(vpW, vpH) {
        // this.renderer.setSize(vpW, vpH);
    }

    // ******************* RENDER LOOP ******************* //
    update(t) {
        this.renderer.render(this.scene, this.camera);

        requestAnimationFrame(this.update.bind(this));
    }
}
import React from 'react';
import * as THREE from 'three';
import MetallicBall from './../Components/3D/MetallicBall.three';

export default class MainScene extends React.Component {
    constructor() {
        super();

        //3D Scene components
        this.divRef = React.createRef();
        this.renderer = null;
        this.camera = null;
        this.scene = null;
    }

    componentDidMount() {
        this.initScene();
    }
    initScene = () => {

        //init Renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.autoClear = false;
        this.renderer.setClearColor(new THREE.Color(0xffffff));
        this.renderer.setSize(this.divRef.current.offsetWidth, this.divRef.current.offsetHeight);
        this.divRef.current.appendChild(this.renderer.domElement);

        //init Scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xffffff);
        
        //init Camera
        this.camera = new THREE.PerspectiveCamera(30, this.divRef.current.offsetWidth / this.divRef.current.offsetHeight, 0.1, 1000); 
        this.camera.position.z = 50;

        //Metallic Ball
        let metallicBall = new MetallicBall().create();
        this.scene.add(metallicBall);

        //Ambient Light
        let ambientLight = new THREE.AmbientLight(0x07215c);
        ambientLight.color.setRGB(0.02, 0.02, 0.07);
        ambientLight.intensity = 5;
        this.scene.add(ambientLight);

        //Directional Light
        let directionalLight = new THREE.DirectionalLight(0xe8f7ff,1);
        directionalLight.position.set(1,0,5);
        this.scene.add(directionalLight);

        //Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            this.renderer.render(this.scene, this.camera);
            if(metallicBall){
                let rotationRad = THREE.MathUtils.degToRad(.1);
                metallicBall.rotateY(rotationRad);
                metallicBall.rotateX(rotationRad);
                metallicBall.rotateZ(rotationRad);
            }
          
        }
        animate();
    }

    render() {
        return (<div className="three-container" ref={this.divRef}></div>)
    }
}
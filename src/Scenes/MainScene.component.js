import React from 'react';
import * as THREE from 'three';
import MetalSphere from '../Components/3D/MetalSphere.three';
import Loading from './../Components/Loading.component';
import { handleSceneResize, initEventListener } from './../Utils/sceneResize';

export default class MainScene extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: this.props.loading ? true : false,
        }
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
        //init Loading Manager
        const loadingManager = new THREE.LoadingManager();
        loadingManager.onLoad = () => {
            this.setState({ loading: false }, () => { })
        }

        //init Renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.autoClear = false;
        this.renderer.setClearColor(new THREE.Color(0x222222));
        this.renderer.setSize(this.divRef.current.offsetWidth, this.divRef.current.offsetHeight);
        this.divRef.current.appendChild(this.renderer.domElement);

        //init Scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x222222);

        //init Camera
        this.camera = new THREE.PerspectiveCamera(30, this.divRef.current.offsetWidth / this.divRef.current.offsetHeight, 0.1, 1000);
        this.camera.position.z = 50;

        //Metal Sphere
        let sphere = new MetalSphere().create(loadingManager);
        this.scene.add(sphere);

        //Ambient Light
        let ambientLight = new THREE.AmbientLight(0x07215c);
        ambientLight.color.setRGB(0.02, 0.02, 0.07);
        ambientLight.intensity = 5;
        this.scene.add(ambientLight);

        //Directional Light
        let directionalLight = new THREE.DirectionalLight(0xe8f7ff, 1);
        directionalLight.position.set(1, 0, 5);
        this.scene.add(directionalLight);

        //init Handle Resize
        handleSceneResize(window, this.camera, this.renderer)
        initEventListener(window);

        //Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            this.renderer.render(this.scene, this.camera);
            if (sphere) {
                let rotationRad = THREE.MathUtils.degToRad(.1);
                sphere.rotateY(rotationRad);
                sphere.rotateX(rotationRad);
                sphere.rotateZ(rotationRad);
            }

        }
        animate();
    }

    render() {
        return (<>
            <div className="three-container" ref={this.divRef}></div>
            {this.state.loading ? <Loading /> : ''}
        </>)

    }
}
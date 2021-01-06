import * as THREE from 'three';
import metalTexture from './../../Assets/Textures/metal_texture.jpg';

export default class MetallicBall {
    create = () => {
        let geometry = new THREE.SphereGeometry(5, 30, 30);
        let texture = new THREE.TextureLoader().load(metalTexture);
        let material = new THREE.MeshStandardMaterial({
            map: texture,
            metalness: .9,
            roughness: .65,
            emissive: 0x222529,
        });

        //Assign geometry and material to the mesh
        let mesh = new THREE.Mesh(geometry, material);

        //Return the mesh
        return mesh;
    }
}
export const handleSceneResize = (window, camera, renderer,composer) =>{
    //Resize renderer
    if (renderer && window && camera) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    if (composer && window && camera) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        composer.setSize(window.innerWidth, window.innerHeight);
    }


}

export const initEventListener = (window) =>{
        //Add event listener to window object
        if(window){
            window.addEventListener('resize', handleSceneResize);
        }
}
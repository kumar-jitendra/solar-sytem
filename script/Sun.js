
function createSun(scene) {
    
 // CENTRAL SUN OBJECT
 const loader = new THREE.TextureLoader();
 const sunTexture = loader.load('../public/sunmap.jpg');
 const sunMaterial = new THREE.MeshPhongMaterial({
     map: sunTexture,
     bumpMap: sunTexture,
     bumpScale: 0.04,
 });

 const sun = new THREE.Mesh(geometry, sunMaterial);
 sun.position.set(0, 0, 0);
 sun.scale.setScalar(3);
//  root.add(sun);
 scene.add(sun);
 this.objUpdate = function () {
     sun.rotation.y += 0.02;
 }

}
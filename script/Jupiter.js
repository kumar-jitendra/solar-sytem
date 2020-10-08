function createJupiter(root) {

    const texture = THREE.ImageUtils.loadTexture('../public/jupitermap.jpg');
    const jupiterMaterial = new THREE.MeshStandardMaterial(
        {
            map: texture,
            bumpMap: bumpurl == undefined ? texture : THREE.ImageUtils.loadTexture('../public/jupiterbump.jpg'),
            bumpScale: 0.005,
        });

    const jupiterMesh = new THREE.Mesh(geometry, jupiterMaterial);
    jupiterMesh.position.x = 44;
    jupiterMesh.scale.setScalar(1);
    const jupiterGroup = new THREE.Group();
    jupiterGroup.add(jupiterGroup);
    root.add(jupiterGroup);

    const sat1 = new createSatellite(jupiterGroup, 44, 3, 0.5, 'public/moonmap.jpg', 'public/moonbump.jpg', 0.002, 0.03);
    const sat2 = new createSatellite(jupiterGroup, 44, 5, 0.7, 'public/moonmap.jpg', 'public/moonbump.jpg', 0.003, 0.05);


    const jupiterOrbit = new createOrbit(root, 43.8, 44, 0, 0, true);
    const jupiterSatelliteOrbit1 = new createOrbit(root, 2.8, 3, 44, 0.003, false);
    const jupiterSatelliteOrbit2 = new createOrbit(root, 4.8, 5, 44, 0.003, false);

    this.objUpdate = function () {

        jupiterGroup.rotation.y += 0.002;
        jupiterMesh.rotation.y += 0.02;
        sat1.objUpdate();
        sat2.objUpdate();

        jupiterOrbit.rotation.objUpdate();
        jupiterSatelliteOrbit1.objUpdate();
        jupiterSatelliteOrbit2.objUpdate();
    }
}
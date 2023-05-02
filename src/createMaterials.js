import * as THREE from "three";

export default function createMaterials() {

  const fabricTexture = new THREE.TextureLoader().load('./assets/leather.jpeg');
  fabricTexture.wrapS = THREE.RepeatWrapping;
  fabricTexture.wrapT = THREE.RepeatWrapping;
  fabricTexture.magFilter = THREE.NearestFilter;
  fabricTexture.minFilter = THREE.NearestFilter;

  const tireTexture = new THREE.TextureLoader().load('./assets/sidewall.jpeg');
  fabricTexture.magFilter = THREE.NearestFilter;
  fabricTexture.minFilter = THREE.NearestFilter;


  return {
    paint: new THREE.MeshPhysicalMaterial({
      color: 0xff0000,
      metalness: 0.5,
      roughness: 0.4,
      clearcoat: 1.0,
      clearcoatRoughness: 0,
      side: THREE.DoubleSide,
    }),
    glass: new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0,
      transparent: true,
      transmission: 1,
      opacity: 0.6,
      side: THREE.DoubleSide,
    }),
    metal: new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 1,
      roughness: 0.2,
      clearcoat: 1,
      clearcoatRoughness: 0,
      side: THREE.DoubleSide,
    }),
    metalRough: new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 1,
      roughness: 0.5,
      clearcoat: 1,
      clearcoatRoughness: 0,
      side: THREE.DoubleSide,
    }),
    plastic: new THREE.MeshPhysicalMaterial({
      color: 0x000000,
      metalness: 0,
      roughness: 0.5,
      side: THREE.DoubleSide,
    }),
    fabric: new THREE.MeshPhysicalMaterial({
      color: 0xffdd99,
      metalness: 0,
      roughness: 0.9,
      bumpMap: fabricTexture,
      bumpScale: 0.002,

      side: THREE.DoubleSide,
    }),
    rubber: new THREE.MeshPhysicalMaterial({
      color: 0x444444,
      metalness: 0,
      roughness: 0.9,
      side: THREE.DoubleSide,
    }),
    rubberTire: new THREE.MeshPhysicalMaterial({
      color: 0x444444,
      metalness: 0,
      roughness: 0.9,
      bumpMap: tireTexture,
      bumpScale: 0.1,
      side: THREE.DoubleSide,
    }),
  };
}

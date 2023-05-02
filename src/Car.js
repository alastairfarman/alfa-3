import React, { useEffect, useState, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";
import getMaterialName from "./getMaterialName";
import createMaterials from "./createMaterials";

useGLTF.preload(".assets/alfav3.glb");

function Car(props) {
  const [carModel, setCarModel] = useState(null);
  const [doorR, setDoorR] = useState(null);
  const [doorL, setDoorL] = useState(null);
  const [wheelFL, setWheelFL] = useState(null);
  const [wheelFR, setWheelFR] = useState(null);
  const [wheelRR, setWheelRR] = useState(null);
  const [wheelRL, setWheelRL] = useState(null);
  const targetRotationR = useRef({ x: 0, z: 0 });
  const targetRotationL = useRef({ x: 0, z: 0 });

  //load car model
  useEffect(() => {
    const loadModel = async () => {
      const loader = new GLTFLoader();
      loader.load(
        "./assets/alfav3.glb",
        (gltf) => {
          const materials = createMaterials();
          setCarMaterials(gltf.scene, materials);
          setCarModel(gltf.scene);
        },
        undefined,
        (error) => {
          console.error(
            "An error occurred while loading the car model:",
            error
          );
        }
      );
    };
    loadModel();
  }, []);

  //door

  useEffect(() => {
    if (props.rotateDoorR) {
      targetRotationR.current = {
        x: THREE.MathUtils.degToRad(45),
        z: THREE.MathUtils.degToRad(-45),
      };
    } else {
      targetRotationR.current = {
        x: 0,
        z: 0,
      };
    }
  }, [props.rotateDoorR]);

  useEffect(() => {
    if (props.rotateDoorL) {
      targetRotationL.current = {
        x: THREE.MathUtils.degToRad(45),
        z: THREE.MathUtils.degToRad(45),
      };
    } else {
      targetRotationL.current = {
        x: 0,
        z: 0,
      };
    }
  }, [props.rotateDoorL]);

  useFrame(() => {
    if (doorR) {
      doorR.rotation.x += (targetRotationR.current.x - doorR.rotation.x) * 0.04;
      doorR.rotation.z += (targetRotationR.current.z - doorR.rotation.z) * 0.04;
    }
    if (doorL) {
      doorL.rotation.x += (targetRotationL.current.x - doorL.rotation.x) * 0.04;
      doorL.rotation.z += (targetRotationL.current.z - doorL.rotation.z) * 0.04;
    }
  });

  //materials

  function setCarMaterials(carModel, materials) {
    const meshList = [];

    carModel.traverse((child) => {
      if (child.isMesh) {
        const meshName = child.name;
        const materialName = getMaterialName(meshName);

        // Add the mesh and its material name to the meshList
        meshList.push({ meshName, materialName });

        // Check if the mesh name doesn't include "Logos" before assigning the material
        if (
          Object.prototype.hasOwnProperty.call(materials, materialName) &&
          !meshName.includes("Logos")
        ) {
          child.material = materials[materialName];
        }

        if (meshName.includes("Glass")) {
          child.castShadow = false;
        } else {
          child.castShadow = true;
        }

        child.receiveShadow = true;
        child.material.shadowSide = THREE.FrontSide;
      } else if (child.type === "Object3D") {
        const emptyName = child.name;
        switch (emptyName) {
          case "Door_R":
            setDoorR(child);
            break;
          case "Door_L":
            setDoorL(child);
            break;
          case "Wheel_FL":
            setWheelFL(child);
            break;
          case "Wheel_FR":
            setWheelFR(child);
            break;
          case "Wheel_RR":
            setWheelRR(child);
            break;
          case "Wheel_RL":
            setWheelRL(child);
            break;
          default:
            break;
        }
      }
    });
  }

  return carModel ? (
    <group>
      <primitive object={carModel} scale={[1, 1, 1]} castShadow receiveShadow />
    </group>
  ) : null;
}

export default Car;

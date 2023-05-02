import React, { useState, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import {
  ScrollControls,
  useScroll,
  Environment,
  ContactShadows,
  MeshReflectorMaterial,
  Billboard,
  Html,
  Text,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import * as THREE from "three";
import Car from "./Car";
import Loading from "./Loading";

const numberOfPages = 6;

const cameraPositions = [
  { x: -0.85, y: 0.66, z: 0 },
  { x: -3, y: 2, z: 1.5 },
  { x: 0, y: 0.6, z: 3 },
  { x: 3, y: 0.3, z: 0 },
  { x: 0.25, y: 0.78, z: -0.3 },
  { x: 0, y: 1.8, z: -3 },
];

const lookAtPositions = [
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(0, 1, 1),
  new THREE.Vector3(0, 0, 0),
];

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function TitleOverlay() {
  return (
    <group>
      <Billboard>
        <Html fullscreen>
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.2)",
              backdropFilter: "blur(40px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="./assets/ar.png" alt="logo" height={"30%"} />
          </div>
        </Html>
      </Billboard>
    </group>
  );
}

function TextOverlay({ showText, text, position, rotation, fontSize }) {
  return (
    <>
      {showText && (
        <Text
          position={position} // Adjust the position as needed
          rotation={rotation}
          fontSize={fontSize}
          color="white"
          font="./fonts/Kanit-ExtraLightItalic.ttf"
          maxWidth={8}
          textAlign="center"
        >
          <MeshTransmissionMaterial
            color={"white"}
            roughness={1}
            transmission={0.5}
          />

          {text}
        </Text>
      )}
    </>
  );
}

function ScrollingScene({ onCameraIndexChanged }) {
  const [rotateDoorL, setRotateDoorL] = useState(false);
  const [showShadows, setShowShadows] = useState(false);

  const scroll = useScroll();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowShadows(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  useFrame((state) => {
    const { offset } = scroll;
    const index = Math.min(
      Math.floor(offset * (numberOfPages - 1)),
      cameraPositions.length - 1
    );
    const progress = (offset * (numberOfPages - 1)) % 1;
    const easedProgress = easeInOutCubic(progress);

    const startPos = cameraPositions[index];
    const endPosIndex = (index + 1) % cameraPositions.length;
    const endPos =
      cameraPositions[
        endPosIndex === 0 ? cameraPositions.length - 1 : endPosIndex
      ];

    state.camera.position.lerpVectors(
      new THREE.Vector3(startPos.x, startPos.y, startPos.z),
      new THREE.Vector3(endPos.x, endPos.y, endPos.z),
      easedProgress
    );

    const lookAtStart =
      lookAtPositions[Math.min(index, lookAtPositions.length - 1)];
    const lookAtEnd = lookAtPositions[(index + 1) % lookAtPositions.length];

    state.camera.lookAt(
      new THREE.Vector3().lerpVectors(lookAtStart, lookAtEnd, easedProgress)
    );

    if (index === 3) {
      setRotateDoorL(true);
    } else {
      setRotateDoorL(false);
    }

    onCameraIndexChanged(index);
  });

  const textureLoader = new THREE.TextureLoader();
  const bumpMapTexture = textureLoader.load("./assets/ag.jpg");

  bumpMapTexture.wrapS = THREE.RepeatWrapping;
  bumpMapTexture.wrapT = THREE.RepeatWrapping;
  bumpMapTexture.repeat.set(50, 50);

  return (
    <>
      <Car rotateDoorL={rotateDoorL} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={8}
          mixStrength={5}
          roughness={1}
          roughnessMap={bumpMapTexture}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#333333"
          metalness={0}
          bumpMap={bumpMapTexture}
          bumpScale={0.01}
        />
      </mesh>
      {showShadows && (
        <ContactShadows
          frames={2}
          resolution={1024}
          scale={20}
          blur={0.7}
          opacity={1.5}
          far={100}
        />
      )}
    </>
  );
}

function App() {
  const [currentCameraIndex, setCurrentCameraIndex] = useState(0);

  const updateCameraIndex = (index) => {
    setCurrentCameraIndex(index);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          position: "absolute",
          height: "100dvh",
          width: "100dvw",
          color: "white",
          zIndex: "1",
          pointerEvents: "none",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          padding: "1rem",
          fontFamily: "Kanit",
          fontSize: "0.7rem",
        }}
      >
        Model created by Luis Lara, used and modified (textures, materials, rigging, extra geometry) under license. This is a
        personal portfolio project and is not affiliated with or endorsed by
        Alfa Romeo
      </div>
      <Suspense fallback={<Loading />}>
        <Canvas
          dpr={[1, 2]}
          shadows
          gl={{ toneMappingExposure: 0.2, antialias: true }}
        >
          <color attach="background" args={["#000000"]} />
          <fogExp2 attach="fog" args={["#000000", 0.1]} />
          <Environment
            files={
              "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/dark_autumn_forest_2k.hdr"
            }
            blur={0.4}
          />
          <spotLight
            castShadow
            position={[0, 15, 25]}
            color={"white"}
            intensity={1}
            rotation={[Math.PI / 1, 0, 0]}
            angle={Math.PI}
            distance={200}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-bias={-0.0001}
          />
          <ScrollControls pages={numberOfPages}>
            <ScrollingScene onCameraIndexChanged={updateCameraIndex} />
            <TitleOverlay />
          </ScrollControls>
          <EffectComposer>
            <Noise premultiply />
          </EffectComposer>
          <TextOverlay
            showText={currentCameraIndex === 0 || currentCameraIndex === 1}
            text={"Alfa Romeo 33 Stradale"}
            position={[-1, 0.01, 0]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            fontSize={0.15}
          />
          <TextOverlay
            showText={currentCameraIndex === 2}
            text={
              "The Alfa Romeo 33 Stradale, an iconic and rare Italian sports car, made its debut in 1967 as a street-legal version of the Tipo 33 racing car. Designed by Franco Scaglione, this mid-engined beauty is distinguished by its sleek, aerodynamic lines and butterfly doors. Powered by a 2.0-liter V8 engine producing 230 horsepower, the Stradale 33 was one of the fastest production cars of its time, with a top speed of 260 km/h (160 mph). With only 18 units ever produced, the Alfa Romeo 33 Stradale has etched its name in automotive history as a symbol of exclusivity, elegance, and performance."
            }
            position={[0, 2, -2]}
            rotation={[0, 0, 0]}
            fontSize={0.15}
          />
        </Canvas>
      </Suspense>
    </>
  );
}

export default App;

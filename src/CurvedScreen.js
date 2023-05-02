import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const CurvedScreen = ({position}) => {
  const ref = useRef();
  const { nodes } = useLoader(GLTFLoader, './assets/plane.glb');

  return <primitive ref={ref} object={nodes.Screen} position={position} rotation={[0,Math.PI/1,0]} scale={2} />;
};

export default CurvedScreen;

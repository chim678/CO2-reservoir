import * as THREE from "three";
import React, { useLayoutEffect, useRef, useMemo } from "react";
import { Text } from "@react-three/drei";
import useState from "./ReservoirModel"; 
import create from "zustand";



function Line({ start, end }) {
  const ref = useRef();
  useLayoutEffect(() => {
    ref.current.geometry.setFromPoints(
      [start, end].map((point) => new THREE.Vector3(...point))
    );
  }, [start, end]);
  return (
    <line ref={ref}>
      <bufferGeometry />
      <lineBasicMaterial color="red" linewidth={100} visible={true} />
    </line>
  );
}



const Label = ({text, position, fontSize}) => {
  return (
    <Text
      //scale={[1.5, 1.5, 1.5]}
      color="black"
      anchorX="right" 
      anchorY="left" 
      fontSize={fontSize}
      position={position}
      rotation={[0, Math.PI / 4, 0]}
    >
  {text}
    </Text>
  );
};
const Sphere = () => {
  const setWellhead_state = useState((state) => state.wellhead_state);

  return (
    <mesh position={[-20.45, 40.7, 22.9]}>
      <sphereBufferGeometry attach="geometry" args={[0.4]} />
      <meshBasicMaterial
        attach="material"
        color="#7B1818"
        opacity={1}
        transparent={true}
        visible={true}
      />
    </mesh>
  );
};

const Plane = ({ position, onClick, rotation }) => {
  return (
    <mesh
      onClick={onClick}
      position={[-23.23, 53, 17]}
      rotation={[0, Math.PI / 4, -Math.PI / 2]}
    >
      <boxBufferGeometry attach="geometry" args={[8, 16, 0.05]} />
      <meshBasicMaterial
        attach="material"
        color="#627685"
        opacity={0.7}
        transparent={true}
      />
    </mesh>
  );
};

const Displays = () => {
  return (
    <>
      <Line start={[-20.45, 40.7, 22.9]} end={[-23.23, 49, 17]} />
      <Plane />
      <Sphere />
      <Label text={'WELLHEAD 1.1'} position={[-23.23, 56, 17.2]} fontSize = {1}/>
      <Label text={'Temperature:'} position={[-23.23, 54.5, 17.2]} fontSize = {0.8}/>
      <Label text={'Pressure:'} position={[-23.23, 53.5, 17.2]} fontSize = {0.8}/>
      <Label text={'MassFlow:'} position={[-23.23, 52.5, 17.2]} fontSize = {0.8}/>
    </>
  );
};

export default Displays;

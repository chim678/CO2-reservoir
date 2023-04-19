import * as THREE from "three";
import React, { useLayoutEffect, useRef, useMemo } from "react";
import { BufferAttribute, PlaneGeometry } from "three";

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


const Sphere = () => {
  return (
    <mesh
      position={[-20.45, 40.7, 22.9]}
    >
      <sphereBufferGeometry attach="geometry" args={[0.4]}  />
      <meshBasicMaterial
        attach="material"
        color="red"
        opacity={1}
        transparent={true}
        visible = {true}
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
    </>
  );
};

export default Displays;

import * as THREE from 'three'
import React, { useLayoutEffect, useRef,  useMemo  } from 'react'
import { BufferAttribute, PlaneGeometry } from "three";

function Line({ start, end }) {
  const ref = useRef()
  useLayoutEffect(() => {
    ref.current.geometry.setFromPoints([start, end].map((point) => new THREE.Vector3(...point)))
  }, [start, end])
  return (
    <line ref={ref}>
      <bufferGeometry />
      <lineBasicMaterial color="red" linewidth = {100} visible = {true} />
    </line>

  )
}
function Points({ count = 1 }) {
  const points = useMemo(() => {
    const vertices = [];
    vertices.push( -19.2, 40.36, 16.9 );
    return new BufferAttribute(new Float32Array(vertices), 3);
  }, [count]);
  const sprite = new THREE.TextureLoader().load( '/Circle.svg' );
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach={"attributes-position"} {...points} />
      </bufferGeometry>
      <pointsMaterial
        size={0.4}
        map = {sprite}
        transparent = {true}
        alphaTest = {0.5}
      />
    </points>
  );
}

const Plane = ({ position, onClick, rotation }) => {
  return (
   <mesh onClick={onClick} position={[-23.23, 53, 11.23]} rotation={[0, Math.PI / 4, -Math.PI / 2]}>
    <boxBufferGeometry attach="geometry" args={[8, 16, 0.05]} />
    <meshBasicMaterial
     attach="material"
     color="#627685"
     opacity={0.7}
     transparent = {true}
    />
   </mesh>
  );
 }

const Displays = () => {
  return (
    <>
    <Line start={[-19, 40, 17]} end={[-23.23, 49, 11.23]} />
    <Plane />
    <Points />
    </>
  )
}

export default Displays
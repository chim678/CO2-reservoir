import * as THREE from "three";
import React, { useLayoutEffect, useRef, useMemo, useEffect } from "react";
import { Text, Text3D, Center } from "@react-three/drei";
import useState from "./ReservoirModel";
import create from "zustand";
import useStore from "../utils/stateStore";

const Label = ({ text, position, fontSize }) => {
  const [wellhead_state] = useStore((state) => [state.wellhead_state]);
  return (
    <>
      <Center left position={position} rotation={[0, Math.PI / 4, 0]}>
        <Text3D
          font={"https://drei.pmnd.rs/fonts/helvetiker_regular.typeface.json"}
          bevelEnabled={false}
          bevelSize={0.05}
          height={0.2}
          lineHeight={0.5}
          letterSpacing={0.06}
          size={fontSize}
          visible={wellhead_state}
        >
          {text}
          <meshStandardMaterial
            color="Black"
            opacity={0.9}
            transparent={true}
          />
        </Text3D>
      </Center>
    </>
  );
};

const Measurment = ({ text, position, fontSize, textPosition }) => {
  const [wellhead_state] = useStore((state) => [state.wellhead_state]);
  return (
    <>
      <mesh
        position={position}
        rotation={[0, Math.PI / 4, 0]}
        visible={wellhead_state}
      >
        <boxBufferGeometry attach="geometry" args={[3.2, 1, 0.2]} />
        <meshBasicMaterial
          attach="material"
          color="#0B6623"
          opacity={0.7}
          transparent={false}
        />
      </mesh>
      <Center left position={textPosition} rotation={[0, Math.PI / 4, 0]}>
        <Text3D
          font={"https://drei.pmnd.rs/fonts/helvetiker_regular.typeface.json"}
          bevelEnabled={false}
          bevelSize={0.05}
          height={0.2}
          lineHeight={0.5}
          letterSpacing={0.03}
          size={fontSize}
          visible={wellhead_state}
        >
          {text}
          <meshStandardMaterial
            color="Black"
            opacity={0.9}
            transparent={true}
          />
        </Text3D>
      </Center>
    </>
  );
};

function Line({ start, end }) {
  const [wellhead_state] = useStore((state) => [state.wellhead_state]);
  //console.log(wellhead_state)
  const ref = useRef();
  useLayoutEffect(() => {
    ref.current.geometry.setFromPoints(
      [start, end].map((point) => new THREE.Vector3(...point))
    );
  }, [start, end]);
  return (
    <line ref={ref}>
      <bufferGeometry />
      <lineBasicMaterial color="red" linewidth={100} visible={wellhead_state} />
    </line>
  );
}

const Sphere = ({ position }) => {
  const [wellhead_state] = useStore((state) => [state.wellhead_state]);
  return (
    <mesh position={position}>
      <sphereBufferGeometry attach="geometry" args={[0.4]} />
      <meshBasicMaterial
        attach="material"
        color="#7B1818"
        opacity={1}
        transparent={true}
        visible={wellhead_state}
      />
    </mesh>
  );
};

const Plane = ({ position }) => {
  const [wellhead_state] = useStore((state) => [state.wellhead_state]);
  //console.log(wellhead_state)
  return (
    <mesh
      position={position}
      rotation={[0, Math.PI / 4, 0]}
      visible={wellhead_state}
    >
      <boxBufferGeometry attach="geometry" args={[14, 7, 0.5]} />
      <meshBasicMaterial
        attach="material"
        color="#627685"
        opacity={0.7}
        transparent={true}
      />
    </mesh>
  );
};

const Displays = (props) => {
  let initPos1 = props.position1;
  return (
    <>
      <Line
        start={[initPos1.x, initPos1.y + 3.46, initPos1.z + 0.47]}
        end={[initPos1.x - 4, initPos1.y + 11.96, initPos1.z - 3.33]}
      />
      <Plane
        position={[initPos1.x - 3.55, initPos1.y + 15.36, initPos1.z - 3.43]}
      />
      <Sphere position={[initPos1.x, initPos1.y + 3.46, initPos1.z + 0.47]} />
      <Measurment
        position={[initPos1.x - 0.55, initPos1.y + 16, initPos1.z - 6.03]}
        text={"50 °C"}
        fontSize={0.6}
        textPosition={[initPos1.x, initPos1.y + 16, initPos1.z - 6.53]}
      />
      <Measurment
        position={[initPos1.x - 0.55, initPos1.y + 14.75, initPos1.z - 6.03]}
        text={"2 bar"}
        fontSize={0.6}
        textPosition={[initPos1.x - 0.1, initPos1.y + 14.75, initPos1.z - 6.43]}
      />
      <Measurment
        position={[initPos1.x - 0.55, initPos1.y + 13.51, initPos1.z - 6.03]}
        text={"5 kg/s"}
        fontSize={0.6}
        textPosition={[
          initPos1.x + 0.34,
          initPos1.y + 13.51,
          initPos1.z - 6.83,
        ]}
      />
      <Label
        text={"WELLHEAD 1.1"}
        position={[initPos1.x - 1.79, initPos1.y + 17.46, initPos1.z - 4.83]}
        fontSize={0.8}
      />
      <Label
        text={"Temperature:"}
        position={[initPos1.x - 2.76, initPos1.y + 15.96, initPos1.z - 3.83]}
        fontSize={0.6}
      />
      <Label
        text={"Pressure:"}
        position={[initPos1.x - 2.76, initPos1.y + 14.76, initPos1.z - 3.83]}
        fontSize={0.6}
      />
      <Label
        text={"MassFlow:"}
        position={[initPos1.x - 2.76, initPos1.y + 13.56, initPos1.z - 3.83]}
        fontSize={0.6}
      />
    </>
  );
};

export default Displays;

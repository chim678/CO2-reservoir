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

const Sphere = () => {
  const [wellhead_state] = useStore((state) => [state.wellhead_state]);
  return (
    <mesh position={[-20.45, 40.7, 22.9]}>
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

const Plane = ({ position, rotation }) => {
  const [wellhead_state] = useStore((state) => [state.wellhead_state]);
  //console.log(wellhead_state)
  return (
    <mesh
      position={[-24, 52.6, 19.0]}
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
  //console.log(props)
  return (
    <>
      <Line start={[-20.45, 40.7, 22.9]} end={[-24.4, 49.2, 19.1]} />
      <Plane />
      <Sphere />
      <Measurment
        position={[-21, 53.25, 16.4]}
        text={"50 °C"}
        fontSize={0.6}
        textPosition={[-20.4, 53.25, 15.9]}
      />
      <Measurment
        position={[-21, 52.0, 16.4]}
        text={"2 bar"}
        fontSize={0.6}
        textPosition={[-20.5, 52.0, 16.0]}
      />
      <Measurment
        position={[-21, 50.75, 16.4]}
        text={"5 kg/s"}
        fontSize={0.6}
        textPosition={[-20.1, 50.75, 15.6]}
      />
      <Label
        text={"WELLHEAD 1.1"}
        position={[-22.23, 54.7, 17.6]}
        fontSize={0.8}
      />
      <Label
        text={"Temperature:"}
        position={[-23.2, 53.2, 18.6]}
        fontSize={0.6}
      />
      <Label text={"Pressure:"} position={[-23.2, 52.0, 18.6]} fontSize={0.6} />
      <Label text={"MassFlow:"} position={[-23.2, 50.8, 18.6]} fontSize={0.6} />
    </>
  );
};

export default Displays;

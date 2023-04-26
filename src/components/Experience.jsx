import {
  OrbitControls,
  PerspectiveCamera,
  useProgress,
  Html,
} from "@react-three/drei";
import * as THREE from "three";
//import GltfModel from "../utils/glbModel"

/*
export function Loader() {
   const { progress } = useProgress();

  return (
    <Html center>
      <span style={{ color: "black", fontSize: 22 }}>{Math.round(progress)} % loaded</span>
    </Html>
    
  );
}*/


const Experience = () => {
  return (
    <>
      <OrbitControls />
      <PerspectiveCamera makeDefault position={[60, 50, 60]} zoom={0.7} />
      <axesHelper args={[70]} />
      <gridHelper args={[100, 10]} />
    </>
  );
};
export default Experience;

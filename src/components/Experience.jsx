import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
//import GltfModel from "../utils/glbModel"

const Experience = () => {
  return (
    <>
      <OrbitControls />
      <PerspectiveCamera makeDefault position={[60, 50, 60]} zoom={0.8} />
      <axesHelper args={[70]} />
      <gridHelper args={[100, 10]} />
    </>
  );
};
export default Experience;

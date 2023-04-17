import { useLoader} from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import glb from "/public/models/ReservoirModel.glb?url"


export default function GltfModel() {
    const gltf = useLoader(GLTFLoader, glb)
    return (
        <primitive  object={gltf.scene}/>
    )
  }
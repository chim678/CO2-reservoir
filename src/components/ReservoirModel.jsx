import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";

const ReservoirModel = (props) => {
  const { nodes, materials } = useGLTF("./models/ReservoirModel_3.glb");
  const [active, setActive] = useState(true);
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Water.geometry}
        material={materials.WaterHoloMat}
        scale={active ? 1.1 : 1}
        position={[-0.07, 44.52, 0.04]}
        //onClick={(e) => console.log('click')}
        onClick={() => setActive(!active)}
      />
      <group position={[-20.45, 37.25, 22.43]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Wellhead1_1.geometry}
          material={materials.Casing}
        />
        <mesh geometry={nodes.Wellhead1_2.geometry} material={materials.Nuts} />
      </group>
      <group position={[-6.79, 37.25, 22.43]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Wellhead2_1.geometry}
          material={materials.Casing}
        />
        <mesh geometry={nodes.Wellhead2_2.geometry} material={materials.Nuts} />
      </group>
      <group position={[6.53, 37.25, 22.43]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Wellhead3_1.geometry}
          material={materials.Casing}
        />
        <mesh geometry={nodes.Wellhead3_2.geometry} material={materials.Nuts} />
      </group>
      <group position={[20.85, 37.25, 22.43]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Wellhead4_1.geometry}
          material={materials.Casing}
        />
        <mesh geometry={nodes.Wellhead4_2.geometry} material={materials.Nuts} />
      </group>
      <mesh
        geometry={nodes.Pipe1.geometry}
        material={materials.Pipes}
        position={[-20.49, 36.64, 18.59]}
      />
      <mesh
        geometry={nodes.Pipe5.geometry}
        material={materials.Pipes}
        position={[-20.48, 31.73, 23.04]}
      />
      <mesh
        geometry={nodes.Pipe2.geometry}
        material={materials.Pipes}
        position={[-6.83, 36.64, 18.59]}
      />
      <mesh
        geometry={nodes.Pipe6.geometry}
        material={materials.Pipes}
        position={[-6.82, 31.73, 22.92]}
      />
      <mesh
        geometry={nodes.Pipe3.geometry}
        material={materials.Pipes}
        position={[6.49, 36.64, 18.59]}
      />
      <mesh
        geometry={nodes.Pipe7.geometry}
        material={materials.Pipes}
        position={[6.5, 31.73, 22.92]}
      />
      <mesh
        geometry={nodes.Pipe4.geometry}
        material={materials.Pipes}
        position={[20.8, 36.64, 18.59]}
      />
      <mesh
        geometry={nodes.Pipe8.geometry}
        material={materials.Pipes}
        position={[20.82, 31.73, 22.92]}
      />
      <mesh
        geometry={nodes.Reservoir_walls.geometry}
        material={materials.Rocks}
        position={[0, 0.23, 0]}
      />
      <mesh
        geometry={nodes.Sea_ground.geometry}
        material={materials["Sea ground"]}
        position={[0, 30.56, 0]}
        scale={34.19}
      />
      <mesh
        geometry={nodes.SubseaRealief.geometry}
        material={materials.SubseaGround}
      />
      <mesh
        geometry={nodes.SubseaRealief_1.geometry}
        material={materials.SubseaGround}
      />
    </group>
  );
}


export default ReservoirModel;
useGLTF.preload("./models/ReservoirModel_3.glb");

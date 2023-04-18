import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('./models/ReservoirModel_1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Water.geometry}
        material={materials["HoloMat.001"]}
        position={[-0.07, 44.52, 0.04]}
        scale={1.08}
      />
      <group
        position={[-20.48, 32.44, 16.99]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.44}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder094.geometry}
          material={materials["Case.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder094_1.geometry}
          material={materials["Nuts.008"]}
        />
      </group>
      <group
        position={[-6.82, 32.44, 16.99]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.44}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_1.geometry}
          material={materials["Case.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_2.geometry}
          material={materials["Nuts.008"]}
        />
      </group>
      <group
        position={[6.5, 32.44, 16.99]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.44}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_1.geometry}
          material={materials["Case.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_2.geometry}
          material={materials["Nuts.008"]}
        />
      </group>
      <group
        position={[20.81, 32.44, 16.99]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.44}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009.geometry}
          material={materials["Case.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009_1.geometry}
          material={materials["Nuts.008"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.Pipes}
        position={[-20.49, 36.64, 12.63]}
        scale={0.19}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder060.geometry}
        material={materials.Pipes}
        position={[-20.48, 31.73, 16.96]}
        scale={0.37}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials.Pipes}
        position={[-6.83, 36.64, 12.63]}
        scale={0.19}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials.Pipes}
        position={[-6.82, 31.73, 16.96]}
        scale={0.37}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials.Pipes}
        position={[6.49, 36.64, 12.63]}
        scale={0.19}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials.Pipes}
        position={[6.5, 31.73, 16.96]}
        scale={0.37}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials.Pipes}
        position={[20.8, 36.64, 12.63]}
        scale={0.19}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials.Pipes}
        position={[20.82, 31.73, 16.96]}
        scale={0.37}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Reservoir_walls.geometry}
        material={materials.Rocks}
        position={[0, 0.23, 0]}
        scale={[33.06, 32.06, 33.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sea_ground.geometry}
        material={materials["Sea ground_test"]}
        position={[0.01, 30.58, 0]}
        scale={34.16}
      />
      <group scale={[-35.8, -15.16, -35.85]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_1.geometry}
          material={materials.Material}
        />
      </group>
    </group>
  )
}

useGLTF.preload('./models/ReservoirModel.glb')

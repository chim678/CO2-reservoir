import React, { useState } from 'react'
import { useGLTF } from '@react-three/drei'


const ReservoirModel = (props) => {

  const { nodes, materials } = useGLTF('./models/ReservoirModel.glb')


  const [active, setActive] = useState(false);

  return (
    <group scale={1} {...props} dispose={null}>
      <mesh geometry={nodes.Water.geometry} material={materials['HoloMat.001']} position={[-0.07, 44.52, 0.04]} scale={1.08} />
      <mesh geometry={nodes.Sea_ground.geometry} material={materials['Sea ground_test']} position={[0.01, 30.58, 0]} scale={34.16} />
      <mesh geometry={nodes.Reservoir_walls.geometry} material={materials.Rocks} position={[0, 0.23, 0]} scale={[33.06, 32.06, 33.06]} />
      <group scale={[-35.8, -15.16, -35.85]}>
        <mesh geometry={nodes.Cube006.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cube006_1.geometry} material={materials.Material} />
      </group>
      <mesh geometry={nodes.Cylinder.geometry} material={materials.Pipes} position={[-18.9, 36.64, 12.63]} scale={0.19} />
      <mesh geometry={nodes.Cylinder060.geometry} material={materials.Pipes} position={[-18.89, 31.73, 16.96]} scale={0.37} />
      <mesh geometry={nodes.Wellhead001.geometry} material={materials['Case.005']} position={[-18.9, 32.44, 16.94]} rotation={[0, Math.PI / 2, 0]} scale={0.44}>
        <mesh geometry={nodes.Cube002_1.geometry} material={materials['Case.005']} position={[-0.1, 14.48, 0.14]} scale={[2.35, 1.3, 2.44]} />
        <mesh geometry={nodes.Cylinder092.geometry} material={materials['Case.005']} position={[4.52, 14.47, 0.1]} rotation={[Math.PI, 0, -1.57]} scale={[0.76, 0.1, 0.76]} />
        <mesh geometry={nodes.Cylinder093.geometry} material={materials['Case.005']} position={[4.27, 14.47, 0.1]} rotation={[0, 0, 1.57]} scale={[0.76, 0.1, 0.76]} />
        <mesh geometry={nodes.Cylinder094_1.geometry} material={materials['Case.005']} position={[-0.09, 10.28, 0.18]} scale={[2.21, 0.29, 2.21]} />
        <mesh geometry={nodes.Cylinder095.geometry} material={materials['Case.005']} position={[3.44, 14.49, 0.09]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[-0.41, -0.78, -0.41]} />
        <mesh geometry={nodes.Cylinder096.geometry} material={materials['Case.005']} position={[2.6, 14.49, 0.09]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.87, 0.43, 0.87]} />
        <mesh geometry={nodes.Cylinder097.geometry} material={materials['Case.005']} position={[-3.14, 14.43, -0.15]} rotation={[-1.57, 0, Math.PI / 2]} scale={[0.77, 1.1, 0.77]} />
        <mesh geometry={nodes.Cylinder098.geometry} material={materials['Case.005']} position={[4.04, 14.47, 0.09]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={1.16} />
        <mesh geometry={nodes.Cylinder099.geometry} material={materials['Case.005']} position={[4.52, 14.47, 0.09]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={1.16} />
        <mesh geometry={nodes.Cylinder100.geometry} material={materials['Case.005']} position={[-4.39, 14.44, -0.15]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={1.16} />
        <mesh geometry={nodes.Cylinder101.geometry} material={materials['Case.005']} position={[-0.1, 14.49, -4.42]} rotation={[Math.PI / 2, 0, 0]} scale={1.16} />
        <mesh geometry={nodes.Cylinder102.geometry} material={materials['Case.005']} position={[-0.1, 14.49, -3.17]} rotation={[-1.57, 0, 0]} scale={[0.77, 1.1, 0.77]} />
        <mesh geometry={nodes.Cylinder103.geometry} material={materials['Case.005']} position={[-0.1, 18.84, 0.14]} rotation={[-Math.PI, 0, 0]} scale={[0.15, 0.05, 0.15]} />
        <mesh geometry={nodes.Cylinder104.geometry} material={materials['Case.005']} position={[-0.1, 18.65, 0.15]} rotation={[-Math.PI / 2, 0, 0]} scale={[-0.04, -0.35, -0.04]} />
        <mesh geometry={nodes.Cylinder105.geometry} material={materials['Case.005']} position={[-0.1, 18.23, 0.14]} scale={[0.27, 0.58, 0.27]} />
        <mesh geometry={nodes.Cylinder106.geometry} material={materials['Case.005']} position={[-0.1, 16.86, 0.14]} scale={[1.17, 0.85, 1.17]} />
        <mesh geometry={nodes.Cylinder107.geometry} material={materials['Case.005']} position={[-0.09, 15.98, 0.12]} scale={3.38} />
        <mesh geometry={nodes.Cylinder108.geometry} material={materials['Case.005']} position={[-0.09, 15.99, 0.2]} scale={[2.21, 0.29, 2.21]} />
        <mesh geometry={nodes.Cylinder109.geometry} material={materials['Case.005']} position={[-0.1, 11.53, 0.14]} scale={1.17} />
        <mesh geometry={nodes.Cylinder110.geometry} material={materials['Case.005']} position={[-0.09, 8.83, 0.12]} scale={3.38} />
        <mesh geometry={nodes.Cylinder111.geometry} material={materials['Case.005']} position={[-0.09, 10.28, 0.18]} scale={[2.21, 0.29, 2.21]} />
        <mesh geometry={nodes.Cylinder112.geometry} material={materials['Case.005']} position={[-0.09, 10.25, 0.12]} scale={3.38} />
        <mesh geometry={nodes.Cylinder113.geometry} material={materials['Case.005']} position={[-0.09, 9.55, 0.17]} rotation={[-3.14, 0, 0]} scale={[2.21, 0.29, 2.21]} />
        <mesh geometry={nodes.Cylinder114.geometry} material={materials['Case.005']} position={[-0.1, 8.17, 0.14]} scale={1.23} />
        <mesh geometry={nodes.Cylinder115.geometry} material={materials['Case.005']} position={[-0.1, 6.7, 0.14]} rotation={[-Math.PI, 0, 0]} scale={[0.89, 0.32, 0.89]} />
        <mesh geometry={nodes.Cylinder116.geometry} material={materials['Case.005']} position={[-0.09, 4.49, 0.12]} scale={4.41} />
        <mesh geometry={nodes.Cylinder117.geometry} material={materials['Case.005']} position={[-0.09, 6.23, 0.12]} scale={4.41} />
        <mesh geometry={nodes.Cylinder118.geometry} material={materials['Case.005']} position={[-0.09, 12.61, 0.19]} rotation={[-3.14, 0, 0]} scale={[2.21, 0.29, 2.21]} />
        <mesh geometry={nodes.Cylinder119.geometry} material={materials['Case.005']} position={[-0.09, 5.33, 0.16]} rotation={[-3.14, 0, 0]} scale={[2.87, 0.37, 2.87]} />
        <mesh geometry={nodes.Cylinder120.geometry} material={materials['Case.005']} position={[-0.1, 6.28, 0.14]} scale={[2.87, 0.37, 2.87]} />
        <mesh geometry={nodes.Cylinder121.geometry} material={materials['Case.005']} position={[-0.1, 4.09, 0.14]} scale={[2.04, 0.96, 2.04]} />
        <mesh geometry={nodes.Cylinder122.geometry} material={materials['Case.005']} position={[-0.1, 2.58, 0.14]} scale={[0.84, 0.68, 0.84]} />
        <mesh geometry={nodes.Nut148.geometry} material={materials['Nuts.008']} position={[4.29, 14.48, 0.1]} rotation={[0.31, 0, -Math.PI / 2]} scale={-1.15} />
        <mesh geometry={nodes.Nut149.geometry} material={materials['Nuts.008']} position={[-0.09, 15.96, 0.12]} scale={3.34} />
        <mesh geometry={nodes.Nut150.geometry} material={materials['Nuts.008']} position={[4.74, 14.48, 0.1]} rotation={[0.31, 0, -Math.PI / 2]} scale={-1.15} />
        <mesh geometry={nodes.Nut151.geometry} material={materials['Nuts.008']} position={[-0.09, 8.88, 0.12]} scale={3.34} />
        <mesh geometry={nodes.Nut152.geometry} material={materials['Nuts.008']} position={[-0.09, 10.23, 0.12]} scale={3.34} />
        <mesh geometry={nodes.Nut153.geometry} material={materials['Nuts.008']} position={[-0.09, 4.49, 0.12]} scale={4.41} />
        <mesh geometry={nodes.Nut154.geometry} material={materials['Nuts.008']} position={[-0.09, 6.23, 0.12]} scale={4.41} />
      </mesh>

      <mesh geometry={nodes.Cylinder001.geometry} material={materials.Pipes} position={[-6.43, 36.64, 12.63]} scale={0.19} />
      <mesh geometry={nodes.Cylinder002.geometry} material={materials.Pipes} position={[-6.42, 31.73, 16.96]} scale={0.37} />
      <mesh geometry={nodes.Wellhead002.geometry} material={materials['Case.005']} position={[-6.42, 32.44, 16.94]} rotation={[0, Math.PI / 2, 0]} scale={0.44}>
        <mesh geometry={nodes.Cube001.geometry} material={materials['Case.005']} position={[-0.1, 14.48, 0.14]} scale={[2.35, 1.3, 2.44]} />
        <mesh geometry={nodes.Cylinder003.geometry} material={materials['Case.005']} position={[4.52, 14.47, 0.1]} rotation={[Math.PI, 0, -1.57]} scale={[0.76, 0.1, 0.76]} />
        <mesh geometry={nodes.Cylinder004.geometry} material={materials['Case.005']} position={[4.27, 14.47, 0.1]} rotation={[0, 0, 1.57]} scale={[0.76, 0.1, 0.76]} />
        <mesh geometry={nodes.Cylinder005.geometry} material={materials['Case.005']} position={[-0.09, 10.28, 0.18]} scale={[2.21, 0.29, 2.21]} />
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Case.005']} position={[3.44, 14.49, 0.09]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[-0.41, -0.78, -0.41]} />
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Case.005']} position={[2.6, 14.49, 0.09]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.87, 0.43, 0.87]} />
        <mesh geometry={nodes.Cylinder008.geometry} material={materials['Case.005']} position={[-3.14, 14.43, -0.15]} rotation={[-1.57, 0, Math.PI / 2]} scale={[0.77, 1.1, 0.77]} />
        <mesh geometry={nodes.Cylinder009.geometry} material={materials['Case.005']} position={[4.04, 14.47, 0.09]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={1.16} />
        <mesh geometry={nodes.Cylinder011.geometry} material={materials['Case.005']} position={[-4.39, 14.44, -0.15]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={1.16} />
        <mesh geometry={nodes.Cylinder012.geometry} material={materials['Case.005']} position={[-0.1, 14.49, -4.42]} rotation={[Math.PI / 2, 0, 0]} scale={1.16} />
        <mesh geometry={nodes.Cylinder013.geometry} material={materials['Case.005']} position={[-0.1, 14.49, -3.17]} rotation={[-1.57, 0, 0]} scale={[0.77, 1.1, 0.77]} />
        <mesh geometry={nodes.Cylinder014.geometry} material={materials['Case.005']} position={[-0.1, 18.84, 0.14]} rotation={[-Math.PI, 0, 0]} scale={[0.15, 0.05, 0.15]} />
        <mesh geometry={nodes.Cylinder015.geometry} material={materials['Case.005']} position={[-0.1, 18.65, 0.15]} rotation={[-Math.PI / 2, 0, 0]} scale={[-0.04, -0.35, -0.04]} />
        <mesh geometry={nodes.Cylinder016.geometry} material={materials['Case.005']} position={[-0.1, 18.23, 0.14]} scale={[0.27, 0.58, 0.27]} />
        <mesh geometry={nodes.Cylinder017.geometry} material={materials['Case.005']} position={[-0.1, 16.86, 0.14]} scale={[1.17, 0.85, 1.17]} />
        <mesh geometry={nodes.Cylinder018.geometry} material={materials['Case.005']} position={[-0.09, 15.98, 0.12]} scale={3.38} />
        <mesh geometry={nodes.Cylinder019.geometry} material={materials['Case.005']} position={[-0.09, 15.99, 0.2]} scale={[2.21, 0.29, 2.21]} />
        <mesh geometry={nodes.Cylinder020.geometry} material={materials['Case.005']} position={[-0.1, 11.53, 0.14]} scale={1.17} />
        <mesh geometry={nodes.Cylinder021.geometry} material={materials['Case.005']} position={[-0.09, 8.83, 0.12]} scale={3.38} />
        <mesh geometry={nodes.Cylinder022.geometry} material={materials['Case.005']} position={[-0.09, 10.28, 0.18]} scale={[2.21, 0.29, 2.21]} />
        <mesh geometry={nodes.Cylinder023.geometry} material={materials['Case.005']} position={[-0.09, 10.25, 0.12]} scale={3.38} />
        <mesh geometry={nodes.Cylinder024.geometry} material={materials['Case.005']} position={[-0.09, 9.55, 0.17]} rotation={[-3.14, 0, 0]} scale={[2.21, 0.29, 2.21]} />
        <mesh geometry={nodes.Cylinder025.geometry} material={materials['Case.005']} position={[-0.1, 8.17, 0.14]} scale={1.23} />
        <mesh geometry={nodes.Cylinder026.geometry} material={materials['Case.005']} position={[-0.1, 6.7, 0.14]} rotation={[-Math.PI, 0, 0]} scale={[0.89, 0.32, 0.89]} />
        <mesh geometry={nodes.Cylinder027.geometry} material={materials['Case.005']} position={[-0.09, 4.49, 0.12]} scale={4.41} />
        <mesh geometry={nodes.Cylinder028.geometry} material={materials['Case.005']} position={[-0.09, 6.23, 0.12]} scale={4.41} />
        <mesh geometry={nodes.Cylinder029.geometry} material={materials['Case.005']} position={[-0.09, 12.61, 0.19]} rotation={[-3.14, 0, 0]} scale={[2.21, 0.29, 2.21]} />
        <mesh geometry={nodes.Cylinder030.geometry} material={materials['Case.005']} position={[-0.09, 5.33, 0.16]} rotation={[-3.14, 0, 0]} scale={[2.87, 0.37, 2.87]} />
        <mesh geometry={nodes.Cylinder031.geometry} material={materials['Case.005']} position={[-0.1, 6.28, 0.14]} scale={[2.87, 0.37, 2.87]} />
        <mesh geometry={nodes.Cylinder032.geometry} material={materials['Case.005']} position={[-0.1, 4.09, 0.14]} scale={[2.04, 0.96, 2.04]} />
        <mesh geometry={nodes.Cylinder033.geometry} material={materials['Case.005']} position={[-0.1, 2.58, 0.14]} scale={[0.84, 0.68, 0.84]} />
        <mesh geometry={nodes.Nut001.geometry} material={materials['Nuts.008']} position={[4.29, 14.48, 0.1]} rotation={[0.31, 0, -Math.PI / 2]} scale={-1.15} />
        <mesh geometry={nodes.Nut002.geometry} material={materials['Nuts.008']} position={[-0.09, 15.96, 0.12]} scale={3.34} />
        <mesh geometry={nodes.Nut003.geometry} material={materials['Nuts.008']} position={[4.74, 14.48, 0.1]} rotation={[0.31, 0, -Math.PI / 2]} scale={-1.15} />
        <mesh geometry={nodes.Nut004.geometry} material={materials['Nuts.008']} position={[-0.09, 8.88, 0.12]} scale={3.34} />
        <mesh geometry={nodes.Nut005.geometry} material={materials['Nuts.008']} position={[-0.09, 10.23, 0.12]} scale={3.34} />
        <mesh geometry={nodes.Nut006.geometry} material={materials['Nuts.008']} position={[-0.09, 4.49, 0.12]} scale={4.41} />
        <mesh geometry={nodes.Nut007.geometry} material={materials['Nuts.008']} position={[-0.09, 6.23, 0.12]} scale={4.41} />
      </mesh>

      <mesh geometry={nodes.Cylinder034.geometry} material={materials.Pipes} position={[5.89, 36.64, 12.63]} scale={0.19} />
      <mesh geometry={nodes.Cylinder035.geometry} material={materials.Pipes} position={[5.9, 31.73, 16.96]} scale={0.37} />
      <mesh geometry={nodes.Wellhead003.geometry} material={materials['Case.005']} position={[5.9, 32.44, 16.94]} rotation={[0, Math.PI / 2, 0]} scale={0.44}>
        <mesh geometry={nodes.Cube003.geometry} material={materials['Case.005']} position={[-0.1, 14.48, 0.14]} scale={[2.35, 1.3, 2.44]} />
        <mesh geometry={nodes.Cylinder036.geometry} material={materials['Case.005']} position={[4.52, 14.47, 0.1]} rotation={[Math.PI, 0, -1.57]} scale={[0.76, 0.1, 0.76]} />
        <mesh geometry={nodes.Cylinder037.geometry} material={materials['Case.005']} position={[4.27, 14.47, 0.1]} rotation={[0, 0, 1.57]} scale={[0.76, 0.1, 0.76]} />
        <mesh geometry={nodes.Cylinder038.geometry} material={materials['Case.005']} position={[-0.09, 10.28, 0.18]} scale={[2.21, 0.29, 2.21]} />
        <mesh geometry={nodes.Cylinder039.geometry} material={materials['Case.005']} position={[3.44, 14.49, 0.09]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[-0.41, -0.78, -0.41]} />
        <mesh geometry={nodes.Cylinder040.geometry} material={materials['Case.005']} position={[2.6, 14.49, 0.09]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.87, 0.43, 0.87]} />
        <mesh geometry={nodes.Cylinder041.geometry} material={materials['Case.005']} position={[-3.14, 14.43, -0.15]} rotation={[-1.57, 0, Math.PI / 2]} scale={[0.77, 1.1, 0.77]} />
        <mesh geometry={nodes.Cylinder042.geometry} material={materials['Case.005']} position={[4.04, 14.47, 0.09]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={1.16} />
        <mesh geometry={nodes.Cylinder043.geometry} material={materials['Case.005']} position={[4.52, 14.47, 0.09]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={1.16} />
        <mesh geometry={nodes.Cylinder044.geometry} material={materials['Case.005']} position={[-4.39, 14.44, -0.15]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={1.16} />
        <mesh geometry={nodes.Cylinder045.geometry} material={materials['Case.005']} position={[-0.1, 14.49, -4.42]} rotation={[Math.PI / 2, 0, 0]} scale={1.16} />
        <mesh geometry={nodes.Cylinder046.geometry} material={materials['Case.005']} position={[-0.1, 14.49, -3.17]} rotation={[-1.57, 0, 0]} scale={[0.77, 1.1, 0.77]} />
        <mesh geometry={nodes.Cylinder047.geometry} material={materials['Case.005']} position={[-0.1, 18.84, 0.14]} rotation={[-Math.PI, 0, 0]} scale={[0.15, 0.05, 0.15]} />
        <mesh geometry={nodes.Cylinder048.geometry} material={materials['Case.005']} position={[-0.1, 18.65, 0.15]} rotation={[-Math.PI / 2, 0, 0]} scale={[-0.04, -0.35, -0.04]} />
        <mesh geometry={nodes.Cylinder049.geometry} material={materials['Case.005']} position={[-0.1, 18.23, 0.14]} scale={[0.27, 0.58, 0.27]} />
        <mesh geometry={nodes.Cylinder050.geometry} material={materials['Case.005']} position={[-0.1, 16.86, 0.14]} scale={[1.17, 0.85, 1.17]} />
        <mesh geometry={nodes.Cylinder051.geometry} material={materials['Case.005']} position={[-0.09, 15.98, 0.12]} scale={3.38} />
        <mesh geometry={nodes.Cylinder052.geometry} material={materials['Case.005']} position={[-0.09, 15.99, 0.2]} scale={[2.21, 0.29, 2.21]} />
        <mesh geometry={nodes.Cylinder053.geometry} material={materials['Case.005']} position={[-0.1, 11.53, 0.14]} scale={1.17} />
        <mesh geometry={nodes.Cylinder054.geometry} material={materials['Case.005']} position={[-0.09, 8.83, 0.12]} scale={3.38} />
        <mesh geometry={nodes.Cylinder055.geometry} material={materials['Case.005']} position={[-0.09, 10.28, 0.18]} scale={[2.21, 0.29, 2.21]} />
        <mesh geometry={nodes.Cylinder056.geometry} material={materials['Case.005']} position={[-0.09, 10.25, 0.12]} scale={3.38} />
        <mesh geometry={nodes.Cylinder057.geometry} material={materials['Case.005']} position={[-0.09, 9.55, 0.17]} rotation={[-3.14, 0, 0]} scale={[2.21, 0.29, 2.21]} />
        <mesh geometry={nodes.Cylinder058.geometry} material={materials['Case.005']} position={[-0.1, 8.17, 0.14]} scale={1.23} />
        <mesh geometry={nodes.Cylinder059.geometry} material={materials['Case.005']} position={[-0.1, 6.7, 0.14]} rotation={[-Math.PI, 0, 0]} scale={[0.89, 0.32, 0.89]} />
        <mesh geometry={nodes.Cylinder061.geometry} material={materials['Case.005']} position={[-0.09, 4.49, 0.12]} scale={4.41} />
        <mesh geometry={nodes.Cylinder062.geometry} material={materials['Case.005']} position={[-0.09, 6.23, 0.12]} scale={4.41} />
        <mesh geometry={nodes.Cylinder063.geometry} material={materials['Case.005']} position={[-0.09, 12.61, 0.19]} rotation={[-3.14, 0, 0]} scale={[2.21, 0.29, 2.21]} />
        <mesh geometry={nodes.Cylinder064.geometry} material={materials['Case.005']} position={[-0.09, 5.33, 0.16]} rotation={[-3.14, 0, 0]} scale={[2.87, 0.37, 2.87]} />
        <mesh geometry={nodes.Cylinder065.geometry} material={materials['Case.005']} position={[-0.1, 6.28, 0.14]} scale={[2.87, 0.37, 2.87]} />
        <mesh geometry={nodes.Cylinder066.geometry} material={materials['Case.005']} position={[-0.1, 4.09, 0.14]} scale={[2.04, 0.96, 2.04]} />
        <mesh geometry={nodes.Cylinder067.geometry} material={materials['Case.005']} position={[-0.1, 2.58, 0.14]} scale={[0.84, 0.68, 0.84]} />
        <mesh geometry={nodes.Nut008.geometry} material={materials['Nuts.008']} position={[4.29, 14.48, 0.1]} rotation={[0.31, 0, -Math.PI / 2]} scale={-1.15} />
        <mesh geometry={nodes.Nut009.geometry} material={materials['Nuts.008']} position={[-0.09, 15.96, 0.12]} scale={3.34} />
        <mesh geometry={nodes.Nut010.geometry} material={materials['Nuts.008']} position={[4.74, 14.48, 0.1]} rotation={[0.31, 0, -Math.PI / 2]} scale={-1.15} />
        <mesh geometry={nodes.Nut011.geometry} material={materials['Nuts.008']} position={[-0.09, 8.88, 0.12]} scale={3.34} />
        <mesh geometry={nodes.Nut012.geometry} material={materials['Nuts.008']} position={[-0.09, 10.23, 0.12]} scale={3.34} />
        <mesh geometry={nodes.Nut013.geometry} material={materials['Nuts.008']} position={[-0.09, 4.49, 0.12]} scale={4.41} />
        <mesh geometry={nodes.Nut014.geometry} material={materials['Nuts.008']} position={[-0.09, 6.23, 0.12]} scale={4.41} />
      </mesh>

      <mesh geometry={nodes.Cylinder068.geometry} material={materials.Pipes} position={[19.2, 36.64, 12.63]} scale={0.19} />
      <mesh geometry={nodes.Cylinder069.geometry} material={materials.Pipes} position={[19.21, 31.73, 16.96]} scale={0.37} />
      <mesh geometry={nodes.Wellhead004.geometry} material={materials['Case.005']} position={[19.21, 32.44, 16.94]} rotation={[0, Math.PI / 2, 0]} scale={0.44}>
        <mesh geometry={nodes.Cube004.geometry} material={materials['Case.005']} position={[-0.1, 14.48, 0.14]} scale={[2.35, 1.3, 2.44]} />
        <mesh geometry={nodes.Cylinder070.geometry} material={materials['Case.005']} position={[4.52, 14.47, 0.1]} rotation={[Math.PI, 0, -1.57]} scale={[0.76, 0.1, 0.76]} />
        <mesh geometry={nodes.Cylinder071.geometry} material={materials['Case.005']} position={[4.27, 14.47, 0.1]} rotation={[0, 0, 1.57]} scale={[0.76, 0.1, 0.76]} />
        <mesh geometry={nodes.Cylinder072.geometry} material={materials['Case.005']} position={[-0.09, 10.28, 0.18]} scale={[2.21, 0.29, 2.21]} />
        <mesh geometry={nodes.Cylinder073.geometry} material={materials['Case.005']} position={[3.44, 14.49, 0.09]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[-0.41, -0.78, -0.41]} />
        <mesh geometry={nodes.Cylinder074.geometry} material={materials['Case.005']} position={[2.6, 14.49, 0.09]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.87, 0.43, 0.87]} />
        <mesh geometry={nodes.Cylinder075.geometry} material={materials['Case.005']} position={[-3.14, 14.43, -0.15]} rotation={[-1.57, 0, Math.PI / 2]} scale={[0.77, 1.1, 0.77]} />
        <mesh geometry={nodes.Cylinder076.geometry} material={materials['Case.005']} position={[4.04, 14.47, 0.09]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={1.16} />
        <mesh geometry={nodes.Cylinder077.geometry} material={materials['Case.005']} position={[4.52, 14.47, 0.09]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={1.16} />
        <mesh geometry={nodes.Cylinder078.geometry} material={materials['Case.005']} position={[-4.39, 14.44, -0.15]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={1.16} />
        <mesh geometry={nodes.Cylinder079.geometry} material={materials['Case.005']} position={[-0.1, 14.49, -4.42]} rotation={[Math.PI / 2, 0, 0]} scale={1.16} />
        <mesh geometry={nodes.Cylinder080.geometry} material={materials['Case.005']} position={[-0.1, 14.49, -3.17]} rotation={[-1.57, 0, 0]} scale={[0.77, 1.1, 0.77]} />
        <mesh geometry={nodes.Cylinder081.geometry} material={materials['Case.005']} position={[-0.1, 18.84, 0.14]} rotation={[-Math.PI, 0, 0]} scale={[0.15, 0.05, 0.15]} />
        <mesh geometry={nodes.Cylinder082.geometry} material={materials['Case.005']} position={[-0.1, 18.65, 0.15]} rotation={[-Math.PI / 2, 0, 0]} scale={[-0.04, -0.35, -0.04]} />
        <mesh geometry={nodes.Cylinder083.geometry} material={materials['Case.005']} position={[-0.1, 18.23, 0.14]} scale={[0.27, 0.58, 0.27]} />
        <mesh geometry={nodes.Cylinder084.geometry} material={materials['Case.005']} position={[-0.1, 16.86, 0.14]} scale={[1.17, 0.85, 1.17]} />
        <mesh geometry={nodes.Cylinder085.geometry} material={materials['Case.005']} position={[-0.09, 15.98, 0.12]} scale={3.38} />
        <mesh geometry={nodes.Cylinder086.geometry} material={materials['Case.005']} position={[-0.09, 15.99, 0.2]} scale={[2.21, 0.29, 2.21]} />
        <mesh geometry={nodes.Cylinder087.geometry} material={materials['Case.005']} position={[-0.1, 11.53, 0.14]} scale={1.17} />
        <mesh geometry={nodes.Cylinder088.geometry} material={materials['Case.005']} position={[-0.09, 8.83, 0.12]} scale={3.38} />
        <mesh geometry={nodes.Cylinder089.geometry} material={materials['Case.005']} position={[-0.09, 10.28, 0.18]} scale={[2.21, 0.29, 2.21]} />
        <mesh geometry={nodes.Cylinder090.geometry} material={materials['Case.005']} position={[-0.09, 10.25, 0.12]} scale={3.38} />
        <mesh geometry={nodes.Cylinder091.geometry} material={materials['Case.005']} position={[-0.09, 9.55, 0.17]} rotation={[-3.14, 0, 0]} scale={[2.21, 0.29, 2.21]} />
        <mesh geometry={nodes.Cylinder123.geometry} material={materials['Case.005']} position={[-0.1, 8.17, 0.14]} scale={1.23} />
        <mesh geometry={nodes.Cylinder124.geometry} material={materials['Case.005']} position={[-0.1, 6.7, 0.14]} rotation={[-Math.PI, 0, 0]} scale={[0.89, 0.32, 0.89]} />
        <mesh geometry={nodes.Cylinder125.geometry} material={materials['Case.005']} position={[-0.09, 4.49, 0.12]} scale={4.41} />
        <mesh geometry={nodes.Cylinder125.geometry} material={materials['Case.005']} position={[-0.09, 6.23, 0.12]} scale={4.41} />
        <mesh geometry={nodes.Cylinder063.geometry} material={materials['Case.005']} position={[-0.09, 12.61, 0.19]} rotation={[-3.14, 0, 0]} scale={[2.21, 0.29, 2.21]} />
        <mesh geometry={nodes.Cylinder128_1.geometry} material={materials['Case.005']} position={[-0.09, 5.33, 0.16]} rotation={[-3.14, 0, 0]} scale={[2.87, 0.37, 2.87]} />
        <mesh geometry={nodes.Cylinder129.geometry} material={materials['Case.005']} position={[-0.1, 6.28, 0.14]} scale={[2.87, 0.37, 2.87]} />
        <mesh geometry={nodes.Cylinder130.geometry} material={materials['Case.005']} position={[-0.1, 4.09, 0.14]} scale={[2.04, 0.96, 2.04]} />
        <mesh geometry={nodes.Cylinder131.geometry} material={materials['Case.005']} position={[-0.1, 2.58, 0.14]} scale={[0.84, 0.68, 0.84]} />
        <mesh geometry={nodes.Nut015.geometry} material={materials['Nuts.008']} position={[4.29, 14.48, 0.1]} rotation={[0.31, 0, -Math.PI / 2]} scale={-1.15} />
        <mesh geometry={nodes.Nut016.geometry} material={materials['Nuts.008']} position={[-0.09, 15.96, 0.12]} scale={3.34} />
        <mesh geometry={nodes.Nut017.geometry} material={materials['Nuts.008']} position={[4.74, 14.48, 0.1]} rotation={[0.31, 0, -Math.PI / 2]} scale={-1.15} />
        <mesh geometry={nodes.Nut018.geometry} material={materials['Nuts.008']} position={[-0.09, 8.88, 0.12]} scale={3.34} />
        <mesh geometry={nodes.Nut019.geometry} material={materials['Nuts.008']} position={[-0.09, 10.23, 0.12]} scale={3.34} />
        <mesh geometry={nodes.Nut020.geometry} material={materials['Nuts.008']} position={[-0.09, 4.49, 0.12]} scale={4.41} />
        <mesh geometry={nodes.Nut021.geometry} material={materials['Nuts.008']} position={[-0.09, 6.23, 0.12]} scale={4.41} />
      </mesh>

    </group>
  )
}

export default ReservoirModel;
useGLTF.preload('./models/ReservoirModel.glb')

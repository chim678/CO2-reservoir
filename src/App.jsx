import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Light from "./components/Light";
import Displays from "./components/Displays";
import React, { Suspense,useEffect, useState  } from "react";
import ReservoirModel from "./components/ReservoirModel";
//import { Loader } from "./components/Experience";
import { LoadingScreen } from "./components/LoadingScreen";
import { Spin } from 'antd';
import useStore from "./utils/stateStore";
import {
  LoadingOutlined
  } from '@ant-design/icons';

import "./App.css";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function App() {

  const [reservoirSpin, setReservoirSpin] = useStore((state) => [state.reservoirSpin, state.setReservoirSpin])
  return (
<> <Spin 
      indicator={antIcon}
      spinning={reservoirSpin}
      tip={'Loading Model...'}
      size="large">
     <Canvas style={{height: "100vh", marginTop: "150px"}}>
    <Suspense >
      <ReservoirModel />
      <Light
        intensity={0.3}
        brightness1={25}
        color1={"#707682"}
        brightness2={60}
        color2={"#6086b5"}
      />
      < Displays />
      <Experience />
      </Suspense>
    </Canvas>
    </Spin>
    
     </>
  );
}

export default App;

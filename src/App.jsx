import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Light from "./components/Light";
import Displays from "./components/Displays";
import React from "react";
import ReservoirModel from "./components/ReservoirModel";

import "./App.css";

function App() {
  return (
    <Canvas>
      <ReservoirModel />
      <Light
        intensity={0.3}
        brightness1={25}
        color1={"#707682"}
        brightness2={60}
        color2={"#6086b5"}
      />
      
      <Experience />
    </Canvas>
  );
}

export default App;

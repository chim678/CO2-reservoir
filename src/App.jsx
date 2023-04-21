import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Light from "./components/Light";
import Displays from "./components/Displays";
import React, { Suspense,useEffect, useState  } from "react";
import ReservoirModel from "./components/ReservoirModel";
import { Loader } from "./components/Experience";
import { LoadingScreen } from "./components/LoadingScreen";



import "./App.css";


function App() {


  return (
<>
    <Canvas> 
    <Suspense fallback={< Loader/>}>
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
     <LoadingScreen />
     </>
  );
}

export default App;

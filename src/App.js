import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import Forum from "./pages/Forum";
import Map from "./pages/Map";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {Model} from './Scene'

import "./styles/common/App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/map" element={<Map />} />
      </Routes>
      <Canvas>
      <OrbitControls/>
        <mesh>
          <ambientLight intensity={1}/>
          <directionalLight intensity={1}/>
          <Model/>
          <meshStandardMaterial attach="material" color= {0xa3b18a}/>
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;

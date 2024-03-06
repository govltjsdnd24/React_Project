import React, {useState, useRef} from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import Forum from "./pages/Forum";
import Map from "./pages/Map";
import { Canvas,useFrame } from '@react-three/fiber';
import { OrbitControls, KeyboardControls,Gltf,Environment} from '@react-three/drei';
import { useSpring, animated, config } from "@react-spring/three";
import { Physics, RigidBody, MeshCollider } from '@react-three/rapier'
import Model from './Hiphop'
import "./styles/common/App.css";
import Controller from 'ecctrl'

function OscillatingMan() {
  const myMesh = useRef();
  const { scale } = useSpring({
    scale: [1, 1, 1], 
    config: config.default
  });

  useFrame(({ clock }) => {
    const time_position = 5 * clock.getElapsedTime();
    const oscillation_position = Math.sin(time_position);

    // if (myMesh.current) {
    //   myMesh.current.position.y =  oscillation_position;
    // }
  });

  return (
    <animated.mesh
      scale={scale}
      ref={myMesh}
      position={[0, -1, 0]}
    >
      <Model />
    </animated.mesh>
  );
}

function App() {
  const keyboardMap = [
    { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
    { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
    { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
    { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
    { name: 'jump', keys: ['Space'] },
    { name: 'run', keys: ['Shift'] },
  ]
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
        <OrbitControls />
        
        <ambientLight intensity={1} />
        <directionalLight intensity={1} />
        <Physics timeStep="vary">
          <KeyboardControls map={keyboardMap}>
            <Controller maxVelLimit={5}>
              <RigidBody colliders={false} gravityScale={4}>
                <OscillatingMan /> 
              </RigidBody>
            </Controller>
          </KeyboardControls>

          <RigidBody type="fixed">
            <mesh>
              <boxGeometry attach="geometry" args={[10, 1, 10]} />
              <meshBasicMaterial attach="material" color="gray" />
            </mesh>
          </RigidBody>
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;

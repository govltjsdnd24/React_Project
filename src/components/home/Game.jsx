
import React, { useRef, useState,useEffect} from "react";
import { Canvas,useFrame } from '@react-three/fiber';
import { OrbitControls, KeyboardControls} from '@react-three/drei';
import { useSpring, animated, config } from "@react-spring/three";
import { Physics, RigidBody } from '@react-three/rapier'
import Controller from 'ecctrl'

import Model from '../../models/Model'
import Room from '../../models/Room'

function OscillatingMan(currentAction) {
    const myMesh = useRef();
    const { scale } = useSpring({
      scale: [0.5, 0.5, 0.5], 
      config: config.default
    });
  
    useFrame(({ clock }) => {
      const time_position = 5 * clock.getElapsedTime();
      const oscillation_position = Math.sin(time_position);
    });
  
    return (
      <animated.mesh
        scale={scale}
        ref={myMesh}
        position={[0, -1, 0]}
      >
        <Model action={currentAction}/>
      </animated.mesh>
    );
}
function Game() {

    const [currentAction, setCurrentAction] = useState("idle");
    const [pressedKeys, setPressedKeys] = useState(new Set());

    const keyboardMap = [
        { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
        { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
        { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
        { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
        { name: 'run', keys: ['Space'] },
      ];
      
      const handleKeyDown = (event) => {
        const key = event.code;
        const find=keyboardMap.find((entry) => entry.keys.includes(key))
        if(find!=null){
          const keyMapping = find.name;
          setPressedKeys((prevKeys) => new Set([...prevKeys, keyMapping]));
          setCurrentAction(keyMapping);
        }
      };
      
      const handleKeyUp = (event) => {
        const key= event.code;
        const find=keyboardMap.find((entry) => entry.keys.includes(key))
        if(find!=null){
          const keyMapping = find.name;
          setPressedKeys((prevKeys) => new Set([...prevKeys].filter((k) => k !== keyMapping)));
          if(pressedKeys.size<2)
            setCurrentAction("idle");
        }
      };
    
      useEffect(()=>{
        
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup',handleKeyUp)
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
          document.removeEventListener('keyup', handleKeyUp);
        };
      });


    return (
        <Canvas>
            <OrbitControls />
            <ambientLight intensity={1} />
            <directionalLight intensity={1} />
            <Physics timeStep="vary">
                <KeyboardControls map={keyboardMap} >
                    <Controller maxVelLimit={5}>
                    <RigidBody colliders={false} gravityScale={4}>
                        <OscillatingMan currentAction={currentAction} /> 
                    </RigidBody>
                    </Controller>
                </KeyboardControls>
                <Room position={[0,3.8,0]}/>
                <RigidBody type="fixed">
                    <mesh>
                    <boxGeometry attach="geometry" position= {[0,-10,0]} args={[100, 1, 100]} />
                    <meshPhongMaterial color="#ff0000" opacity={0.1} transparent />
                    </mesh>
                </RigidBody>
            </Physics>
        </Canvas>
    );
}

export default Game;
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 room.glb 
Author: dylanheyes (https://sketchfab.com/dylanheyes)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/vr-gallery-14ff70243a9c4c9c86af455335f2bed9
Title: VR Gallery
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Room(props) {
  const { nodes, materials } = useGLTF('/models/room.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.382}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[430, 430, 1290]}>
            <group position={[-1.73, 0, 0]} rotation={[0, Math.PI / 2, 0]} scale={[0.062, 0.186, 0.186]}>
              <mesh geometry={nodes.Benches_Benches_0.geometry} material={materials.Benches} />
              <mesh geometry={nodes.Benches_Chrome_0.geometry} material={materials.Chrome} />
            </group>
            <group position={[-0.978, 0, 0]} rotation={[0, Math.PI / 2, 0]} scale={[0.233, 0.233, 0.419]}>
              <mesh geometry={nodes.Portraits_PaintingFrame_0.geometry} material={materials.PaintingFrame} />
              <mesh geometry={nodes.Portraits_Portraits_0.geometry} material={materials.Portraits} />
            </group>
            <mesh geometry={nodes.Gallery_Structure_0.geometry} material={materials.Structure} />
            <mesh geometry={nodes.Gallery_Backwall_0.geometry} material={materials.Backwall} />
            <mesh geometry={nodes.Podiums_Podiums_0.geometry} material={materials.Podiums} position={[-1.803, 0, 0]} rotation={[0, Math.PI / 2, 0]} scale={[0.078, 0.233, 0.233]} />
          </group>
        </group>
      </group>
    </group>
  )
}

export default Room;

useGLTF.preload('/models/room.glb')

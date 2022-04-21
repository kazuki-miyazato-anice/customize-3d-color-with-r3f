/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/OldSportcar.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0.89, 0]} scale={[0.98, 1, 1]}>
        <mesh geometry={nodes.Cube.geometry} material={materials.body} />
        <mesh geometry={nodes.Cube_1.geometry} material={materials.tire} />
        <mesh geometry={nodes.Cube_2.geometry} material={materials.frame} />
        <mesh geometry={nodes.Cube_3.geometry} material={materials.glass} />
        <mesh geometry={nodes.Cube_4.geometry} material={materials.interior} />
        <mesh geometry={nodes.Cube_5.geometry} material={materials.light} />
        <mesh geometry={nodes.Cube_6.geometry} material={materials.border} />
      </group>
    </group>
  )
}

useGLTF.preload('/OldSportcar.gltf')

import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useGLTF } from '@react-three/drei'
import Header from '../Components/Header/header'

export function Model(props) {
    const { nodes, materials } = useGLTF('/scene.gltf')
    return (
      <group {...props} dispose={null}>
        <group scale={0.01}>
          <group position={[50, 0.035, 2.353]} rotation={[-Math.PI / 2, 0, 0]} scale={5500}>
            <mesh geometry={nodes.Case_Face_0.geometry} material={materials.Face} />
            <mesh geometry={nodes.Case_Case_0.geometry} material={materials.Case} />
            <mesh geometry={nodes.Glass_Glass_0.geometry} material={materials.Glass} position={[-0.002, -0.006, 0]} />
            <mesh geometry={nodes.Band_Band_0.geometry} material={materials.Band} position={[-0.002, 0.029, 0]} />
          </group>
        </group>
      </group>
    )
  }

const Cube = ({position, size, color}) => {
    const ref = useRef()

    useFrame((state, delta) => {
        ref.current.rotation.x += delta
        console.log(delta)
    })

    return (
        <mesh position={position} ref={ref}>
        <boxGeometry args={size}/>
        <meshStandardMaterial color={color}/>
        </mesh>
    )
}

export const Add_cloth = () => {
  return (
    <>
    <Header/>
    <div className='h-[35rem] flex flex-row mt-28 absolute ml-36 rounded-xl w-[80rem] bg-white shadow-2xl shadow-black'>
        <div className='absolute px-28 h-[35rem] py-20 w-[40rem] bg-white ml-[40rem] rounded-r-xl'>
            <h1 className='font-great-vibes mb-2 text-7xl'>Red T-Shirt By React</h1>
            <h1 className='font-quicksand mb-5 text-xl'>"Discover our sophisticated smartwatch with a sleek metallic body, polished finish, and premium strap for unmatched comfort and cutting-edge technology."</h1>
            <h1 className='font-quicksand text-xl'>₹6,999</h1>
            <h1 className='font-quicksand mb-10 text-sm'>(M.R.P. incl. of all taxes)</h1>
            <button className='w-full h-12 rounded-lg font-work-sans bg-black text-white transition-all duration-300 ease-in-out hover:bg-white'>BUY NOW</button>
            <button className='w-40 mt-2 h-12 rounded-lg font-work-sans bg-black text-white transition-all duration-300 ease-in-out hover:bg-white'>CHOOSE COLOR</button>
        </div>
        <div className='h-full w-[40em] py-10 justify-center rounded-l-xl bg-black'>
            <Canvas>
                {/* <directionalLight position={[0,0,2]} intensity={0.5}/>
                <ambientLight intensity={0.1}/>
                <Cube position={[0,0,0]} size={[1,1,1]} color={"orange"}/>
                <OrbitControls/> */}
                <Suspense fallback={null}>
                <directionalLight position={[1,0,2]} intensity={3}/>
                <directionalLight position={[0,2,0]} intensity={3}/>
                <ambientLight intensity={0.5}/>
                    <Model/>
                    <OrbitControls/>
                </Suspense>
            </Canvas>
        </div>
    </div>
    </>
  )
}
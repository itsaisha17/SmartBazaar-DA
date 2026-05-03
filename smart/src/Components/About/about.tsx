import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function About() {
  return (
    <>
    <div className='absolute gap-28 mt-[810px] flex flex-row ml-16'>
        <img className='object-cover h-96 rounded-2xl'/>
        {/* <h1 className='text-3xl font-quicksand'>About Us</h1> */}
        <div className='flex flex-col pr-14 pb-5 gap-5'>
            <h1 className='text-3xl text-[#471ede] font-quicksand'>About Us</h1>
            <h1 className='text-5xl font-medium font-work-sans'>Integrates Technology<br/>that understands your schedule and fitness<br/>motivations.</h1>
            <h1 className='text-xl text-gray-600 font-medium font-work-sans'>AI fitness trainer helps to enhance exercise  within the comfort of their  own residences. Our aim is to revolutionize exercise programming by accurately detecting users exercise poses ,monitoring repetitions and efficacy.In terms of mental health, it's able to detect facial expressions also.</h1>
        </div>
    </div>
    </>
  )
}

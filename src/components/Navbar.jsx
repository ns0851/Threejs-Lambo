import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Navbar = () => {
  const tl  =gsap.timeline()
  useGSAP(()=>{
    gsap.from(".nav", {
      opacity:0,
      duration:1,
      y:-15,
    })
    gsap.from(".ul", {
      opacity:0,
      y:-20,
      duration:2,
      stagger:true
    })
  })
  return (
    <div className='flex justify-between bg-[#181818] text-white items-center p-6 font-light text-xl '>
      <div className='nav flex gap-4 items-center'>
        <img className='h-16' src="../../bull.svg" alt="" />
        <div className='text-6xl font-head'>Fakerghini</div>
      </div>
      <div className='flex gap-7 ul'>
        <p>Home</p>
        <p>About</p>
        <p>Buy Now</p>
      </div>
    </div>
  )
}

export default Navbar

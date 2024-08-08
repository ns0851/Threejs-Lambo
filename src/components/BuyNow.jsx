import React from 'react'
import InputField from './InputField'
import ButtonBox from './ButtonBox'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger)

const BuyNow = () => {
  useGSAP(() => {
    gsap.from(".form",{
      opacity:0,
      duration:1.5,
      x:-20,
      scrollTrigger:{
        trigger:".s3",
        start:"top bottom",
      }
    })
  })
  const handleClick = () => {
    alert("It's fake.. you can't purchase anything")
  }
  return (
    <section className='bg-[#070707] h-screen s3 text-[#E0E0E0]'>
      <div className='h-[500px] w-full bg-yellow-800 animate-pulse rotate-[10deg] skew-x-12 z-1'>

</div>  
    <div className='bg-[#141414] absolute top-[220%] w-[900px] p-10 m-20 z-20 rounded-xl form'>
      <div className='font-oswald text-center text-xl'>Register Here</div>
      <div>
          <InputField placeholder={"Fake Name"} type={"text"}/>
      </div>
      <hr />
      <div className='flex gap-5'>
        <span>
          <InputField placeholder={"Fake E-Mail"}/>
        </span>
        <span>
          <InputField placeholder={"Fake Password"} type={"password"}/>
        </span>
      </div>
      <div>
          <InputField placeholder={"Fake Phone Number"} type={"text"}/>
          <hr />
      </div>
      <ButtonBox className="" onClick={handleClick} text="Buy"/>
      
    </div>
    </section>
  )
}

export default BuyNow

import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const hero = () => {
  const tl = gsap.timeline()

  useGSAP(() => {
    tl.from(".hh", {
      opacity:0,
      duration:0.5,
      x:-20,
      stagger:true
    })
    .from(".p", {
      opacity:0,
      duration:0.5,
      x:-20,
      stagger:true
    })
    .from(".but", {
      opacity:0,
      duration:1
    })
  })
  const handleClick = () => {
    alert("SCROLL I spent 3 days on car animation :(")
  }
  return (
    <section className='s1 h-screen bg-[#070707] text-white'>
      <div className='flex flex-col hero p-20 justify-centery z-20 absolute top-[22%]'>
        <h1 className=' hh text-[7vh] font-serif text-white'>Lamborghini V-Fake</h1>
        <div>
          <p className=' p text-2xl w-[480px] text-[#9b9b9b] font-poppins'>Doppelganger of the Famous Brand Lamborghini... Introducing Fakerghini. Be Satisfied with the Fakerghini for now but who knows.. maybe in the Future you can pull off the real thing! Get your own Fakerghini now which will never reach you by scrolling below...</p>
          {/* <button className='px-6 py-2 bg-[#FFD700] font-bold text-[#070707] hover:bg-[#ffea72] hover:border-[#e50000] rounded-xl mt-5 cursor-pointer'>Buy Now</button> */}
          <button onClick={handleClick} className=" but px-6 py-2 mt-5 bg-[#FFD700] font-poppins text-[#070707] border-2 font-semibold border-[#FFD700] rounded-xl cursor-pointer hover:bg-[#E5C100] hover:border-[#E5C100]">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default hero

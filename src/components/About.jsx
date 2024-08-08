import React from 'react'


const About = () => {

  return (
    <section className='s2 h-screen bg-[#070707] text-white'>
      <div className='h-[500px] w-full bg-yellow-800 animate-pulse rotate-[10deg] skew-x-12 z-1'>

      </div>  
      <div className='absolute right-[8%] top-[125%] text-left p-20 z-5'>

        <h1 className=' hhh text-[7vh] font-oswald text-[#FFD700]'>About</h1>
        <p className='ppp text-2xl w-[500px] font-poppins'>Fakerghini is a brand new fake model of Lamborghini. The model enables very interesting features such as static horsepower that never actually revs up, aerodynamic design that’s purely for show, and a fuel efficiency that’s virtually nonexistent. With Fakerghini, you’ll experience the thrill of standing still, wrapped in the illusion of speed. It’s the perfect ride for those who prefer their luxury on a strictly visual level. </p>
      </div>
    </section>
  )
}

export default About

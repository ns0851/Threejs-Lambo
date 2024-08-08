import React from 'react'
import CanvasContainer from './components/CanvasContainer'
import Hero from './components/Hero'
import About from './components/About'
import BuyNow from './components/BuyNow'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <Navbar/> 
      <div className='fixed w-full h-screen z-10'>

        <CanvasContainer />
      </div>
      <Hero/>
      <About />
      <BuyNow/>
      
    </>

  )
}

export default App


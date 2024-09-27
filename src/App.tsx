// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Navbar from "./components/navbar"
import { Spotlight } from "./components/ui/Spotlight"
import {InfiniteMovingCardsDemo} from "./components/InfiniteMovingCardsDemo"

function App() {
  return (
    // Background 
    <div className="w-full h-screen 
    md:items-center md:justify-center 
    bg-black/[0.96] antialiased bg-grid-white/[0.02] 
    relative overflow-hidden">

      <Navbar/>
      {/* Spotlight position */}
      <Spotlight 
      className="md:flex md:left-80" 
      fill="white"
      />
        <div className=" p-4 mx-auto relative z-10 w-full pt-10 md:pt-32 px-2 ">
          <div className=" text-4xl pb-5 md:text-7xl px-6 text-center 
          bg-clip-text text-transparent 
          bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Create, Grow and <br/> Scale your business
          </div>
            <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4" >
                Custom tailored solutions for your business.
                 We are a team of creatives who are excited to help grow your business
            </p>

            <a href="/book"
            className="cursor pointer 
            flex items-center
            justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white
            ">
              Book a Call
            </a>

            <div className="w-full pt-20 ">
              {/* Cards */}
              <InfiniteMovingCardsDemo />
            </div>

            
        </div>
      </div>
  )
}

export default App  


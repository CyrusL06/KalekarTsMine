// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Navbar from "./components/navbar"
import { Spotlight } from "./components/ui/Spotlight"
import {InfiniteMovingCardsDemo} from "./components/InfiniteMovingCardsDemo"
// import { AnimatedShinyTextDemo } from "./components/AnimatedShinyTextDemo"



function App() {
  return (
    // Background  s
    // My screen was unscrollable because I set in as h-screen
    //which sets the height of the entire app container to the full height of the screen. 
    //to fix the issue, you can try replacing h-screen with min-h-screen
    <div className="w-full min-h-screen
    md:items-center md:justify-center 
    bg-black/[0.96] antialiased bg-grid-white/[0.02] 
    relative overflow-hidden">

      <Navbar/>
      {/* Spotlight position */}
      <Spotlight 
      className="md:flex md:left-80" 
      fill="white"
      />
        {/* Main Container */}
        <div className="h-50  p-4 mx-auto relative z-10 w-full pt-[100px] pb-[100px] md:pt-20 md:pb-20 px-2 ">

          {/* Shiny Text */}
          {/* <div className="pb-5">
          <AnimatedShinyTextDemo />
          </div> */}
            
          
          {/* Header Design */}
          {/* OHH SHI its the normal {text-4xl} that controls the font */}
          <div className=" font-Inter font-bold text-[45px] leading-none md:text-7xl 
          mt-5  md:mt-2  px-6 text-center 
          bg-clip-text text-transparent 
          bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            {/* Create, Grow and <br/> Scale your business */}
            Beautiful. Fast. Private. <br/>Your Browser, Your Way
          </div>


            <p className="mt-10 text-base md:text-base sm:text-xs font-Poppins
             text-neutral-300 max-w-[400px] md:max-w-[640px] text-center mx-auto px-4" >
                Beautifully designed, privacy-focused, and packed with features.
                We care about your experience, not your data.
                 
            </p>
            
            <a href="/book"
            className="cursor pointer mt-10
            flex items-center bg-white
            justify-center border rounded-full 
            w-48 p-2 mx-auto my-6 text-black
            ">
              Book a Call ⤵
            </a>

            <a href="/book"
            className="cursor pointer 
            flex items-center
            font-Inter
            justify-center 
            w-48  mx-auto my-6 text-white
            ">
              Start Exploring
            </a>
            
            


        </div>

        <div className="w-full pt-7 md:pt-20 ">
              {/* Cards */}
              <InfiniteMovingCardsDemo />
            </div>
      </div>
  )
}

export default App  


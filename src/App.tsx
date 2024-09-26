// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Navbar from "./components/navbar"
import { Spotlight } from "./components/ui/Spotlight"

function App() {
  return (
    // Back
    <div className="w-full h-screen md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar/>
      <Spotlight 
      className="md:flex md:left-80 md:-top-80" 
      fill="white"
      />
        <div className=" p-4 mx-auto relative z-10 w-full pt-10 md:pt-32 px-2 ">
          <div className=" text-4xl pb-5 md:text-7xl px-6 text-center">

          </div>
        </div>
      </div>
  )
}

export default App  

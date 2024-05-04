import React from 'react'
import heroImage from '../assets/bgn.jpg'
import notebookL from '../assets/notebookL.png'
import notbookM from '../assets/notebookM.png'
import mobileR from '../assets/mobileR.png'
import { TypeAnimation } from 'react-type-animation'
const Hero = () => {
  return (
    <div className='relative grid sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 overflow-hidden md:overflow-visible' id='hero'>
      <img className=' hidden md:block absolute z-[-1] w-[400px] bottom-0 left-[-170px] ' src={notebookL}alt="" />
      <img className='absolute z-[-1] w-[400px] bottom-[190px] md:bottom-0 md:left-[-320px]' src={notbookM}alt="" />
      <img className='absolute z-[-1] w-[200px] bottom-[200px] md:bottom-[500px] left-[-450px]' src={mobileR} alt="" />

      <div className='glass px-5 col-span-2 my-auto z-[-1]'>
        <h2 className='text-white text-4xl sm:text-5lg lg:text-8xl font-bold p-4 md:p-0'>
          <p className='md:mb-4 text-gray-500'>I'm a</p>
         <TypeAnimation
         sequence={[
          "Full Stack Web Developer",
          1000,
          "Desktop App Developer",
          1000
         ]}
         wrapper="span"
         speed={40}
         repeat={Infinity}
         />
        </h2>
        <p className='text-white md:my-6 mb-6 md:mb-0 text-sm sm:text-lg lg:text-x1 max-w-[290px] p-4 md:p-0 md:max-w-[600px] ml-1 font-semibold'>
          My name is Jibrin Masud and i have  5+ years expirence in building web and desktop Apps. Using Diffrenet Tech Stack
        </p>
      </div>

      <div className='absolute bottom-0 right-0 top-0 w-[250px] lg:w-[570px] z-[-2]' >
      <img src={heroImage} />
      </div>
    </div>
  )
}

export default Hero

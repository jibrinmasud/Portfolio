import React from 'react'
import notbook from '../assets/notebookM.png'
import mobile from '../assets/mobileR.png'
import about from '../assets/bgn.jpg'
const About = () => {
  return (
    <div  className='text-white gap-4 max-w[1200px] mx-auto my-12 ml-20 mr-20 grid sm:grid-cols-3'  id='about'>
        
      <div className='sm:col-span-2 glass sm:py-16 my-auto text-left p-4 '>
        <div className='max-w-[80%] mx-auto'>
          <h2 className='text-3xl font-bold mb-4'>Software Developer dedicated to improving skills through hands-on learning and development work.</h2>
          <p className='text-2xl font-serif'></p>
        </div>

      </div>

      <div className=' hidden md:block sm:col-span-1 glass overflow-hidden'>
        <img src={notbook} className='md:w-[500px] absolute' alt="" />
      </div>

      <div className=' hidden md:block sm:col-span-1 glass overflow-hidden'>
      <img src={about} className='md:w-[500px] absolute' alt="" />
      </div>

      <div className=' md:hidden relative overflow-hidden h-[200px] glass'>
      <img src={notbook} className=' absolute' alt="" />
      <img src={about} className='md:w-[400px] ' alt="" />
      

      </div>

      <div className='sm:col-span-2 glass sm:py-16 my-auto text-left p-4  '>
        <div className='max-w-[80%] mx-auto'>
          <h2 className='text-3xl font-semibold mb-4'>I am Proficient in Front End Development and 
          desktop development environments. Adept at using HTML5, JavaScript,
           ReactJS and other programming languages to produce clean code. 
           Well-organized and collaborative team player with strong
            communication and analytical abilities.</h2>
          <p></p>
        </div>

      </div>

    </div>
  )
}

export default About

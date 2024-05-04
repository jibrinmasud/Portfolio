import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const ProgressBar = () => {
    const[nav, setNav] = useState(false);
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white glass sticky top-0 z-50'>
        <div>
            <h1 className='text-2xl ml-2'>Jibrin Masud</h1>
        </div>

        <ul className=' hidden md:flex'>
            <li className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105' ><Link to="hero" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
            <li className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105'><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
            <li className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105'><Link to="work" spy={true} smooth={true} offset={50} duration={500}>Portfolio</Link></li>
            <li className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105'><Link to="skills" spy={true} smooth={true} offset={50} duration={500}>Skills</Link></li>
            <li className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105'><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
        </ul>

        <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
            {nav  ? <AiOutlineClose size={30}/> :<AiOutlineMenu size={30}/> } 
        </div>
        {nav && (
             <ul className='p-8 ml-20 z-4 flex flex-col justify-center items-center absolute top-0 left-0 w-full bg-gradient-to-b from-black to-gray-500 text-white'>
             <li className='p-4 cursor-pointer capitalize py-6 font-medium text-white hover:scale-105' ><Link to="hero" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
             <li className='p-4 cursor-pointer capitalize py-6 font-medium text-white hover:scale-105'><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
             <li className='p-4 cursor-pointer capitalize py-6 font-medium text-white hover:scale-105'><Link to="work" spy={true} smooth={true} offset={50} duration={500}>Portfolio</Link></li>
             <li className='p-4 cursor-pointer capitalize py-6 font-medium text-white hover:scale-105'><Link to="skills" spy={true} smooth={true} offset={50} duration={500}>Skills</Link></li>
             <li className='p-4 cursor-pointer capitalize py-6 font-medium text-white hover:scale-105'><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
         </ul>
        )}


         <div className='col-span-2 my-4'>
        <h1 className='text-4xl mb-4 text-gray-300 text-center'>Skills</h1>
      </div>
       <Bounce>
      <div class="max-w-sm rounded overflow-hidden shadow-lg ml-5">
     
  <div class="px-6 py-4">
   
    <div class="font-bold text-xl mb-2 text-white">Front-End</div>
    <p class="text-white text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  
  </div>

  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">HTML</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">CSS</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JavaScript</span>
  </div>
 
</div>
</Bounce>

<Bounce>
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-white">Back-End</div>
    <p class="text-white text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">.Net Core</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">C#</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">PHP</span>
  </div>
</div>
</Bounce>

<Bounce>
<div class="max-w-sm rounded overflow-hidden shadow-lg ml-5">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-white">Database</div>
    <p class="text-white text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MYSQL</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">SQL Server</span>
  </div>
</div>
</Bounce>

<Bounce>
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-white">Database</div>
    <p class="text-white text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MYSQL</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">SQL Server</span>
  </div>
</div>
</Bounce>

    
    </div>
  );
};

export default ProgressBar;
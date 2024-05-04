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
            <li className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105' ><Link onClick={()=>setNav(!nav)} to="hero" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
            <li className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105'><Link onClick={()=>setNav(!nav)} to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
            <li className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105'><Link onClick={()=>setNav(!nav)} to="work" spy={true} smooth={true} offset={50} duration={500}>Portfolio</Link></li>
            <li className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105'><Link onClick={()=>setNav(!nav)} to="skills" spy={true} smooth={true} offset={50} duration={500}>Skills</Link></li>
            <li className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105'><Link onClick={()=>setNav(!nav)} to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
        </ul>

        <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
            {nav  ? <AiOutlineClose size={30}/> :<AiOutlineMenu size={30}/> } 
        </div>
        {nav && (
             <ul className='p-8 ml-20 z-4 flex flex-col justify-center items-center absolute top-0 left-0 w-full bg-gradient-to-b from-black to-gray-500 text-white'>
             <li className='p-4 cursor-pointer capitalize py-6 font-medium text-white hover:scale-105' ><Link onClick={()=>setNav(!nav)} to="hero" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
             <li className='p-4 cursor-pointer capitalize py-6 font-medium text-white hover:scale-105'><Link onClick={()=>setNav(!nav)} to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
             <li className='p-4 cursor-pointer capitalize py-6 font-medium text-white hover:scale-105'><Link onClick={()=>setNav(!nav)} to="work" spy={true} smooth={true} offset={50} duration={500}>Portfolio</Link></li>
             <li className='p-4 cursor-pointer capitalize py-6 font-medium text-white hover:scale-105'><Link onClick={()=>setNav(!nav)} to="skills" spy={true} smooth={true} offset={50} duration={500}>Skills</Link></li>
             <li className='p-4 cursor-pointer capitalize py-6 font-medium text-white hover:scale-105'><Link onClick={()=>setNav(!nav)} to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
         </ul>
        )} 
    </div>
  );
};

export default ProgressBar;
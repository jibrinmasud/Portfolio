import React from 'react'
import {AiFillLinkedin, AiFillGithub, AiFillGoogleCircle} from 'react-icons/ai'


const Contact = () => {
  return (
    <div className='p-6 max-w-[1200px] mt-10 mx-auto glass' id='contact'> 
      
      <div className='mx-auto ma-w-[600px] text-center p-6'>
        <h2 className='text-gray-500 md:text-5xl text-5xl font-semibold'>Send Me A Message</h2>
        <p className='text-gray-500 text-xl'> Let`s Start Working Today</p>
      </div>

      <div className='flex justify-center'>
        <div className='my-auto text-purple-900'>
          <a href="https://linkedin.com/in/jibrin-masud"><AiFillLinkedin className='w-[50px] h-auto mb-4'/></a>
          <a href="https://github.com/jibrinmasud"><AiFillGithub className='w-[50px] h-auto mb-4'/></a>
          <a href=""><AiFillGoogleCircle className='w-[50px] h-auto'/></a>
        </div>

        <div className='p-6 max-w-6xl text-white'>
          {/* <h2 className='mb-4 text-2xl font-bold text-gray-400'>
            Ready To Get Started
          </h2> */}
          <form action='https://getform.io/f/lajkymgb'method='POST' >
            <div className='space-y-4 mb-6'>
              <input type="text" id='name' name='name' placeholder='Enter Your Name' required className='w-full border-gray-400 py-2 px-4 border rounded' />
              <input type="text" id='email' name='email' placeholder='Enter Your Email' required className='w-full border-gray-400 py-2 px-4 border rounded' />
              <textarea name="message" id="message" placeholder='Enter Your Message' cols="30" rows="5" className='w-full border-gray-400 text-black py-2 px-4 border rounded'></textarea>

            </div>

            <div className='text-center'>
              <button type="submit" className='w-full bg-purple-700 px-6 max-w-md py-3 rounded-xl'>Send Message</button>

            </div>
          </form>

        </div>
        
      </div>
    </div>
  )
}

export default Contact

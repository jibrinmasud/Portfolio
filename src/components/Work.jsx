import React from 'react'
import studentrec from '../assets/studentrec.png'
import foodapp from '../assets/foodapp.png'
import todoapp from '../assets/todoapp.png'

const projcts =[
  {id:1,  img: todoapp, title:"ReactTodoApp", liveUrl:'/'},
  {id:2, img:foodapp, title:"FoodRecipe", liveUrl:'/'},
  {id:3, img:studentrec, title:" C# StudentRecodrs ", liveUrl:'/'},
]

const Work = () => {
  return (
    <div className='max-w-[1200px] mx-auto grid grid-cols-2 gap-4  glass p-6' id='work'>

      <div className='col-span-2 my-4'>
<h1 className='text-4xl mb-4 text-gray-300 text-center'>Portfolio</h1>
      </div>
{projcts.map((project)=>(
  <div key={project.id} className='glass transform transition-transform hover:scale-110 duration-300 overflow-hidden shadow-lg h-[200px] group relative'>
    <img src={project.img} className='w-full h-full object-cover'/>
    <div className='group-hover:opacity-90 opacity-0 bg-[#232323] absolute transition-opacity duration-300 inset-0 flex  flex-col justify-center items-center'>
      <span className='text-2xl font-bold text-white mb-4'>{project.title}</span>
      <div>
        <a className=' bg-white px-5 py-2 font-bold rounded-xl' href={project.liveUrl}>View Demo</a>
      </div>
    </div>
  </div>

))}

    </div>
  )
}

export default Work

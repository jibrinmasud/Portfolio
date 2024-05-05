import Html from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactPic from '../assets/react.png'
import Tailwindcss from '../assets/tailwind.png'
import Bootstrap from '../assets/bootstrap.jpeg'
import Csharp from '../assets/csharp.png'
import Dotnetcore from'../assets/Dotnetcore.png'
import Github from '../assets/githubmark.png'
import { motion } from 'framer-motion'

const Skills = () => {

  const techs =[
    {
      id: 1,
      src: Html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },

    {
      id: 2,
      src: CSS,
      title: 'CSS',
      style: 'shadow-blue-500'
    },

    {
      id: 3,
      src: JavaScript,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: ReactPic,
      title: 'ReactJs',
      style: 'shadow-blue-600'
    },
    {
      id: 5,
      src: Tailwindcss,
      title: 'Tailwind CSS',
      style: 'shadow-sky-500'
    },
    {
      id: 6,
      src: Bootstrap,
      title: 'Bootstrap CSS',
      style: 'shadow-purple-500'
    },
    {
      id: 7,
      src: Csharp,
      title: 'C Sharp',
      style: 'shadow-purple-500'
    },
    {
      id: 8,
      src: Dotnetcore,
      title: '.Net Core',
      style: 'shadow-purple-500'
    },
    {
      id: 9,
      src: Github,
      title: 'Github',
      style: 'shadow-gray-500'
    },
  ]
  return (
    <div className='mx-auto grid grid-cols-1 gap-4 glass mt-10 p-4 max-w-[1200px]  relative' id='skills'>
     
     <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white'>
      <div>
        <p className='text-4xl font-semibold border-b-4 border-gray-500 p-2 inline'>Expirence</p>
        <p className='py-6'>This are the Technology i have worked with.</p>
      </div>

      <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-10 text-center py-8 px-12 sm:px-0'>
        {
          techs.map(({id, src, title, style}) =>(

           <motion.div drag dragConstraint={{left:0, right: 0, top:0, bottom:0 }}  whileInView={{scale:[0,1], rotate:360, x:[0, 100,-100,0]}} key={id}
             className={`shadow-md py-2 rounded-lg ${style}`}>
            <img  src={src} className='w-20 mx-auto' />
            <p className='mt-4'>{title}</p>
          </motion.div>))
        }
      </div>
     </div>

    </div>
  )
}

export default Skills

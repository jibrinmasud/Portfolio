import  { Bounce } from "react-awesome-reveal"
const About = () => {
  return (
    <div  className='text-white gap-4 max-w[1200px] mx-auto my-12 ml-20 mr-20 grid sm:grid-cols-2'  id='about'>
      <div className='sm:col-span-2 glass sm:py-16 my-auto text-left p-4 '>
        <div className='max-w-[80%] mx-auto'>
        <div>
        <p className='text-4xl font-semibold border-b-4 border-gray-500 p-1 mt-10 inline'>About</p>
      </div>
         <Bounce><h2 className='text-2xl font-medium mt-10 mb-4'>Software Developer dedicated 
         to improving skills through hands-on learning and development work.
         I am Proficient in Front End Development and 
          desktop development environments. Adept at using HTML5, JavaScript,
           ReactJS and other programming languages to produce clean code. 
           Well-organized and collaborative team player with strong
            communication and analytical abilities.
         </h2></Bounce> 
        </div>

      </div>
    </div>
  )
}

export default About

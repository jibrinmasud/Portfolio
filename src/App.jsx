import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ProgressBar from "./components/ProgressBar"
import Skills from "./components/Skills"
import Work from "./components/Work"


function App() {
  return (
    <>
    <Navbar/>
    {/* <ProgressBar/> */}
    <Hero/>
    <About/>
    <Work/>
    <Skills/>
    <Contact/>
    <Footer/>
   
   
    </>
  )
}

export default App

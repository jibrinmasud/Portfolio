import heroImage from "../assets/bgn.jpg";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <div
      className="text-white p-8 mt-10 gap-4 max-w[1200px] mx-auto my-6 ml-40 mr-40 grid sm:grid-cols-2s overflow-hidden md:overflow-visible"
      id="hero">
      <div className="glass px-5 col-span-2 my-auto z-[-1]">
        <h2 className="text-white text-4xl sm:text-5lg lg:text-8xl font-bold p-4 md:p-0">
          <p className="md:mb-4 text-gray-500">I'm a</p>
          <TypeAnimation
            sequence={[
              "Dotnet Developer",
              1000,
              "Experience in.....",
              1000,
              "C#, ASP.NET CORE ",
              1000,
              "MVC, SQL SERVER",
              1000,

              "ENTITY FRAMEWORK COSMOSDB",
              1000,

              "HTML, CSS, JAVASCRIPT",
              1000,
              "REACTJS,TAILWIND ",
              1000,
              " BOOSTRAP",
              1000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
          />
        </h2>
        <p className="text-white md:my-6 mb-6 md:mb-0 text-sm sm:text-lg lg:text-x1 max-w-[290px] p-4 md:p-0 md:max-w-[600px] ml-1 font-semibold">
          My name is Jibrin Masud with over 3 years expirence.
        </p>
      </div>

      <div className="absolute bottom-0 right-0 top-0 w-[250px] lg:w-[570px] z-[-2]">
        <img src={heroImage} />
      </div>
    </div>
  );
};

export default Hero;

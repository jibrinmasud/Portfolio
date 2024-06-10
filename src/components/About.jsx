import { Bounce } from "react-awesome-reveal";
const About = () => {
  return (
    <div
      className="text-white gap-4 max-w[1200px] mx-auto my-12 ml-40 mr-40 grid sm:grid-cols-2"
      id="about"
    >
      <div className="sm:col-span-2 glass sm:py-16 my-auto text-left p-4 ">
        <div className="max-w-[80%] mx-auto">
          <div>
            <p className="text-4xl font-semibold border-b-4 border-gray-500 p-1 mt-10 inline">
              About
            </p>
          </div>
          <Bounce>
            <h2 className="text-2xl font-medium mt-10 mb-4">
              Highly skilled .NET Developer with over 3 years of extensive
              experience in designing, developing, and maintaining .NET
              applications, using ASP.NET Core, C#. Proficient in modern
              front-end frameworks such as ReactJS. Proven ability to work
              effectively in Agile environments and apply Test-Driven
              Development (TDD) methodologies. Known for a meticulous approach
              to software development, strong problem-solving abilities, and
              effective collaboration within cross-functional teams with a strong
              communication and analytical abilities.
            </h2>
          </Bounce>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import bgImage from "../../../assets/rocket.png";
import TechStack from '../teck-stack/teck-stack'; // Import the TechStack component

const About = () => {
  return (
    <div
      className="relative w-full max-w-4xl p-6 bg-center bg-no-repeat bg-cover rounded-lg shadow-lg bg-blue-100/10 backdrop-blur-sm md:p-12"
      style={{
        backgroundImage: `url(${bgImage})`, 
      }}
    >
      <div className="grid grid-cols-2 gap-8 md:grid-cols-2">
        
        <div className="flex items-center justify-center">
        </div>

        <div className="flex flex-col items-start justify-center">
          <div className="mb-10 text-white"> 
            <h1 className="mb-4 space-x-1 text-3xl ">
              About
            </h1>
            <p className="mb-6 text-lg">
              I am a Full Stack Developer with hands-on experience in building
              scalable, efficient web applications and Android apps. I specialize
              in React and Next.js for front-end development, as well as creating
              fully functional back-end systems with Node.js and MongoDB. With
              additional proficiency in Python, C, and Java, I am able to work on
              a wide range of software projects.
            </p>
            <p className="text-lg">
              I am also passionate about mobile app development and have built
              Android applications that solve real-world problems.
            </p>

            <TechStack /> 

          </div>
        </div>

      </div>
    </div>
  );
};

export default About;

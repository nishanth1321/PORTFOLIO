import React, { useState, useEffect } from "react";
import ParticlesComponent from "../Particle-js/particles";
import Contact from "./Contact/contact";
import Intro from "./intro/intro";
import About from "./About/about";
import StartingAnimation from "../animations/starting-animation"; // Import the animation component
import Education from "./Education/education";
import Experience from "./Experience/years-of-experience";
import Projects from "./Projects/projects";

const MainExport = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      <div>
        <ParticlesComponent />
      </div>
      {showAnimation ? (
        <div className="flex items-center justify-center h-screen">
          <StartingAnimation />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto my-10 space-y-4">
          <div className="w-full">
            <Intro />
          </div>

          <div>
            <About />
          </div>
          <div className="flex w-full space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-1/2">
              <Education />
            </div>
            <div className="w-full md:w-1/2">
              <Experience />
            </div>
          </div>
          <div>
          <Projects />
          </div>
          <Contact />
        </div>
      )}
    </div>
  );
};

export default MainExport;

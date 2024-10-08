import React, { useRef, useState } from 'react';
import '../../../components/styles/project.css'; // Import the CSS for scrolling animation


const Projects = () => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative projects-container overflow-hidden w-full max-w-[900px] mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ul
        ref={ref}
        className={`scrolling-container flex space-x-4 snap-x snap-mandatory ${
          isHovered ? 'paused' : ''
        }`}
      >
        {['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5'].map(
          (project, index) => (
            <li
              key={index}
              className="project-item bg-blue-100/10 backdrop-blur-sm rounded-lg shadow-lg p-4 w-[350px] min-h-[400px] snap-center text-white transition-transform duration-300"
            >
              {project}
            </li>
          )
        )}
        {/* Duplicate content for seamless infinite scrolling */}
        {['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5'].map(
          (project, index) => (
            <li
              key={index + 5}
              className="project-item bg-blue-100/10 backdrop-blur-sm rounded-lg shadow-lg p-4 w-[350px] min-h-[400px] snap-center text-white transition-transform duration-300"
            >
              {project}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Projects;

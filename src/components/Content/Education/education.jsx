import React from "react";

const Education = () => {
  return (
    <div className="hover:scale-105 transition-transform duration-300 relative w-full max-w-4xl p-6 bg-blue-100/10 rounded-lg shadow-lg h-[30vh] backdrop-blur-sm md:p-12">
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="mt-8 mb-4 text-3xl font-bold text-right text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-gray-700 md:text-left">
          Education
        </h2>
        <div className="p-6 mb-8 font-extrabold text-white">
          <p className="text-lg font-bold text-center">
            Be in Computer Science
          </p>
          <p className="text-center text-white">
            2021 - 2024 | CGPA: 8.1
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;

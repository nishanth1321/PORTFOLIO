/* eslint-disable no-unused-vars */
"use client";
import React, { useState } from "react";
import flying from "../../../assets/lookup.png";
import { TextRevealCard, TextRevealCardTitle } from "../../ui/text-reveal"; // Adjust the import path

const Experience = () => {
  return (
    <div className="w-full max-w-4xl mx-auto h-[35%] ">
      <TextRevealCard
        text="Hover Me!"
        revealText="1+ year in Full Stack Application development"
        className="text-sm transition-transform duration-300 rounded-lg shadow-lg bg-blue-100/10 backdrop-blur-sm"
      >
        <TextRevealCardTitle className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-gray-700">
          Experience
        </TextRevealCardTitle>

        <img
          src={flying}
          alt="Flying Icon"
          className="absolute w-20 h-20 -right-10 -bottom-12 md:w-56 md:h-56"
        />
      </TextRevealCard>
    </div>
  );
};

export default Experience;

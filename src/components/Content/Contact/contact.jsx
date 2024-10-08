/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="relative w-full max-w-4xl p-6 mt-8 rounded-lg shadow-lg bg-blue-100/10 backdrop-blur-sm md:p-12 ">
      <div className="text-center">
        <h1 className="mb-4 text-2xl text-white">Connect:</h1>
        <div className="flex justify-center space-x-6 transition-transform duration-300 hover:scale-110">
        <a
            href="tel:+919566397838"
            className="pt-1 text-2xl text-blue-600 hover:text-blue-400"
          >
            <FaPhone />
          </a>
          <a
            href="mailto:nishanthkr134@gmail.com"
            className="text-3xl text-blue-600 hover:text-blue-400"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/919566397838"
            className="text-3xl text-blue-600 hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/__nishanth_13"
            className="text-3xl text-blue-600 hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          
          
        </div>
      </div>
    </div>
  );
};

export default Contact;

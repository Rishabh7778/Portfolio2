import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";


const Footer = () => {
  return (
    <footer className="mt-12 text-white/70 py-8 border-t border-gray-700">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Name Section */}
        <h1 className="text-2xl font-bold mb-4 md:mb-0">Rishabh Kumar</h1>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/rishabh-kumar-786a6b275/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/Rishabh7778/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:saty665566@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <IoIosMail size={24} />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

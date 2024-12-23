"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#portfolio" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="text-white/70 pt-6">
      <div className="hidden md:flex items-center justify-between px-4 mx-auto max-w-[1200px]">
        <ul className="flex flex-row p-4 space-x-8">
          
          <li>
            <a href="#contact" className="group">
              <h1 className="hover:text-orange-400">Contact Me</h1>
              <div className="relative">
                <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out bg-orange-400 rounded-full group-hover:w-full"></div>
                <div className="absolute w-2/3 mt-1 h-1 transition-all duration-300 ease-out bg-orange-400 rounded-full group-hover:w-full"></div>
              </div>
            </a>
          </li>
          <li>
            <a href="https://app.luminpdf.com/viewer/672ba8219dff5647126e7be5" className="group" target="_blank">
              <h1 className="hover:text-orange-400">Download Resume</h1>
              <div className="relative">
                <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out bg-orange-400 rounded-full group-hover:w-full"></div>
                <div className="absolute w-2/3 mt-1 h-1 transition-all duration-300 ease-out bg-orange-400 rounded-full group-hover:w-full"></div>
              </div>
            </a>
          </li>

          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path}>
                <p className="hover:text-orange-400">{link.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Icon */}
      <div
        className="md:hidden absolute top-5 right-5 border rounded text-white/70 border-white/70 p-2 z-50"
        onClick={toggleNav}
        aria-label={nav ? "Close menu" : "Open menu"}
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile Navbar */}
      <motion.div
        initial={false}
        animate={nav ? "open" : "closed"}
        variants={menuVariants}
        className="fixed left-0 top-0 w-full z-40 bg-black/90"
      >
        <ul className="text-4xl font-semibold my-24 text-center space-y-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path} onClick={closeNav}>
                {link.title}
              </Link>
            </li>
          ))}
          <li>
            <a href="#contact" className="group text-white/70 hover:text-orange-400" onClick={closeNav}>
              <h1>Contact Me</h1>
            </a>
          </li>
          <li>
            <a href="#contact" className="group text-white/70 hover:text-orange-400" onClick={closeNav}>
              <h1>Download Resume</h1>
            </a>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;

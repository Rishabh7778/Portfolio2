"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Rishabh from "../assets/Rishabh.png";
import ufo from '../assets/ufo.gif'

const Hero = () => {
  return (
    <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,_#000,_#2B1942_35%,_#8F5C55_60%,_#DBAF6E_80%)]">
      {/* Background Circle */}
      <div
        className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-gradient-to-b from-black to-[#2B1942]"
      ></div>

      {/* Hero Text */}
      <div>
        <div className="text-4xl sm:text-6xl md:text-8xl font-bold text-center px-4">
          <h1 className="text-[#98B4CE]">Hi, I am</h1>
          <h1 className="text-[#E48A57]">Rishabh Kumar</h1>
        </div>

        {/* Thunder Images */}
        <motion.div
          className="hidden md:block absolute left-[5%] md:left-[280px] top-[150px]"
          drag
        >
          <Image
            src={ufo}
            alt="thunder image"
            width={100}
            height={100}
            className="md:w-[190px] md:h-[190px]"
            draggable="false"
          />
        </motion.div>

        <motion.div
          className="hidden md:block absolute right-[5%] md:right-[250px] top-[20px]"
          drag
        >
          <Image
            src={ufo}
            alt="thunder image"
            width={100}
            height={100}
            className="md:w-[190px] md:h-[190px]"
            draggable="false"
          />
        </motion.div>
      </div>

      {/* Description */}
      <p className="text-center text-lg sm:text-2xl max-w-[280px] sm:max-w-[500px] mx-auto mt-8 text-white/80 px-4">
        I&apos;m a quick learner and team player, eager to apply my knowledge in a challenging role and gain practical experience while contributing to the success of an organization.
      </p>

      {/* Profile Image */}
      <Image
        src={Rishabh}
        alt="profile pic"
        className="h-auto w-[120px] sm:w-[200px] relative mx-auto rounded-full mt-6"
      />
    </div>
  );
};

export default Hero;

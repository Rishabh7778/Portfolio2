import React from 'react';
import { FaReact, FaCss3, FaBootstrap, FaAws, FaNode } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { DiJavascript1 } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";


const skillIcons = [
  { icon: <TiHtml5 size="80%" />, label: "HTML5" },
  { icon: <FaCss3 size="80%" />, label: "CSS3" },
  { icon: <DiJavascript1 size="80%" />, label: "JavaScript" },
  { icon: <FaBootstrap size="80%" />, label: "Bootstrap" },
  { icon: <SiMongodb size="80%" />, label: "MongoDB" },
  { icon: <SiExpress size="80%" />, label: "ExpressJs" },
  { icon: <FaReact size="80%" />, label: "React" },
  { icon: <FaNode size="80%" />, label: "NodeJs" },
  { icon: <TbBrandNextjs size="80%" />, label: "Next.js" },
  { icon: <SiTypescript size="80%" />, label: "TypeScript" },
  { icon: <FaAws size="80%" />, label: "AWS Cloud" },

];

const Skills = () => {
  return (
    <div className="bg-gradient-to-t from-black to-[#381a5f] py-12 sm:py-16 lg:py-24 px-4">
      <div className="text-white mx-auto text-center max-w-screen-lg">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
          What I Do
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {skillIcons.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center bg-white/10 p-4 rounded-xl transform transition-transform hover:scale-105 h-[150px] w-[150px] sm:h-[200px] sm:w-[180px] lg:h-[220px] lg:w-[220px]"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl mb-2">{skill.icon}</div>
              <p className="text-xs sm:text-sm lg:text-base">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

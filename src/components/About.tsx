import React from 'react';
import Image from 'next/image';
import educ from '../assets/book.png'
import logic from '../assets/Problem solving.png'
import exper from '../assets/Experience.png'
import prog from '../assets/Programming.png'

const About = () => {
  return (
    <div className="max-w-[1200px] mx-auto" id="about">

        <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4'>About <span className='text-orange-400'>me</span></h1>

      <div className="px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center">

        <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          {/* Image must be self-closing */}
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-800 to-orange-700 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-5'>
            <Image
              src={educ}
              alt="book"
              className="w-auto h-[130px]"
            />
            <div className='flex flex-col mt-4'>
              <h2 className="text-2xl font-bold text-white/90">Education</h2>
              <p className="text-lg text-white/70 mt-2">I am a Computer Applications Grad Student at R.C Institute of Technology(GGSIPU)</p>
            </div>
          </div>
        </div>

        <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          {/* Image must be self-closing */}
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-800 to-orange-700 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-5'>
            <Image
              src={logic}
              alt="book"
              className="w-auto h-[130px]"
            />
            <div className='flex flex-col mt-4'>
              <h2 className="text-2xl font-bold text-white/90">Problem-Solving</h2>
              <p className="text-lg text-white/70 mt-2">Quick learner, team player, eager to apply knowledge and contribute</p>
            </div>
          </div>
        </div>

        <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          {/* Image must be self-closing */}
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-800 to-orange-700 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-5'>
            <Image
              src={exper}
              alt="book"
              className="w-auto h-[130px]"
            />
            <div className='flex flex-col mt-4'>
              <h2 className="text-2xl font-bold text-white/90">Experience</h2>
              <p className="text-lg text-white/70 mt-2">Experienced in full-stack development, problem-solving, and collaborative team projects</p>
            </div>
          </div>
        </div>

        <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          {/* Image must be self-closing */}
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-800 to-orange-700 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-5'>
            <Image
              src={prog}
              alt="book"
              className="w-auto h-[130px]"
            />
            <div className='flex flex-col mt-4 ml-1'>
              <h2 className="text-2xl font-bold text-white/90">Technical Skills</h2>
              <p className="text-lg text-white/70 mt-2">I have worked with HTML5, CSS, JavaScript, C++, and strengthened my React, Node.js, NoSQL, Next.js, and TypeScript experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

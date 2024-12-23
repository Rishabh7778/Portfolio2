"use client";
import codebook from '../assets/Codebook.jpg';
import crool from '../assets/crool.jpg';
import taskmate from '../assets/todo.jpg'
import Quiz from '../assets/Quiz.jpg'
import Freewatch from '../assets/Freewatch.jpg'
import chatapp from '../assets/chatapp.jpg'
import { motion } from 'framer-motion';
import Image from 'next/image';

const Projects = [
    {
        title: "Chat Application",
        desc: "ChatApp is a dynamic platform built with React, Tailwind CSS, and Socket.io for real-time messaging, avatar customization, secure MongoDB storage, and seamless user experience with message persistence and easy registration.",
        devstack: "React, Nodejs, Expressjs, MongoDB, Socket.IO, Tailwind CSS and JWT-token",
        link: "https://www.linkedin.com/in/rishabh-kumar-786a6b275/",
        github: "https://github.com/Rishabh7778/chatapp-server",
        src: chatapp,
    },
    {
        title: "Codebook",
        desc: "A comprehensive, responsive application offering features like a filter bar, search bar, JWT-based authentication, a user dashboard, and order success notifications. Built with React, jQuery, Redux, and Toast notifications, Codebook provides a seamless user experience with dynamic page titles and an interactive cart page.",
        devstack: "React, Redux, Jquery, Tailwind CSS and JWT-token",
        link: "https://codebook-rk.netlify.app/",
        github: "https://github.com/Rishabh7778/codebook",
        src: codebook,
    },
    {
        title: "Crool_Gaming",
        desc: "Crool Games is a versatile gaming website offering free access to various game categories like arcades, action, racing, and adventure. Users can download games seamlessly and explore detailed reviews to make informed choices about what to play. The platform ensures a comprehensive gaming experience for all.",
        devstack: "Nodejs, Expressjs, MongoDB, and Passport Authentication",
        link: "https://www.linkedin.com/in/rishabh-kumar-786a6b275/",
        github: "https://github.com/Rishabh7778/CroolGames",
        src: crool,
    },
    {
        title: "FreeWatch",
        desc: "FreeWatch is a responsive movie website built with React, React-DOM, Tailwind CSS, and a movie API. It offers detailed movie information like budget and IMDb rating, with a user-friendly interface. The site includes dark mode for visual appeal and ensures a seamless experience across different screen sizes..",
        devstack: "React, Tailwind CSS",
        link: "https://coruscating-manatee-94a6d7.netlify.app/",
        github: "https://github.com/Rishabh7778/FreeWatch",
        src: Freewatch,
    },
    {
        title: "Think Tank Trivia",
        desc: "This quiz website, built using Node.js, Express.js, MongoDB, and RESTful APIs, offers users the ability to discover, create, and learn through interactive quizzes. It features over 15 categories, including English, general knowledge, and music, making it ideal for use at school, work, or home.",
        devstack: "React, Node.js, MongoDB and Bcrypt Authentication",
        link: "https://www.linkedin.com/in/rishabh-kumar-786a6b275/",
        github: "https://github.com/Rishabh7778/QuizWebsite",
        src: Quiz,
    },
    {
        title: "Todo-Mate",
        desc: "Taskmate is a responsive to-do website built with React, CSS3, and JavaScript, offering multiple themes and local storage integration for a seamless user experience. Its user-friendly design allows for easy task updates and efficient task management, providing a modern and smooth functionality for daily task organization.",
        devstack: "React and Tailwind CSS",
        link: "https://taskmate-rk.netlify.app/",
        github: "https://github.com/Rishabh7778/QuizWebsite",
        src: taskmate,
    },
];

const Portfolio = () => {
    return (
        <div className='text-white bg-gradient-to-b from-black to-[#381a5f] mt-40 py-18' id="portfolio">
            <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 my-12'>
                Selected <span className='text-orange-400'>Projects</span>
            </h1>
            <div className='max-w-[1200px] mx-auto mt-40 space-y-24'>
                {Projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className={`flex flex-col sm:flex-row gap-12 items-center justify-center ${
                            index % 2 === 1 ? "md:flex-row-reverse" : ""
                        }`}
                    >
                        <div className='space-y-4 max-w-[550px]'>
                            <h2 className='text-7xl my-4 text-white/70'>{`0${index + 1}`}</h2>
                            <h2 className='text-4xl'>{project.title}</h2>
                            <p className='text-lg text-white/70 break-words p-4'>{project.desc}</p>
                            <p className='text-xl text-orange-500 font-semibold'>{project.devstack}</p>
                            <div className='w-64 h-[1px] bg-gray-400 my-4' />
                            <div>
                                <a href={project.link} target="_blank" className='text-blue-400 hover:underline mr-6'>
                                    Live Demo
                                </a>
                                <a href={project.github} target="_blank" className='text-blue-400 hover:underline'>
                                    GitHub
                                </a>
                            </div>
                        </div>

                        <div>
                            <Image
                                src={project.src}
                                alt={project.title}
                                className='h-[350px] w-[600px] object-cover border rounded border-gray-600'
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;

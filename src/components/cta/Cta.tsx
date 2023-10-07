import React from "react";
import "./cta.css";

const Cta = () => {
  return (
    <div className="container h-screen py-12 custom-cursor">
      <div className="h-3/4 flex flex-col md:flex-row relative">
        <div className="md:w-1/2 p-4">
          <p className="text-2xl font-semibold glow-on-hover pb-4 text-blue-600">
            What do you want me to build for you?
          </p>
          <p className="text-base glow-on-hover dark:text-gray-400">
            I have you covered in every way:
          </p>
          <p className="text-base glow-on-hover text-orange-500">Frontend</p>
          <p className="text-base glow-on-hover dark:text-gray-400">
            I will design this with:
          </p>
          <ul className="list-disc list-inside text-base glow-on-hover dark:text-white">
            <li className="pt-2">React</li>
            <li className="py-2">JavaScript</li>
            <li>Tailwind</li>
            <li className="py-2">CSS</li>
          </ul>
        </div>

        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-yellow-300 w-12 h-12 rounded-full shadow-md animate-glow"></div>
        <div className="w-4 h-3/4 animate-gradient"></div>

        <div className="md:w-1/2 p-4 glow-on-hover md:pt-24 md:mt-4 md:pl-12">
          <p className="text-base text-orange-500">Backend</p>
          <p className="text-base dark:text-gray-400">
            I will build this with:
          </p>
          <li className="text-base dark:text-white pt-2">Node.js</li>
          <li className="text-base dark:text-white py-2">Express</li>
          <li className="text-base dark:text-white">
            MongoDB ... for your database 😊
          </li>
        </div>
          </div>
          
            <div>
            <p className="pb-4 dark:text-white">Send me a mail</p>
            <div className="email-container">
                <div className="glowing-bulb"></div>
                <a href="mailto:bartplangedennis@gmail.com" className="email-link hover-underline text-blue-800 dark:text-orange-500 text-xl">
                bartplangedennis@gmail.com
                </a>
            </div>
            </div>
    </div>
  );
};

export default Cta;

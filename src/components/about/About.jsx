import { useState, useEffect } from 'react';
import './about.css';

const About = () => {
    const dotColors = ["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-orange-500"];
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentColorIndex((currentColorIndex + 1) % dotColors.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [currentColorIndex, dotColors.length]);

    const getColor = (index) => {
        return dotColors[(currentColorIndex + index) % dotColors.length];
    };

    return (
        <div className="relative about container mx-auto pt-6 bg-white mb-24 dark:bg-blue-950">
            <div className='flex flex-col md:flex-row'>
                <div className='md:w-1/3 text-4xl text-orange-700 font-bold md:py-10 md:mt-24'>
                    <p className='p-2'>Over the Years....</p>
                </div>
                <div className='md:w-2/3 text-xl text-blue-800 dark:text-blue-200 text-left py-4 md:pl-4 md:pr-4'>
                    <div className="flex ">
                        <div className={`h-5 w-6 rounded-full mt-2 ${getColor(0)}`} />
                        <p className="ml-4">Hi, I'm Dennis Bart-Plange, and I'm deeply passionate about web development.</p>
                        </div>
                    <div className="flex py-4">
                        <div className={`h-4 w-6 rounded-full mt-2 ml-0.5 ${getColor(1)}`} />
                        <p className="ml-5">I specialize in creating innovative web solutions and staying up-to-date with new technologies.</p>
                    </div>
                    <div className="flex">
                        <div className={`h-3.5 w-7 rounded-full mt-2 ml-0.5 ${getColor(2)}`} />
                        <p className="ml-5">With a strong foundation in Computer Science from Accra Technical University, I excel in crafting efficient and visually appealing code.</p>
                    </div>
                    <div className="flex py-4">
                        <div className={`h-3 w-6 rounded-full mt-2 ml-1 ${getColor(3)}`} />
                        <p className="ml-5">I'm also committed to teaching IT to Senior High School students, inspiring the next generation of tech enthusiasts.</p>
                    </div>
                    <div className="flex">
                        <div className={`h-3 w-5 rounded-full mt-2 ml-1.5 ${getColor(4)}`} />
                        <p className="ml-6">I'm excited to continue my journey in web development, always eager to learn, grow, and create remarkable online experiences.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

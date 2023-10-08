import './skills.css';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Css, Express, Html, Java, Javascript, Nodejs, React as ReactIcon, Tailwind } from './data';

const Skills = () => {
  const imageVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
    drag: { cursor: 'grabbing' },
  };

  const tabs = [
    { label: "frontend development", icon: "🌐" },
    { label: "backend development", icon: "🛠️" },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const renderContent = (label) => {
    switch (label) {
      case "frontend development":
        return (
          <ul>
            <li>react</li>
            <li>tailwind</li>
            <li>html</li>
            <li>Javascript</li>
          </ul>
        );
      case "backend development":
        return (
          <ul>
            <li>nodejs</li>
            <li>express</li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className='md:h-screen relative md:pt-24'>

    <div className='skills container mx-auto py-12'
    >
      <p className='text-orange-600 text-3xl font-bold py-4'>My Skill Set</p>
      <div className='flex flex-col md:items-center'>
        <motion.div
          className='flex flex-col md:flex-row md:space-x-6 relative'
          drag  // Enable dragging on the card content
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // Define drag constraints
        >
          <div className='hidden md:flex flex-row  md:flex-col absolute -left-20 md:top-1/2 -top-8 transform -translate-y-1/2'>
            <motion.div
              className='w-16 h-16 object-contain m-4 py-2 ml-24'
              whileHover="hover"
              variants={imageVariants}
              drag="x" // Enable horizontal drag
              dragConstraints={{ left: 0, right: 0 }} // Define horizontal drag constraints
            >
              <img src={Css} alt="css" className='w-16 h-16 object-contain' />
            </motion.div>
            <motion.div
              className='w-16 h-16 object-contain my-4 py-2'
              whileHover="hover"
              variants={imageVariants}
              drag="x" // Enable horizontal drag
              dragConstraints={{ left: 0, right: 0 }} // Define horizontal drag constraints
            >
              <img src={Html} alt="html" className='w-16 h-16 object-contain' />
            </motion.div>
            <motion.div
              className='w-16 h-16 object-contain m-4 py-2 ml-24'
              whileHover="hover"
              variants={imageVariants}
              drag="x" // Enable horizontal drag
              dragConstraints={{ left: 0, right: 0 }} // Define horizontal drag constraints
            >
              <img src={Javascript} alt="Javascript" className='w-16 h-16 object-contain' />
            </motion.div>
          </div>

          <div className='md:hidden flex flex-row'>
            <motion.div
              className='w-16 h-16 object-contain m-4 py-2 md:ml-24'
              whileHover="hover"
              variants={imageVariants}
              drag="x" // Enable horizontal drag
              dragConstraints={{ left: 0, right: 0 }} // Define horizontal drag constraints
            >
              <img src={Css} alt="css" className='w-16 h-16 object-contain' />
            </motion.div>
            <motion.div
              className='w-16 h-16 object-contain my-4 py-2'
              whileHover="hover"
              variants={imageVariants}
              drag="x" // Enable horizontal drag
              dragConstraints={{ left: 0, right: 0 }} // Define horizontal drag constraints
            >
              <img src={Html} alt="html" className='w-16 h-16 object-contain' />
            </motion.div>
            <motion.div
              className='w-16 h-16 object-contain m-4 py-2 md:ml-24'
              whileHover="hover"
              variants={imageVariants}
              drag="x" // Enable horizontal drag
              dragConstraints={{ left: 0, right: 0 }} // Define horizontal drag constraints
            >
              <img src={Javascript} alt="Javascript" className='w-16 h-16 object-contain' />
            </motion.div>
          </div>

          <div className='h-32 md:w-96 bg-gray-500 p-4 rounded-lg text-center items-center mt-4 dark:bg-blue-950'>
            <p className='text-gray-200'>I have used these technologies more recently, some I am so familiar with, and some I studied them but do not use them often.</p>
          </div>

          <div className='hidden md:flex md:flex-col absolute -right-32 top-1/2 transform -translate-y-1/2'>
            <motion.div
              className='w-16 h-16 object-contain m-4 py-2 mr-24'
              whileHover="hover"
              variants={imageVariants}
              drag="x" // Enable horizontal drag
              dragConstraints={{ left: 0, right: 0 }} // Define horizontal drag constraints
            >
              <img src={ReactIcon} alt="React" className='w-16 h-16 object-contain' />
            </motion.div>
            <motion.div
              className='w-16 h-16 object-contain my-4 ml-16 me-2.5'
              whileHover="hover"
              variants={imageVariants}
              drag="x" // Enable horizontal drag
              dragConstraints={{ left: 0, right: 0 }} // Define horizontal drag constraints
            >
              <img src={Express} alt="Express" className='w-16 h-16 object-contain' />
            </motion.div>
            <motion.div
              className='w-16 h-16 object-contain m-4 py-2'
              whileHover="hover"
              variants={imageVariants}
              drag="x" // Enable horizontal drag
              dragConstraints={{ left: 0, right: 0 }} // Define horizontal drag constraints
            >
              <img src={Nodejs} alt="Nodejs" className='w-16 h-16 object-contain' />
            </motion.div>
          </div>

          <div className='md:hidden flex flex-row'>
            <motion.div
              className='w-16 h-16 object-contain m-4 py-2 '
              whileHover="hover"
              variants={imageVariants}
              drag="x" // Enable horizontal drag
              dragConstraints={{ left: 0, right: 0 }} // Define horizontal drag constraints
            >
              <img src={ReactIcon} alt="React" className='w-16 h-16 object-contain' />
            </motion.div>
            <motion.div
              className='w-16 h-16 object-contain my-4 '
              whileHover="hover"
              variants={imageVariants}
              drag="x" // Enable horizontal drag
              dragConstraints={{ left: 0, right: 0 }} // Define horizontal drag constraints
            >
              <img src={Express} alt="Express" className='w-16 h-16 object-contain' />
            </motion.div>
            <motion.div
              className='w-16 h-16 object-contain m-4 py-2'
              whileHover="hover"
              variants={imageVariants}
              drag="x" // Enable horizontal drag
              dragConstraints={{ left: 0, right: 0 }} // Define horizontal drag constraints
            >
              <img src={Nodejs} alt="Nodejs" className='w-16 h-16 object-contain' />
            </motion.div>
          </div>
        </motion.div>

        <div className='flex flex-row md:space-x-6 mt-4'>
          <motion.div
            className='w-16 h-16 object-contain'
            whileHover="hover"
            variants={imageVariants}
            drag="x" // Enable horizontal drag
            dragConstraints={{ left: 0, right: 0 }} // Define horizontal drag constraints
          >
            <img src={Java} alt="java" className='w-16 h-16' />
          </motion.div>
          <motion.div
            className='w-12'
            whileHover="hover"
            variants={imageVariants}
            drag="x" // Enable horizontal drag
            dragConstraints={{ left: 0, right: 0 }} // Define horizontal drag constraints
          >
            <img src={Tailwind} alt="Tailwind" className='w-16 h-16' />
          </motion.div>
        </div>
      </div>

        {/* front and backend info */}
          <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', cursor: 'pointer', paddingTop: '4rem'}}>
      <div style={{ flex: 1 }}>
        <nav>
          <ul className='text-blue-600'>
            {tabs.map((item) => (
              <li
                key={item.label}
                className={item.label === selectedTab.label ? "selected" : ""}
                onClick={() => setSelectedTab(item)}
                style={{ marginBottom: '1.5rem' }}
              >
                {`${item.icon} ${item.label}`}
                {item.label === selectedTab.label ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', color: 'orange' }}>
  <AnimatePresence mode='wait'>
    <motion.div
      key={selectedTab.label || "empty"}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {renderContent(selectedTab.label)}
    </motion.div>
  </AnimatePresence>
</div>

    </div>

  </div>
    </div>

  );
};

export default Skills;

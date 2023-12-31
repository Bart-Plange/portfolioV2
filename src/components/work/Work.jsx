import { Link } from "react-router-dom";
import { useState } from "react";
import './work.css'
import { motion, AnimatePresence } from "framer-motion";
import GitHubIcon from '../../assets/work/github.svg'; // Import your GitHub icon SVG
import RisingStar from '../../assets/work/risingstar.png'
import Bartwebz from '../../assets/work/bartwebz.png'
import Nyametease from '../../assets/work/nyametease.png'
import Managelp from '../../assets/work/manage-landing-page.png'
// import CaseStudy from '../casestudies/CaseStudy'; // Import the CaseStudy component

const items = [
  {
    id: 1,
    title: "Rising Star Montessori",
    subtitle: "visit the case to see more",
    imageUrl: RisingStar,
    githubLink: "https://github.com/Bart-Plange/rising-star-montessori",
    caseLink: "risingstar",
    siteLink: "URL_TO_SITE_1",
  },
  {
    id: 2,
    title: "Nyametease Foundation",
    subtitle: "visit the case to see more",
    imageUrl: Nyametease,
    githubLink: "https://github.com/Bart-Plange/nyametease_perfectgrace_foundation",
    caseLink: "URL_TO_CASE_2",
    siteLink: "URL_TO_SITE_2",
  },
  {
    id: 3,
    title: "Manage Landing Page",
    subtitle: "visit the case to see more",
    imageUrl: Managelp,
    githubLink: "https://github.com/Bart-Plange/manage-landing-page",
    caseLink: "URL_TO_CASE_3",
    siteLink: "URL_TO_SITE_3",
  },
  {
    id: 4,
    title: "Better Solutions Landing Page",
    subtitle: "visit the case to see more",
    imageUrl: Bartwebz,
    githubLink: "https://github.com/yourusername/yourrepository4",
    caseLink: "URL_TO_CASE_4",
    siteLink: "URL_TO_SITE_4",
  },
  // Add more items with image URLs and links
];

const Work = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleNextCard = () => {
    if (selectedId < items.length) {
      setSelectedId(selectedId + 1);
    }
  };

  const handlePrevCard = () => {
    if (selectedId > 1) {
      setSelectedId(selectedId - 1);
    }
  };

  return (
    <div id="work" className="work-container pb-16 mb-12">
      <div className="items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          {items.map((item) => (
            <motion.div
              className="grid-item dark:bg-gray-900 rounded overflow-hidden shadow-lg"
              key={item.id}
              layoutId={item.id}
              onClick={() => setSelectedId(item.id)}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <motion.h5 className="text-gray-600 text-sm">
                  {item.subtitle}
                </motion.h5>
                <motion.h2 className="dark:text-orange-500 text-xl font-semibold mt-2">
                  {item.title}
                </motion.h2>
                <a
                  href={item.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 mt-2 flex items-center"
                >
                  <img src={GitHubIcon} alt="github" className="w-5 h-5" /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="py-2 text-xl text-white bg-blue-500 md:w-1/6 text-center mt-3">
          <Link to="/portfolio" className="py-3 px-5">
            more
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {selectedId !== null && (
          <>
            <div className="overlay" />
            <motion.div
              className="selected-item fixed inset-0 flex items-center justify-center z-50"
              layoutId={selectedId}
              exit={{ opacity: 0.5 }}
            >
              <div className="bg-gray-900 rounded overflow-hidden shadow-lg max-w-lg p-4 flex flex-col items-center dark-bg-blue-950">
                <div className="flex justify-between w-full">
                  <button
                    onClick={handlePrevCard}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover-bg-blue-600"
                  >
                    Prev
                  </button>
                  <button
                    onClick={handleNextCard}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover-bg-blue-600"
                  >
                    Next
                  </button>
                </div>
                <img
                  src={items[selectedId - 1].imageUrl}
                  alt={items[selectedId - 1].title}
                  className="w-full h-64 object-contain"
                />
                <div className="p-4 text-center">
                  <motion.h5 className="text-gray-400 text-sm">
                    {items[selectedId - 1].subtitle}
                  </motion.h5>
                  <motion.h2 className="dark:text-orange-500 text-xl font-semibold mt-2">
                    {items[selectedId - 1].title}
                  </motion.h2>
                </div>  
                
                {/* items under card */}
                <div className="flex flex-row space-x-6 justify-center align-center">
                  <a
                    href={items[selectedId - 1].githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 flex flex-col"
                  >
                    <img src={GitHubIcon} alt="github" className="w-5 h-5"/> GitHub
                  </a>
                  <div className="">
                    <a
                      href={items[selectedId - 1].caseLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 mr-4"
                    >
                      Case
                    </a>
                    <a
                      href={items[selectedId - 1].siteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      Site
                    </a>
                  </div>
                  <motion.button
                    onClick={() => setSelectedId(null)}
                    className="bg-blue-500 text-white px-2  rounded hover-bg-blue-600"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
    </div>
  );
};

export default Work;

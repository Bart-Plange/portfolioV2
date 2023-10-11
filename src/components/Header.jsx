import { Link } from 'react-router-dom'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence
import Logo from "../assets/bartlogo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const resumeUrl = "/path/to/your/resume.pdf"; // Replace with your actual resume URL

   const menuItems = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
    {
      label: "Resume",
      href: resumeUrl,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    // Add more mobile menu items here
  ];
  return (
    <div className="fixed top-0 left-0 w-full border-b border-gray-300 bg-gray-200 z-50 dark:bg-darkBackground">
      <div className="container mx-auto p-4 relative">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">
              <img src={Logo} alt="Logo" className="w-12 object-contain" />
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6">
            <a
              href="#work"
              className="text-gray-600 dark:text-white hover:underline dark:hover:text-orange-500"
            >
              Work
            </a>
            <a
              href="#about"
              className="text-gray-600 dark:text-white hover:underline dark:hover:text-orange-500"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-gray-600 dark:text-white hover:underline dark:hover:text-orange-500"
            >
              Experience
            </a>
            <a
              href="/contact"
              className="text-gray-600 dark:text-white hover:underline dark:hover:text-orange-500"
            >
              Contact
            </a>
            <a
              href="./Dennis-resume-light.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-white hover:bg-gray-900 border p-1 border-gray-600"
            >
              Resume
            </a>
            {/* Add more desktop menu items here */}
          </div>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence mode="wait">
          {isMenuOpen && (
            <motion.div
              className="lg:hidden fixed inset-0 flex items-center justify-center z-50"
              key="menu"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: "0%" }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 22, stiffness: 120}}
            >
              <div className="bg-gray-900 bg-opacity-50 absolute inset-0 blur backdrop-blur-lg"></div>
              <motion.div
                className="w-1/2 bg-white p-4 rounded-lg shadow-lg z-10"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", damping: 22, stiffness: 120 }}
              >
                <button
                  onClick={closeMenu}
                  className="absolute top-8 right-6 text-gray-900 dark:text-gray-100 hover:text-gray-900 focus:outline-none"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
                {menuItems.map((item, index) => (
                  <motion.a
                    key={index}
                    onClick={closeMenu}
                    href={item.href}
                    target={item.target}
                    rel={item.rel}
                    className="block py-2 text-gray-600 hover:text-gray-900"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      damping: 22,
                      stiffness: 120,
                      delay: index * 0.5, // Adjust the delay to control stagger
                    }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;

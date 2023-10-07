import { useState } from "react";
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

  return (
    <div className="fixed top-0 left-0 w-full border-b border-gray-300 bg-white z-50 dark:bg-darkBackground">
      <div className="container mx-auto p-4 relative">
        <div className="flex justify-between items-center">
          <div>
            <img src={Logo} alt="Logo" className="w-12 object-contain" />
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
            <a href="#work" className="text-gray-600 dark:text-white hover:underline dark:hover:text-orange-500">
              Work
            </a>
            <a href="#about" className="text-gray-600 dark:text-white hover:underline dark:hover:text-orange-500">
              About
            </a>
            <a href="#experience" className="text-gray-600 dark:text-white hover:underline dark:hover:text-orange-500">
              Experience
            </a>
            <a href="#contact" className="text-gray-600 dark:text-white hover:underline dark:hover:text-orange-500">
              Contact
            </a>
            <a
              href={resumeUrl}
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
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-gray-900 bg-opacity-50 absolute inset-0 blur backdrop-blur-md"></div>
            <div className="w-1/2 bg-white p-4 rounded-lg shadow-lg z-10">
              <button
                onClick={closeMenu}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
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
              <a
                onClick={closeMenu}
                href="#work"
                className="block py-2 text-gray-600 hover:text-gray-900"
              >
                Work
              </a>
              <a
                onClick={closeMenu}
                href="#about"
                className="block py-2 text-gray-600 hover:text-gray-900"
              >
                About
              </a>
              <a
                onClick={closeMenu}
                href="#experience"
                className="block py-2 text-gray-600 hover:text-gray-900"
              >
                Experience
              </a>
              <a
                onClick={closeMenu}
                href="#contact"
                className="block py-2 text-gray-600 hover:text-gray-900"
              >
                Contact
              </a>
              <a
                onClick={closeMenu}
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-gray-600 hover:text-gray-900 border-t border-gray-600"
              >
                Resume
              </a>
              {/* Add more mobile menu items here */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
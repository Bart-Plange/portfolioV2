import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeToggle = ({ toggleDarkMode }) => {
  const [showIcon, setShowIcon] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Set initial state to true for dark mode

  useEffect(() => {
    // Delay the appearance of the dark mode icon by 2 seconds
    const timeout = setTimeout(() => {
      setShowIcon(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleToggleClick = () => {
    // Update the theme first
    setIsDarkMode(!isDarkMode);

    // Wait for a brief moment before calling toggleDarkMode
    setTimeout(() => {
      toggleDarkMode();
    }, 100);
  };

  return (
    <div className="fixed top-20 right-2 p-4 flex flex-col items-end z-50 lg:top-24 lg:right-8 md:top-16 sm:top-15 ">
      <div className="dark-mode-toggle">
        {showIcon && (
          <button
            onClick={handleToggleClick}
            className="bg-gray-800 dark:bg-gray-500 text-white rounded-full p-2 mb-2 hover:bg-gray-700 focus:outline-none"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        )}
      </div>
    </div>
  );
};

export default DarkModeToggle;

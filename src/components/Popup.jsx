import { useState } from 'react';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-gray-300 dark:bg-gray-900 p-8 rounded shadow-lg max-w-md relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-blue-500 hover:text-gray-400 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <p className="text-center text-blue-100 text-lg">
            NB: Site is still under construction
          </p>
        </div>
      </div>
    )
  );
};

export default Popup;

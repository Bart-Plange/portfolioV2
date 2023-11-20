
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const SideIcons = () => {
  return (
    <div className="container mx-auto p-4 fixed top-64 left-0 w-24 ml-6 z-10">
      <div className="flex flex-col">
        <a href="https://github.com/Bart-Plange" target="_blank" rel="noopener noreferrer">
          <FaGithub size={32} color="#333" className="mb-6 dark:bg-white rounded-full" />
        </a>
        <a href="https://www.linkedin.com/in/dennis-bart-plange-a5b0a1219/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn size={32} color="#333" className="mb-6 dark:bg-white rounded-full" />
        </a>
      </div>
    </div>
  );
};

export default SideIcons;

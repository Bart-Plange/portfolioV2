
import "./Hero.css"; // Import a CSS file for styling

const Hero = ({ isDarkMode }) => {
  return (
    <div className={`hero container mx-auto p-4 md:py-24 lg:mt-16 relative ${isDarkMode ? 'dark-glow' : ''}`}>
      <div>
        <div className="text-center text-8xl">
          <p className="pb-4">
            <span className="color-changing-letter">I </span>
            <span className="color-changing-text">B</span>
            <span className={`text-blue-500 ${isDarkMode ? 'glow' : ''}`}>uild</span>,{" "}
            <span className="color-changing-letter ">I </span>
            <span className="color-changing-text">C</span>
            <span className={`text-green-500 ${isDarkMode ? 'glow' : ''}`}>reate</span>,{" "}<br />
            <span className="color-changing-letter">I </span>
            <span className="color-changing-text">C</span>
            <span className={`text-purple-500 ${isDarkMode ? 'glow' : ''}`}>raft</span>..
          </p>
          <p className="text-2xl"> Your Ideas to The Web</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

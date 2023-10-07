import Logo from '../assets/bartlogo.svg';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const LoadingScreen = () => {
  const controls = useAnimation();

  // Define animation properties for the logo container
  const containerAnimation = {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ['20%', '20%', '50%', '50%', '20%'],
    transition: { duration: 2, loop: Infinity },
  };

  // Start the animation when the component mounts
  useEffect(() => {
    controls.start({ ...containerAnimation });
  }, [controls]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-bg-loading z-50">
      <motion.div
        className="h-16 w-16 border-t-2 border-opacity-50"
        animate={controls}
      >
        <img src={Logo} alt="logo" />
      </motion.div>
    </div>
  );
};

export default LoadingScreen;

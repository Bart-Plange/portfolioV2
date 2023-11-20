import './testimony.css';
import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

const cardData = [
  {
    name: 'Duodu Frank',
    jobTitle: 'Software Developer',
    picture: 'john-doe.jpg', // Replace with actual image source
    note: 'I have worked with Dennis for quite sometime and I can justify that, he is very hardworking and pays attention to details.',
  },
  {
    name: 'John Doe',
    jobTitle: 'Software Engineer',
    picture: 'john-doe.jpg', // Replace with actual image source
    note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'John Doe',
    jobTitle: 'Software Engineer',
    picture: 'john-doe.jpg', // Replace with actual image source
    note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Jane Smith',
    jobTitle: 'UX Designer',
    picture: 'jane-smith.jpg', // Replace with actual image source
    note: 'Pellentesque ac justo eu purus eleifend vestibulum.',
  },
  {
    name: 'Jane Smith',
    jobTitle: 'UX Designer',
    picture: 'jane-smith.jpg', // Replace with actual image source
    note: 'Pellentesque ac justo eu purus eleifend vestibulum.',
  },
  {
    name: 'Jane Smith',
    jobTitle: 'UX Designer',
    picture: 'jane-smith.jpg', // Replace with actual image source
    note: 'Pellentesque ac justo eu purus eleifend vestibulum.',
  },
  // Add more card data here
];

const Testimony = () => {
  const ref = useRef(null);
  const { scrollX, scrollXProgress } = useScroll({ container: ref });

  return (
    <div className="testimony container mx-auto py-12">
      <div className="text-center text-blue-600 ">
        <p className="text-4xl font-semibold dark:text-orange-500 pb-2">Ready!</p>
        <p className="text-lg">Discover my impact on others</p>
      </div>
      <div className="scrollable-list relative h-full w-full">
        <svg
          id="progress"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className="absolute top-4 left-4"
          style={{ transform: `rotate(${scrollX * 0.5}deg) translateZ(0)` }}
        >
          <circle cx="50" cy="50" r="30" pathLength="1" className="bg-red-500" />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="indicator"
            style={{
              pathLength: scrollXProgress,
              rotate: scrollX * 0.5 + 'deg',
            }}
          />
        </svg>
        <div className="testimony-cards-outer-container overflow-x-auto w-full max-w-screen-md">
          <div className="testimony-cards-container flex p-4" ref={ref}>
            {cardData.map((card, index) => (
              <motion.div
                key={index}
                className="card flex-shrink-0 mr-4 w-64 lg:w-72 rounded-lg bg-gray-900 shadow-md"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="card-content p-4">
                  <img
                    src={card.picture}
                    alt={card.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                  />
                  <div className="text-center">
                    <h2 className="text-xl font-semibold">{card.name}</h2>
                    <p className="text-gray-600">{card.jobTitle}</p>
                    <p className="mt-4 text-start">{card.note}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;

import { Hero, About, Work, Skills, Testimony, Cta, Popup } from '../components';
const HomePage = () => {
  return <div className='dark:bg-gray-950'>
    <div className='lg:ml-64 lg:mr-64 p-4'>
      <Popup />
      <Hero />
      <Work />
      <About />
      <Skills />
      <Testimony />
      <Cta />
      </div>
  </div>;
};

export default HomePage;

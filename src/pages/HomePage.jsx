
import { Hero, About, Work, Skills, Cta, Popup } from '../components';
const HomePage = () => {
  return <div className='dark:bg-gray-950'>
    <div className='lg:ml-64 lg:mr-64 p-4'>
      <Popup />
    </div>
    <div className='lg:ml-64 lg:mr-64 p-4'>
      <Hero />
      <Work />
      <About />
    </div>
    <div>
      <Skills />
    </div>
    <div className='lg:ml-64 lg:mr-64 p-4'>
      {/* <Testimony /> */}
      <Cta />
    </div>
  </div>;
};

export default HomePage;


import { Hero, About, Work, Skills, Testimony, Cta } from '../components';
const HomePage = () => {
  return <div className='dark:bg-darkBackground'>
    <div className='lg:ml-64 lg:mr-64 p-4'>
      <Hero />
      <Work />
      <About />
      <Skills />
      {/* <Testimony /> */}
      <Cta />
      </div>
  </div>;
};

export default HomePage;

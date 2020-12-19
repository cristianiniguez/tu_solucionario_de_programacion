import { FunctionComponent } from 'react';

import Hero from '../components/Hero';
import HomeSubjects from '../components/HomeSubjects';

const Home: FunctionComponent = () => {
  return (
    <div className='Home'>
      <Hero />
      <HomeSubjects />
    </div>
  );
};

export default Home;

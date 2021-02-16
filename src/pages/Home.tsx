import { FunctionComponent } from 'react';

import Seo from '../components/Seo';
import Hero from '../components/Hero';
import HomeSubjects from '../components/HomeSubjects';

const Home: FunctionComponent = () => {
  return (
    <>
      <Seo />
      <div className='Home'>
        <Hero />
        <HomeSubjects />
      </div>
    </>
  );
};

export default Home;

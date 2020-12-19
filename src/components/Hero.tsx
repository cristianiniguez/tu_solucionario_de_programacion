import { FunctionComponent } from 'react';

import '../styles/components/Hero.css';
import herobg from '../assets/hero.jpg';

const Hero: FunctionComponent = () => {
  return (
    <section
      className='Hero'
      style={{
        background: `linear-gradient(var(--hero-shadow), var(--hero-shadow)), url(${herobg})`,
        backgroundSize: 'cover',
      }}
    >
      <h1 className='Hero__title'>
        Bienvenido a <br />
        <code className='text--blue'>
          tu
        </code> <code className='text--yellow'>solucionario</code>{' '}
        <code className='text--red'>de</code> <code className='text--green'>programación</code>
      </h1>
    </section>
  );
};

export default Hero;

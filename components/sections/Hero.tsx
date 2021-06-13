import { FC } from 'react';

import styles from '@/styles/components/sections/Hero.module.scss';

const Hero: FC = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.hero__title}>
        Bienvenido a <br />
        <code className='text--blue'>tu</code> <code className='text--yellow'>solucionario</code>{' '}
        <code className='text--red'>de</code> <code className='text--green'>programación</code>
      </h1>
    </section>
  );
};

export default Hero;

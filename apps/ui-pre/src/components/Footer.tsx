import { FunctionComponent } from 'react';
import '../styles/components/Footer.scss';

const Footer: FunctionComponent = () => {
  return (
    <footer className='Footer'>
      ©{' '}
      <a href='https://cristianiniguez.github.io' target='_blank' rel='noreferrer'>
        Cristian iñiguez
      </a>{' '}
      - 2020
    </footer>
  );
};

export default Footer;

import { FC } from 'react';

import styles from '@/styles/components/Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      ©{' '}
      <a href='https://www.cristianiniguez.com' target='_blank' rel='noreferrer'>
        Cristian Iñiguez
      </a>{' '}
      - 2020
    </footer>
  );
};

export default Footer;

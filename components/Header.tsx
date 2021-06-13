import { FC } from 'react';
import Link from 'next/link';

import Navbar from './Navbar';
import styles from '@/styles/components/Header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <a className={styles.header__link}>
          <picture className={styles.header__image}>
            <source media='(min-width: 1024px)' srcSet='/img/logo.png' />
            <img src='/img/minilogo.png' alt='logo' />
          </picture>
        </a>
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;

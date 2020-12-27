import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import Searchbox from './Searchbox';
import Navbar from './Navbar';

import '../styles/components/Header.scss';
import minilogo from '../assets/minilogo.png';
import logo from '../assets/logo.png';

const Header: FunctionComponent = () => {
  return (
    <header className='Header'>
      <Link className='Header__link' to='/'>
        <picture className='Header__image'>
          <source media='(min-width: 1024px)' srcSet={logo} />
          <img src={minilogo} alt='logo' />
        </picture>
      </Link>
      <Searchbox />
      <Navbar />
    </header>
  );
};

export default Header;

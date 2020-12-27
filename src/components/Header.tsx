import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import Searchbox from './Searchbox';
import Navbar from './Navbar';

import '../styles/components/Header.scss';
import logo from '../assets/logo.png';

const Header: FunctionComponent = () => {
  return (
    <header className='Header'>
      <Link className='Header__link' to='/'>
        <img className='Header__image' src={logo} alt='logo' />
      </Link>
      <Searchbox />
      <Navbar />
    </header>
  );
};

export default Header;

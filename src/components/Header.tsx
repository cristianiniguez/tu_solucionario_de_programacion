import { Link } from 'react-router-dom';
import Navbar from './Navbar';

import '../styles/components/Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className='Header'>
      <Link className='Header__link' to='/'>
        <img className='Header__image' src={logo} alt='logo' />
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;

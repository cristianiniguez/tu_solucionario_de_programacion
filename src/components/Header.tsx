import { Link } from 'react-router-dom';

import '../styles/components/Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className='Header'>
      <Link className='Header__link' to='/'>
        <img className='Header__image' src={logo} alt='logo' />
      </Link>
      <nav className='Header__navbar'>
        <ul>
          <li>
            <Link to='/'>Inicio</Link>
          </li>
          <li>
            <Link to='/subjects'>Materias</Link>
          </li>
          <li>
            <Link to='/about'>Acerca de</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

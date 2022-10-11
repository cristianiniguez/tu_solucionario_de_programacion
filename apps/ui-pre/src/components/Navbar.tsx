import { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import '../styles/components/Navbar.scss';

const Navbar: FunctionComponent = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <nav className={classNames('Navbar', { 'Navbar--active': active })}>
      <ul>
        <li>
          <Link to='/' onClick={() => setActive(false)}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to='/subjects' onClick={() => setActive(false)}>
            Materias
          </Link>
        </li>
        <li>
          <Link to='/about' onClick={() => setActive(false)}>
            Acerca de
          </Link>
        </li>
      </ul>
      <button type='button' onClick={() => setActive(!active)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </nav>
  );
};

export default Navbar;

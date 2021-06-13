import { FC, useState } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import classNames from 'classnames';

import styles from '@/styles/components/Navbar.module.scss';

const NavbarLink: FC<{ href: string; onClick: () => void }> = ({ children, href, onClick }) => (
  <li>
    <Link {...{ href, onClick }}>
      <a>{children}</a>
    </Link>
  </li>
);

const Navbar: FC = () => {
  const [active, setActive] = useState(false);

  return (
    <nav className={classNames(styles.navbar, { [styles['Navbar--active']]: active })}>
      <ul>
        <NavbarLink href='/' onClick={() => setActive(false)}>
          Inicio
        </NavbarLink>
        <NavbarLink href='/subjects' onClick={() => setActive(false)}>
          Materias
        </NavbarLink>
        <NavbarLink href='/about' onClick={() => setActive(false)}>
          Acerca de
        </NavbarLink>
      </ul>
      <button type='button' onClick={() => setActive(!active)}>
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;

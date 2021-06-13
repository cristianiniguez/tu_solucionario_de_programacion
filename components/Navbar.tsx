import { FC, useState } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import classNames from 'classnames';

import styles from '@/styles/components/Navbar.module.scss';

const links = [
  { label: 'Inicio', href: '/' },
  { label: 'Materias', href: '/subjects' },
  { label: 'Acerca de', href: '/about' },
];

const Navbar: FC = () => {
  const [active, setActive] = useState(false);

  return (
    <nav className={classNames(styles.navbar, { [styles['navbar--active']]: active })}>
      <ul>
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link href={href}>
              <a onClick={() => setActive(false)}>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
      <button type='button' onClick={() => setActive(!active)}>
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;

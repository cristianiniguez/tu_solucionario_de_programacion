import { FC } from 'react';

import Header from './Header';
import Footer from './Footer';
import styles from '@/styles/components/Layout.module.scss';

const Layout: FC = ({ children }) => (
  <div className={styles.layout}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;

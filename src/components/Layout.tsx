import { FunctionComponent } from 'react';

import Header from './Header';
import Footer from './Footer';
import '../styles/components/Layout.scss';

const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className='Layout'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../styles/components/Layout.scss';

const Layout = () => {
  return (
    <div className='Layout'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

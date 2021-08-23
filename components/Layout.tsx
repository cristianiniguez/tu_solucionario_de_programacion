import { FC } from 'react';
import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';
import styles from '@/styles/components/Layout.module.scss';

type LayoutProps = {
  title?: string;
  description?: string;
};

const Layout: FC<LayoutProps> = ({ children, title, description }) => {
  const siteTitle = 'Tu Solucionario de Programación';

  return (
    <>
      <Head>
        <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
        <meta name='description' content={description || 'Posts de programación para tí'} />
        <link rel='icon' href='/img/favicon.svg' />
      </Head>
      <div className={styles.layout}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;

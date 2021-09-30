import Link from 'next/link';

import Layout from '@/components/Layout';
import styles from '../styles/pages/404.module.scss';

const NotFound = () => {
  return (
    <Layout title='404'>
      <main>
        <section className={styles.root}>
          <h2>404</h2>
          <p>Lo que estás buscando no se pudo encontrar</p>
          <Link href='/'>
            <a>Volver al principio</a>
          </Link>
        </section>
      </main>
    </Layout>
  );
};

export default NotFound;

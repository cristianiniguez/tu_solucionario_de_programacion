import Link from 'next/link';
import Layout from '../components/Layout';

const Home = () => (
  <Layout>
    <main>
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </p>
    </main>
  </Layout>
);

export default Home;

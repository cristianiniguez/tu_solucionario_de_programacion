import { FC } from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';

import Layout from '@/components/Layout';
import Hero from '@/components/sections/Hero';
import Subjects from '@/components/sections/Subjects';
import { TSubject } from '@/types/common';
import urlFor from '@/utils/urlFor';

export const getServerSideProps: GetServerSideProps = async () => {
  const url = urlFor('/api/subject');

  try {
    const response = await axios.get(url);

    return {
      props: {
        subjects: response.data.subjects,
        error: null,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        subjects: null,
        error: error.message,
      },
    };
  }
};

type HomeProps = {
  subjects?: TSubject[];
  error?: string;
};

const Home: FC<HomeProps> = ({ subjects, error }) => {
  return (
    <Layout>
      <main>
        <Hero />
        {error ? <p>Hubo un error</p> : <Subjects subjects={subjects} />}
      </main>
    </Layout>
  );
};

export default Home;

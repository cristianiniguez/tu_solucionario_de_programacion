import { FC } from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';

import Layout from '@/components/Layout';
import SubjectHero from '@/components/sections/SubjectHero';

import getHostURL from '@/utils/getHostURL';
import { TSubject } from '@/types/common';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.params;
  const url = getHostURL(`/api/subject/${slug}`);

  try {
    const response = await axios.get(url);

    return {
      props: {
        subject: response.data.subject,
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

type SubjectPageProps = {
  subject?: TSubject;
  error?: string;
};

const SubjectPage: FC<SubjectPageProps> = ({ subject, error }) => {
  return (
    <Layout>
      <main>
        {error || !subject ? null : (
          <>
            <SubjectHero {...subject} />
          </>
        )}
      </main>
    </Layout>
  );
};

export default SubjectPage;

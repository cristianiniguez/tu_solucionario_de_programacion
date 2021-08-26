import { FC } from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';

import Layout from '@/components/Layout';
import SubjectHero from '@/components/sections/SubjectHero';
import SubjectPosts from '@/components/sections/SubjectPosts';

import urlFor from '@/utils/urlFor';
import { TPost, TSubject } from '@/types/common';
import SubjectContext from '@/context/SubjectContext';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.params;

  try {
    const {
      data: { subject },
    } = await axios.get(urlFor(`/api/subject/${slug}`));

    const {
      data: { posts },
    } = await axios.get(urlFor(`/api/post?subject=${slug}`));

    return {
      props: {
        subject,
        posts,
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
  posts?: TPost[];
  error?: string;
};

const SubjectPage: FC<SubjectPageProps> = ({ subject, posts, error }) => {
  return (
    <Layout>
      <main>
        {error || !subject ? null : (
          <SubjectContext.Provider value={subject}>
            <SubjectHero {...subject} />
            <SubjectPosts posts={posts} />
          </SubjectContext.Provider>
        )}
      </main>
    </Layout>
  );
};

export default SubjectPage;

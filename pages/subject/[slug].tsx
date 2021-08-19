import { FC } from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';

import Layout from '@/components/Layout';
import SubjectHero from '@/components/sections/SubjectHero';
import SubjectPosts from '@/components/sections/SubjectPosts';

import getHostURL from '@/utils/getHostURL';
import { TPost, TSubject } from '@/types/common';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.params;

  try {
    const {
      data: { subject },
    } = await axios.get(getHostURL(`/api/subject/${slug}`));

    const {
      data: { posts },
    } = await axios.get(getHostURL(`/api/post?db=${subject.postsDb}`));

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
          <>
            <SubjectHero {...subject} />
            <SubjectPosts posts={posts} />
          </>
        )}
      </main>
    </Layout>
  );
};

export default SubjectPage;

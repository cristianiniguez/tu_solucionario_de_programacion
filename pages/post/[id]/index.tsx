import { FC } from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';

import Layout from '@/components/Layout';
import PostHero from '@/components/sections/PostHero';
import PostPapers from '@/components/sections/PostPapers';
import PostContext from '@/context/PostContext';

import urlFor from '@/utils/urlFor';
import { TPaper, TPost } from '@/types/common';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.params;

  try {
    const {
      data: { post },
    } = await axios.get(urlFor(`/api/post/${id}`));

    const {
      data: { papers },
    } = await axios.get(urlFor(`/api/paper?db=${post.papersDb}`));

    return {
      props: { post, papers },
    };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
};

type PostPageProps = {
  post: TPost;
  papers: TPaper[];
};

const PostPage: FC<PostPageProps> = ({ post, papers }) => {
  return (
    <Layout>
      <main>
        <PostContext.Provider value={post}>
          <PostHero {...post} />
          <PostPapers papers={papers} />
        </PostContext.Provider>
      </main>
    </Layout>
  );
};

export default PostPage;

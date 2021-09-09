import { FC } from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';

import Layout from '@/components/Layout';
import PostHero from '@/components/sections/PostHero';
import PostPapers from '@/components/sections/PostPapers';

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
      props: {
        post,
        papers,
        error: null,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        post: null,
        papers: null,
        error: error.message,
      },
    };
  }
};

type PostPageProps = {
  post?: TPost;
  papers?: TPaper[];
  error?: string;
};

const PostPage: FC<PostPageProps> = ({ post, papers, error }) => {
  return (
    <Layout>
      <main>
        {error || !post ? null : (
          <>
            <PostHero {...post} />
            <PostPapers papers={papers} />
          </>
        )}
      </main>
    </Layout>
  );
};

export default PostPage;

import { FC } from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';

import Layout from '@/components/Layout';
import PostHero from '@/components/sections/PostHero';
import urlFor from '@/utils/urlFor';
import { TPost } from '@/types/common';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.params;

  try {
    const {
      data: { post },
    } = await axios.get(urlFor(`/api/post/${id}`));

    return {
      props: {
        post,
        error: null,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        post: null,
        error: error.message,
      },
    };
  }
};

type PostPageProps = {
  post?: TPost;
  error?: string;
};

const PostPage: FC<PostPageProps> = ({ post, error }) => {
  return (
    <Layout>
      <main>{error || !post ? null : <PostHero {...post} />}</main>
    </Layout>
  );
};

export default PostPage;

import { FC } from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';

import Layout from '@/components/Layout';
import PaperView from '@/components/sections/PaperView';

import urlFor from '@/utils/urlFor';
import { TPaper, TPaperWithContent, TPost } from '@/types/common';
import PaperContext from '@/context/PaperContext';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id: postId, paperId } = ctx.params;

  try {
    const {
      data: { post },
    } = await axios.get(urlFor(`/api/post/${postId}`));

    const {
      data: { papers },
    } = await axios.get(urlFor(`/api/paper?db=${post.papersDb}`));

    const {
      data: { paper },
    } = await axios.get(urlFor(`/api/paper/${paperId}?db=${post.papersDb}`));

    return {
      props: { post, papers, paper },
    };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
};

type PaperPageProps = {
  post: TPost;
  papers: TPaper[];
  paper: TPaperWithContent;
};

const PaperPage: FC<PaperPageProps> = ({ post, papers, paper }) => {
  return (
    <Layout>
      <main>
        <PaperContext.Provider value={{ post, papers, paper }}>
          <PaperView />
        </PaperContext.Provider>
      </main>
    </Layout>
  );
};

export default PaperPage;

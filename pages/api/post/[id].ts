import { NextApiHandler } from 'next';

import PostsService from '@/services/posts.service';

const service = new PostsService();

const postApiHandler: NextApiHandler = async (req, res) => {
  const { id } = req.query;

  try {
    if (req.method === 'GET') {
      const post = await service.getById(id as string);

      if (!post) {
        return res.status(404).send({
          message: 'Post not found',
        });
      }

      res.status(200).json({
        message: 'Subject listed',
        post,
      });
    } else {
      res.status(405).json({
        message: 'Method Not Allowed',
      });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

export default postApiHandler;

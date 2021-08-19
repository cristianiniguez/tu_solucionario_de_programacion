import { NextApiHandler } from 'next';

import PostsService from '@/services/posts.service';

const postsApiHandler: NextApiHandler = async (req, res) => {
  try {
    if (req.method === 'GET') {
      const { db } = req.query;

      if (!db) {
        return res.status(400).json({
          message: 'Missing required query parameter: db',
        });
      }

      const service = new PostsService(db as string);
      const posts = await service.getAll();
      res.status(200).json({
        message: 'Posts listed',
        posts,
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

export default postsApiHandler;

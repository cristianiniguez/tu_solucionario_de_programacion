import { NextApiHandler } from 'next';

import PostsService from '@/services/posts.service';

const postsApiHandler: NextApiHandler = async (req, res) => {
  try {
    if (req.method === 'GET') {
      const { subject } = req.query;
      const service = new PostsService();
      const posts = await (subject ? service.getBySubject(subject as string) : service.getAll());
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

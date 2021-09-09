import { NextApiHandler } from 'next';

import PapersService from '@/services/papers.service';

const papersApiHandler: NextApiHandler = async (req, res) => {
  try {
    if (req.method === 'GET') {
      const { db } = req.query;
      if (!db) {
        return res.status(400).json({
          message: "parameter 'db' is required",
        });
      }

      const service = new PapersService(db as string);
      const papers = await service.getAll();
      res.status(200).json({
        message: 'Papers listed',
        papers,
      });
    } else {
      res.status(405).json({
        message: 'Method not allowed',
      });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

export default papersApiHandler;

import { NextApiHandler } from 'next';

import PapersService from '@/services/papers.service';

const paperApiHandler: NextApiHandler = async (req, res) => {
  try {
    if (req.method === 'GET') {
      const { id, db } = req.query;
      if (!db) {
        return res.status(400).json({
          message: "parameter 'db' is required",
        });
      }

      const service = new PapersService(db as string);
      const paper = await service.getById(id as string);

      res.status(200).json({
        message: 'Paper listed',
        paper,
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

export default paperApiHandler;

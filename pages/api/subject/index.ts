import { NextApiHandler } from 'next';

import SubjectsService from '@/services/subjects.service';

const service = new SubjectsService();

const subjectsApiHandler: NextApiHandler = async (req, res) => {
  try {
    if (req.method === 'GET') {
      const subjects = await service.getAll();
      res.status(200).json({
        message: 'Subjects listed',
        subjects,
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

export default subjectsApiHandler;

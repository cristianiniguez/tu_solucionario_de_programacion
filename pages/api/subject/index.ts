import { NextApiHandler } from 'next';

import { TRouter } from '@/types/backend';
import SubjectsService from '@/services/subjects.service';

const service = new SubjectsService();

const subjectsRouter: TRouter = {
  GET: async (req, res) => {
    const subjects = await service.getAll();
    res.status(200).json({
      message: 'Subjects listed',
      subjects,
    });
  },
};

const subjectsApiHandler: NextApiHandler = async (req, res) => {
  try {
    subjectsRouter[req.method]
      ? subjectsRouter[req.method](req, res)
      : res.status(405).json({ message: 'Method not allowed' });
  } catch (error) {}
};

export default subjectsApiHandler;

import { NextApiHandler } from 'next';

import SubjectsService from '@/services/subjects.service';

const service = new SubjectsService();

const subjectApiHandler: NextApiHandler = async (req, res) => {
  const { slug } = req.query;

  try {
    if (req.method === 'GET') {
      const subject = await service.getBySlug(slug as string);

      if (!subject) {
        return res.status(404).send({
          message: 'Subject not found',
        });
      }

      res.status(200).json({
        message: 'Subject listed',
        subject,
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

export default subjectApiHandler;

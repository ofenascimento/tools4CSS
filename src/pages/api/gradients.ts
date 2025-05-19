import type { NextApiRequest, NextApiResponse } from 'next';
import { getGradients, createGradient } from '../../controllers/gradientController';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return getGradients(req, res);
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}

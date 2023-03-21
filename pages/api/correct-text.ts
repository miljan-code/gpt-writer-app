import { NextApiRequest, NextApiResponse } from 'next';
import { trimNewLines } from '@/utils/helpers';
import query from '@/utils/query';

export type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  response: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt } = req.body;

  if (!prompt) {
    res.status(400).json({ response: 'Please add some text...' });
  }

  const question = `Rewrite quoted text grammarly correct "${prompt}"`;
  const answer = (await query(question)) || 'Something went wrong...';
  const response = trimNewLines(answer);

  res.status(200).json({ response });
}

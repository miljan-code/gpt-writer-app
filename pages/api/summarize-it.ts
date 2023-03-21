import { trimNewLines } from '@/utils/helpers';
import query from '@/utils/query';
import { NextApiRequest, NextApiResponse } from 'next';

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

  // prompt transformation
  const question = `Summarize quoted text "${prompt}"`;

  const answer = (await query(question)) || '';
  const response = trimNewLines(answer).replaceAll('"', '');

  res.status(200).json({ response });
}

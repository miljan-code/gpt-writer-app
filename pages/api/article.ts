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

  // NOTE: its three paragraphs long because netlify and vercel will timeout after 10s
  const question = `Write an three paragraphs long article about "${prompt}"`;
  const answer = (await query(question)) || 'Something went wrong...';

  const response = trimNewLines(answer);

  // FIXME: vercel timeouts after 10s on hobby plan so try to switch to edge functions

  res.status(200).json({ response });
}

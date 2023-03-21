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
  const question = `How many grammar mistakes exist in the quoted text "${prompt}"
  
  Respond in JSON format: {"Errors": *number of mistakes*, "Words": [*words that contains mistake*]}`;

  const answer = await query(question);

  const response = JSON.parse(
    answer?.replaceAll('\n', '').trim().toLowerCase()!
  );

  res.status(200).json({ response });
}

import openai from './openai';

const query = async (prompt: string) => {
  const res = openai
    .createCompletion({
      prompt,
      model: 'text-davinci-003',
      temperature: 1,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then(res => res.data.choices[0].text)
    .catch(_ => 'Sorry, the service is currently unavailable!');

  return res;
};

export default query;

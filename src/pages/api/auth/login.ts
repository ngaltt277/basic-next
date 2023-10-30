import { NextApiRequest, NextApiResponse } from 'next';

export default function login(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = JSON.parse(req.body);

  if (req.method === 'POST') {
    if (username === 'nga' && password === '12345678') {
      res.status(200).send({ accessToken: 'sdjskdjsd'});
    } else {
      res.status(404).send({ error: 'Invalid username or password' });
    }
  } else {
    res.status(500).send({ error: 'Internal Server Error' });
  }
}

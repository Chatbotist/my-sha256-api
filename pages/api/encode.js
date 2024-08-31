import { encodeToSha256 } from '../../lib/crypto';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;
    const hash = encodeToSha256(text);
    res.status(200).json({ hash });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

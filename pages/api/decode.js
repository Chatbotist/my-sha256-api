import { decodeFromSha256 } from '../../lib/crypto';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { hash } = req.body;
    try {
      const text = decodeFromSha256(hash);
      res.status(200).json({ text });
    } catch (err) {
      res.status(400).json({ error: 'Invalid hash' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

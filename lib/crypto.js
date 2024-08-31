import crypto from 'crypto';

export function encodeToSha256(text) {
  return crypto.createHash('sha256').update(text).digest('hex');
}

export function decodeFromSha256(hash) {
  const buf = Buffer.from(hash, 'hex');
  return buf.toString('utf8');
}

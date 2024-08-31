import crypto from 'crypto';

export function encodeToSha256(text) {
  return crypto.createHash('sha256').update(text).digest('hex');
}

export function decodeFromSha256(hash) {
  return Object.keys(crypto.createHash('sha256').update(hash, 'hex').digest('latin1'))[0];
}

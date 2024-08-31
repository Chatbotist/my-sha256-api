import crypto from 'crypto';

export function encodeToSha256(text) {
  return crypto.createHash('sha256').update(text).digest('hex');
}

export function decodeFromSha256(hash) {
  try {
    return crypto.createHash('sha256').update(hash, 'hex').digest('utf8');
  } catch (err) {
    console.error('Error decoding SHA256 hash:', err);
    throw err;
  }
}


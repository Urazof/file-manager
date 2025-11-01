import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';

/**
 * Calculate SHA-256 hash of a file using streams
 */
export async function calculateHash(filePath) {
  return new Promise((resolve, reject) => {
    const hash = createHash('sha256');
    const readStream = createReadStream(filePath);

    readStream.on('data', (chunk) => {
      hash.update(chunk);
    });

    readStream.on('end', () => {
      console.log(hash.digest('hex'));
      resolve();
    });

    readStream.on('error', () => {
      reject(new Error('Operation failed'));
    });
  });
}


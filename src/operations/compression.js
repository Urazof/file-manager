import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliCompress, createBrotliDecompress } from 'node:zlib';
import { pipeline } from 'node:stream/promises';

/**
 * Compress file using Brotli algorithm with streams
 */
export async function compressFile(source, destination) {
  await pipeline(
    createReadStream(source),
    createBrotliCompress(),
    createWriteStream(destination)
  );
}

/**
 * Decompress file using Brotli algorithm with streams
 */
export async function decompressFile(source, destination) {
  await pipeline(
    createReadStream(source),
    createBrotliDecompress(),
    createWriteStream(destination)
  );
}


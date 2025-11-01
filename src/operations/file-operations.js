import { stdout } from 'node:process';
import { createReadStream, createWriteStream } from 'node:fs';
import { writeFile, mkdir, rename, rm, stat } from 'node:fs/promises';
import { parse, dirname, join } from 'node:path';
import { pipeline } from 'node:stream/promises';

/**
 * Read and display file content using streams
 */
export async function catFile(filePath) {
  return new Promise((resolve, reject) => {
    const readStream = createReadStream(filePath, { encoding: 'utf8' });

    readStream.on('data', (chunk) => {
      stdout.write(chunk);
    });

    readStream.on('end', () => {
      console.log(); // New line after content
      resolve();
    });

    readStream.on('error', () => {
      reject(new Error('Operation failed'));
    });
  });
}

/**
 * Create an empty file
 */
export async function addFile(filePath) {
  await writeFile(filePath, '', { flag: 'wx' }); // wx = create, fail if exists
}

/**
 * Create a new directory
 */
export async function makeDirectory(dirPath) {
  await mkdir(dirPath);
}

/**
 * Rename a file
 */
export async function renameFile(oldPath, newName) {
  const dir = dirname(oldPath);
  const newFilePath = join(dir, newName);
  await rename(oldPath, newFilePath);
}

/**
 * Copy file using streams
 */
export async function copyFile(source, destDir) {
  // Check if destination is a directory
  const destStat = await stat(destDir);
  if (!destStat.isDirectory()) {
    throw new Error('Destination must be a directory');
  }

  const fileName = parse(source).base;
  const destination = join(destDir, fileName);

  await pipeline(
    createReadStream(source),
    createWriteStream(destination)
  );
}

/**
 * Move file (copy + delete original)
 */
export async function moveFile(source, destDir) {
  await copyFile(source, destDir);
  await rm(source);
}

/**
 * Delete a file
 */
export async function removeFile(filePath) {
  await rm(filePath);
}


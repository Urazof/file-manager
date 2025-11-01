import { cwd, chdir } from 'node:process';
import { resolve } from 'node:path';
import { readdir } from 'node:fs/promises';

/**
 * Go up one directory level
 */
export async function goUp() {
  const current = cwd();
  const parent = resolve(current, '..');

  // Check if we're at the root
  if (parent !== current) {
    chdir(parent);
  }
}

/**
 * Change to specified directory
 */
export async function changeDirectory(targetPath) {
  chdir(targetPath);
}

/**
 * List all files and directories in current directory
 */
export async function listDirectory() {
  const items = await readdir(cwd(), { withFileTypes: true });

  const folders = [];
  const files = [];

  for (const item of items) {
    if (item.isDirectory()) {
      folders.push({ name: item.name, type: 'directory' });
    } else {
      files.push({ name: item.name, type: 'file' });
    }
  }

  // Sort alphabetically
  folders.sort((a, b) => a.name.localeCompare(b.name));
  files.sort((a, b) => a.name.localeCompare(b.name));

  // Print table
  console.table([...folders, ...files]);
}


import { cwd } from 'node:process';
import { isAbsolute, join, resolve } from 'node:path';

/**
 * Resolve path to absolute
 */
export function resolveAbsolutePath(path) {
  return isAbsolute(path) ? path : join(cwd(), path);
}

/**
 * Resolve path relative to current working directory
 */
export function resolveRelativePath(path) {
  return isAbsolute(path) ? path : resolve(cwd(), path);
}


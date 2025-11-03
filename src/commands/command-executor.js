import { exit } from 'node:process';
import { goUp, changeDirectory, listDirectory } from '../operations/navigation.js';
import { catFile, addFile, makeDirectory, renameFile, copyFile, moveFile, removeFile } from '../operations/file-operations.js';
import { getEOL, getCPUs, getHomeDir, getUsername, getArchitecture } from '../operations/os-info.js';
import { calculateHash } from '../operations/hash.js';
import { compressFile, decompressFile } from '../operations/compression.js';
import { resolveAbsolutePath } from '../utils/path-resolver.js';
import { showGoodbyeMessage, showInvalidInputMessage, showOperationFailedMessage } from '../utils/messages.js';

/**
 * Execute a command based on user input
 */
export async function executeCommand(input, username) {
  const trimmedInput = input.trim();

  if (!trimmedInput) {
    return;
  }

  if (trimmedInput === '.exit') {
    showGoodbyeMessage(username);
    exit(0);
  }

  const parts = trimmedInput.split(' ');
  const command = parts[0];

  try {
    switch (command) {
      case 'up':
        await goUp();
        break;

      case 'cd':
        if (parts.length < 2) {
          throw new Error('Invalid input');
        }
        await changeDirectory(resolveAbsolutePath(parts[1]));
        break;

      case 'ls':
        await listDirectory();
        break;

      case 'cat':
        if (parts.length < 2) {
          throw new Error('Invalid input');
        }
        await catFile(resolveAbsolutePath(parts[1]));
        break;

      case 'add':
        if (parts.length < 2) {
          throw new Error('Invalid input');
        }
        await addFile(resolveAbsolutePath(parts[1]));
        break;

      case 'mkdir':
        if (parts.length < 2) {
          throw new Error('Invalid input');
        }
        await makeDirectory(resolveAbsolutePath(parts[1]));
        break;

      case 'rn':
        if (parts.length < 3) {
          throw new Error('Invalid input');
        }
        await renameFile(resolveAbsolutePath(parts[1]), parts[2]);
        break;

      case 'cp':
        if (parts.length < 3) {
          throw new Error('Invalid input');
        }
        await copyFile(resolveAbsolutePath(parts[1]), resolveAbsolutePath(parts[2]));
        break;

      case 'mv':
        if (parts.length < 3) {
          throw new Error('Invalid input');
        }
        await moveFile(resolveAbsolutePath(parts[1]), resolveAbsolutePath(parts[2]));
        break;

      case 'rm':
        if (parts.length < 2) {
          throw new Error('Invalid input');
        }
        await removeFile(resolveAbsolutePath(parts[1]));
        break;

      case 'os':
        if (parts.length < 2) {
          throw new Error('Invalid input');
        }
        await handleOsCommand(parts[1]);
        break;

      case 'hash':
        if (parts.length < 2) {
          throw new Error('Invalid input');
        }
        await calculateHash(resolveAbsolutePath(parts[1]));
        break;

      case 'compress':
        if (parts.length < 3) {
          throw new Error('Invalid input');
        }
        await compressFile(resolveAbsolutePath(parts[1]), resolveAbsolutePath(parts[2]));
        break;

      case 'decompress':
        if (parts.length < 3) {
          throw new Error('Invalid input');
        }
        await decompressFile(resolveAbsolutePath(parts[1]), resolveAbsolutePath(parts[2]));
        break;

      default:
        throw new Error('Invalid input');
    }
  } catch (error) {
    if (error.message === 'Invalid input') {
      showInvalidInputMessage();
    } else {
      showOperationFailedMessage();
    }
  }
}

/**
 * Handle OS-specific commands
 */
async function handleOsCommand(argument) {
  switch (argument) {
    case '--EOL':
      getEOL();
      break;
    case '--cpus':
      getCPUs();
      break;
    case '--homedir':
      getHomeDir();
      break;
    case '--username':
      getUsername();
      break;
    case '--architecture':
      getArchitecture();
      break;
    default:
      throw new Error('Invalid input');
  }
}


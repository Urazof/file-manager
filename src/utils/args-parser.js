/**
 * Parse command line arguments
 */
export function parseArguments(args) {
  const parsed = {
    username: 'User'
  };

  for (const arg of args) {
    if (arg.startsWith('--username=')) {
      parsed.username = arg.split('=')[1];
    }
  }

  return parsed;
}


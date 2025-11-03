import { stdin, stdout, exit, chdir } from 'node:process';
import { homedir } from 'node:os';
import { createInterface } from 'node:readline';
import { parseArguments } from './src/utils/args-parser.js';
import { showWelcomeMessage, showCurrentDirectory, showGoodbyeMessage } from './src/utils/messages.js';
import { executeCommand } from './src/commands/command-executor.js';

// Parse command line arguments
const args = process.argv.slice(2);
const { username } = parseArguments(args);

// Set initial working directory to user's home
try {
  chdir(homedir());
} catch (error) {
  console.error('Failed to set home directory');
  exit(1);
}

// Show welcome message and current directory
showWelcomeMessage(username);
showCurrentDirectory();

// Create readline interface
const rl = createInterface({
  input: stdin,
  output: stdout,
  prompt: ''
});

// Handle user input
rl.on('line', async (input) => {
  await executeCommand(input, username);
  showCurrentDirectory();
});

// Handle Ctrl+C and .exit
rl.on('close', () => {
  showGoodbyeMessage(username);
  exit(0);
});

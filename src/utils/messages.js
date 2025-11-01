import { cwd } from 'node:process';

/**
 * Display current working directory
 */
export function showCurrentDirectory() {
  console.log(`You are currently in ${cwd()}`);
}

/**
 * Display welcome message
 */
export function showWelcomeMessage(username) {
  console.log(`Welcome to the File Manager, ${username}!`);
}

/**
 * Display goodbye message
 */
export function showGoodbyeMessage(username) {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
}

/**
 * Display invalid input message
 */
export function showInvalidInputMessage() {
  console.log('Invalid input');
}

/**
 * Display operation failed message
 */
export function showOperationFailedMessage() {
  console.log('Operation failed');
}


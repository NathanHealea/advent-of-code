import fs from 'fs';
import path from 'path';
export { fileURLToPath } from 'url';

/**
 * Gets the contents of the AoC problem input.txt
 * @param {string} cwd path of the current working directory
 * @returns {string[]} file contents of the AoC problem input.txt
 */
export const getAocInput = (cwd = '') => {
  const __dirname = path.dirname(cwd);
  return fs
    .readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8')
    .trim()
    .split('\n')
    .map((line) => line.split(' ').map(Number));
};

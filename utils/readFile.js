import fs from 'fs';
import path from 'path';

/**
 * Gets the contents of the AoC problem input.txt
 * @param {string} cwd path of the current working directory
 * @returns {string[]} file contents of the AoC problem input.txt
 */
export const getAocInput = (cwd = '') => {
  const filename = 'input.txt';
  const filePath = path.resolve(cwd || path.dirname, filename);

  if (!fs.existsSync(filePath)) {
    console.error(`File ${filename} does not exists. \n${filePath}`);
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');

  return fileContents.split(/\r\n/);
};

/**
 * Get the current working direction path.
 * @returns {string} path to the current working directory.
 */
export const getCwd = () => {
  return path.resolve(process.cwd());
};

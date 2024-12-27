import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

/**
 * Main program
 */
function main() {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const input = fs
    .readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8')
    .trim();

  partOne(input);
  partTwo(input);
}

/**
 * Solution for AOC 2024, Day 3, Part 1
 * @param {string} input puzzle input file content.
 */
function partOne(input = '') {
  const MUL_REGEX = /mul\(\d{1,3},\d{1,3}\)/g;
  const DIGITS_REGEX = /\d{1,3}/g;

  const matches = [...input.match(MUL_REGEX)];

  const values = matches.map((match) => {
    return match.match(DIGITS_REGEX).map(Number);
  });

  const total = values.reduce((pv, cv) => {
    return pv + cv.reduce((prev, curr) => prev * curr, 1);
  }, 0);

  console.log(total);
}

/**
 * Solution for AOC 2024, Day 3, Part 2
 * @param {number[]} input puzzle input file content.
 */
function partTwo(input = []) {}

/**
 *  main program
 */
main();

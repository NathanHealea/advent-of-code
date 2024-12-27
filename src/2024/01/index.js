import { getAocInput, fileURLToPath } from '../../utils/readFile.js';

/**
 * Main program
 */
function main() {
  const input = getAocInput(fileURLToPath(import.meta.url));

  partOne(input);
  partTwo(input);
}

/**
 * Solution for AOC 2024, Day 1, Part 1
 * @param {number[]} input puzzle input file content.
 */
function partOne(input = []) {
  const leftList = [];
  const rightList = [];

  input.forEach((values) => {
    const leftIndex = 0;
    const rightIndex = 3;

    leftList.push(values[leftIndex]);
    rightList.push(values[rightIndex]);
  });

  const sortedLeftList = leftList.sort();
  const sortRightList = rightList.sort();

  let result = 0;

  for (
    let indx = 0;
    indx < sortedLeftList.length && indx < sortRightList.length;
    indx++
  ) {
    result += Math.abs(sortedLeftList[indx] - sortRightList[indx]);
  }

  console.log(result);
}

/**
 * Solution for AOC 2024, Day 1, Part 2
 * @param {number[]} input puzzle input file content.
 */
function partTwo(input = []) {
  const leftList = [];
  const rightList = [];

  input.forEach((values) => {
    const leftIndex = 0;
    const rightIndex = 3;

    leftList.push(values[leftIndex]);
    rightList.push(values[rightIndex]);
  });

  const sortedLeftList = leftList.sort();
  const sortRightList = rightList.sort();

  let result = 0;

  const getCount = (value, list = []) =>
    list.filter((item) => item === value).length;

  for (let indx = 0; indx < sortedLeftList.length; indx++) {
    const value = sortedLeftList[indx];
    result += sortedLeftList[indx] * getCount(value, rightList);
  }

  console.log(result);
}

/**
 * Run main program
 */
main();

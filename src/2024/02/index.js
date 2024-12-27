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
 * Determines if a report is safe.
 * @param {number[]} values an array of numbers.
 * @returns True: report is safe; False: the report is not safe
 */
function isReportSafe(values = []) {
  // Default that all reports are safe;
  let isSafe = true;

  // Constants
  const MIN_LEVEL_DIFFERENTIAL = 1;
  const MAX_LEVEL_DIFFERENTIAL = 3;
  const INCREASING = 0;
  const DECREASING = 1;

  // Calculate values
  let indx = 0;
  let v1 = values[indx];
  let v2 = values[indx + 1];
  let distance = v1 - v2;
  let absoluteDistance = Math.abs(distance);
  const direction = distance > 0 ? DECREASING : INCREASING;

  do {
    // Check the difference tolerance.
    if (
      absoluteDistance < MIN_LEVEL_DIFFERENTIAL ||
      MAX_LEVEL_DIFFERENTIAL < absoluteDistance
    ) {
      isSafe = false;
      break;
    }

    // Check Direction Change
    if (direction == INCREASING && distance > 0) {
      isSafe = false;
      break;
    } else if (direction == DECREASING && distance < 0) {
      isSafe = false;
      break;
    }

    // Update Values
    indx++;
    v1 = values[indx];
    v2 = values[indx + 1];
    distance = v1 - v2;
    absoluteDistance = Math.abs(distance);
  } while (indx < values.length - 1);

  return isSafe;
}

/**
 * Solution for AOC 2024, Day 1, Part 1
 * @param {number[]} input puzzle input file content.
 */
function partOne(input = []) {
  let result = 0;

  input.forEach((values, index, array) => {
    if (isReportSafe(values)) {
      result++;
    }
  });
  console.log(result);
}

/**
 * Determines if a report is safe with consideration of a Dampener
 * @param {number[]} values an array of numbers.
 * @returns True: report is safe; False: the report is not safe
 */
function isReportSafeWithDampener(values = []) {
  if (isReportSafe(values)) {
    return true;
  }

  for (let indx = 0; indx < values.length; indx++) {
    let temp = values.filter((_, index) => index !== indx);

    if (isReportSafe(temp)) {
      return true;
    }
  }

  return false;
}

/**
 * Solution for AOC 2024, Day 1, Part 2
 * @param {number[]} input puzzle input file content.
 */
function partTwo(input = []) {
  let result = 0;
  input.forEach((values) => {
    if (isReportSafeWithDampener(values)) {
      result++;
    }
  });

  console.log(result);
}

/**
 * Ru]
 *  main program
 */
main();

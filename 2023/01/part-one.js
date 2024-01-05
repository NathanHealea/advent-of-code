import { getAocInput, getCwd } from '../../utils/readFile.js';
const calibrationLines = getAocInput(getCwd());

let calibrationValue = 0;

calibrationLines.forEach((line) => {
  const calibrationDigits = line.replace(/\D/g, '');

  if (calibrationDigits.length == 1) {
    calibrationValue =
      calibrationValue +
      (parseInt(calibrationDigits[0]) * 10 + parseInt(calibrationDigits[0]));
  } else {
    calibrationValue =
      calibrationValue +
      (parseInt(calibrationDigits[0]) * 10 +
        parseInt(calibrationDigits[calibrationDigits.length - 1]));
  }
});

console.log(`${calibrationValue}`);


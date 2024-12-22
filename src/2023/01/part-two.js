
  const numberDictionary  = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let calibrationValue = 0;

  const numberDictionaryKeys = Object.keys(numberDictionary);
  const calibrationLines= data.split(/\n/);

  calibrationLines.forEach((calibrationLine) => {
    let calibrationNumbers= [];

    // Loop thought every character in the calibration
    for (var currentCalibrationLineIndex in calibrationLine.split('')) {
      const currentCalibrationChar =
        calibrationLine[currentCalibrationLineIndex];

      const currentCalibrationCharAsNumber = parseInt(currentCalibrationChar);

      // Initialize new string to be used in checking number that are spelt out in the calibration line.
      let calibrationNumberAsString = currentCalibrationChar;

      // If the current character is a number, add it the array on numbers in the calibration.
      if (!isNaN(currentCalibrationCharAsNumber)) {
        calibrationNumbers.push(parseInt(currentCalibrationChar));
      } else if (
        // If the current character matches the first letter of known spelt numbers, then attempt to find matching number.
        numberDictionaryKeys.find(
          (numberDictionaryKey) =>
            numberDictionaryKey[0] == calibrationNumberAsString
        ) !== undefined
      ) {
        let numberDictionaryKeyFiltered = numberDictionaryKeys.filter(
          (numberDictionaryKey) =>
            numberDictionaryKey[0] == calibrationNumberAsString
        );

        let nextCalibrationCharIndex =
          parseInt(currentCalibrationLineIndex) + 1;

        /**
         * Do While
         * filtered number dictionary keys are greater than one
         * AND next calibration character Index does not match the length of the calibration code.
         */
        do {
          calibrationNumberAsString +=
            calibrationLine[nextCalibrationCharIndex];

          numberDictionaryKeyFiltered = numberDictionaryKeyFiltered.filter(
            (numberDictionaryKey) =>
              numberDictionaryKey.includes(calibrationNumberAsString)
          );

          nextCalibrationCharIndex++;
        } while (
          numberDictionaryKeyFiltered.length > 1 ||
          nextCalibrationCharIndex == calibrationLine.length - 1
        );

        let numberDictionaryKey = numberDictionaryKeyFiltered[0];

        if (numberDictionaryKey in numberDictionary) {
          calibrationNumbers.push(numberDictionary[numberDictionaryKey]);
        }

        console.log(calibrationNumbers, numberDictionaryKey, calibrationLine);
      }
    }

    // Calculate the calibration value

    calibrationValue =
      calibrationValue +
      (calibrationNumbers[0] * 10 +
        calibrationNumbers[calibrationNumbers.length - 1]);
  });

  console.log(`Part Two: ${calibrationValue}`);



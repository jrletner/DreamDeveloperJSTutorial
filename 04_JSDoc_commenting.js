// Commenting with JSDoc

/**
 * Description
 * This function collects the following params and returns a concatenated string containing those params.
 * "Hello, my name is ${userName} and I am ${userAge} and I am a ${userOccupation}."
 * @param {string} userName
 * @param {number} userAge
 * @param {string} userOccupation
 * @returns {string}
 */
let myFunc = (userName, userAge, userOccupation) =>
  console.log(
    `Hello, my name is ${userName} and I am ${userAge} and I am a ${userOccupation}.`
  );
myFunc("Joe", 46, "Developer");

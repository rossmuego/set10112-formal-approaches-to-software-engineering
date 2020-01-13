/**
 * Exercise 1, Week 1
 */
function smallestPrime() {
  let maxPrime = 100;

  for (let naturalNumber = 2; naturalNumber < maxPrime; naturalNumber++) {
    if (!isPrime(naturalNumber)) {
      console.log(naturalNumber);
    }
  }
}

/**
 * Checks if the number provided is prime after putting it through the
 * formula provided.
 * @param {*} n The number to check.
 * @returns If the number is prime or not.
 */
function isPrime(n) {
  if (formulaOne(n) % n === 0) return false;
  return true;
}

/**
 * The formula provided for exercise 1.
 * @param {*} input The number to perform the calculation on,
 * @returns The new number.
 */
const formulaOne = input => input * input - input + 41;

// Answer
smallestPrime();

/**
 * Exercise 3 Week 1.
 * @returns The answer being the first number that is odd that is not prime
 * or the sum of a prime and twice square.
 */
function oddNaturals() {
  for (let oddNum = 5; oddNum < 10000; oddNum += 2) {
    if (!isPrime(oddNum)) {
      if (!twiceSquareCheck(oddNum)) {
        console.log(oddNum);
        return;
      }
    }
  }
}

/**
 * Find square numbers less than half of the input
 * @param {*} input The number.
 * @returns The square numbers less than the input.
 */
function findSquaresLessThanHalf(input) {
  let root = Math.sqrt(input / 2);
  let squaresLessThanN = [];
  for (let i = Math.floor(root - 0.1); i > 0; i--) {
    squaresLessThanN.unshift(i * i);
  }

  return squaresLessThanN;
}

/**
 * Check if the number is prime.
 * @param {*} input The number to check.
 * @returns If it is prime.
 */
function isPrime(input) {
  let max = Math.sqrt(input);
  for (let i = 2; i <= max; i++) {
    if (input % i === 0) return false;
  }
  return true;
}

/**
 * Do the prime plus twice squarecheck
 * @param {*} input The number to check.
 * @returns If the number is prime.
 */
function twiceSquareCheck(input) {
  return findSquaresLessThanHalf(input).some(function(square) {
    return isPrime(input - 2 * square);
  });
}

// Answer
oddNaturals();

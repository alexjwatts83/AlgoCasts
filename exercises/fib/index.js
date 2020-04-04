// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

let cache = {};

function memoize(fn) {
  let leCache = {};
  return function(...args) {
    if (leCache[args] !== undefined) {
      return leCache[args];
    }
    leCache[args] = fn.apply(this, args);
    return leCache[args];
  }
}

function fibInterative(n){
  if (n <= 1) {
    return n;
  }
  let minusOne = 1;
  let minusTwo = 0;
  let result = minusOne + minusTwo;
  for (let i = 2; i <= n; i++) {
    result = minusOne + minusTwo;
    let temp = minusOne
    minusOne = result;
    minusTwo = temp;
  }

  return result;
}

function fibNonCached(n) {
  if (n <= 1){
    return n;
  }

  return fib(n-1) + fib(n-2);
}


function fibCached(n){
  if (cache[n] !== undefined) {
    return cache[n];
  }

  if (n <= 1){
    return n;
  }

  cache[n] = fib(n-1) + fib(n-2);
  
  return cache[n];
}

const fib = memoize(fibNonCached);

module.exports = fib;

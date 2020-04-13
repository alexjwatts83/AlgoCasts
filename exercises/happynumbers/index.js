/*
Write an algorithm to determine if a number n is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Return True if n is a happy number, and False if not.
========================
Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

*/
function happynumbers(n) {
  // return isHappy(n);
  return happynumbersMe(n, {});
}

function happynumbersMe(n, cache = {}) {
  if (cache[n] !== undefined) {
    // console.log({cache: cache});
    return false;
  }
  // console.log({n:n});
  if (n < 0) {
    return false;
  }
  let str =  n.toString();
  let len = str.length;
  let result = 0;
  // console.log({n:n, str: str, len: len});
  for (let i = 0; i < len; i++) {
    let num = Math.pow(parseInt(str[i]), 2);
    result += num;
    // console.log({i:i, num: str[i], numSq: num, result: result});
  }
  if (result == 1){
    return true;
  }
  cache[n] = false;
  return happynumbersMe(result, cache);
}

var isHappy = function(n) {
  let x = n;
  while(x !== 1 && x !== 7 && x !== 0){                
      x = splitDigits(x);
      if(x > 1 && x < 10 && x !== 7)
          return false;
  }
  return true;
};

var splitDigits = function(n) {
 let sum = 0;
  let temp;
  while (n >= 1) {
      temp = n % 10;
      sum += temp * temp;
      n = Math.trunc(n / 10)
 }
  return sum
}

module.exports = happynumbers
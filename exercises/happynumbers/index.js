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
function happynumbers(n, cache = {}) {
  if (cache[n] !== undefined) {
    console.log({cache: cache});
    return false;
  }
  console.log({n:n});
  if (n < 0) {
    return false;
  }
  let str =  n.toString();
  let len = str.length;
  let result = 0;
  console.log({n:n, str: str, len: len});
  for (let i = 0; i < len; i++) {
    let num = Math.pow(parseInt(str[i]), 2);
    result += num;
    console.log({i:i, num: str[i], numSq: num, result: result});
  }
  if (result == 1){
    return true;
  }
  cache[n] = false;
  return happynumbers(result, cache);
}

module.exports = happynumbers
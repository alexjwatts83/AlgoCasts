// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let str = n.toString().replace('-', '');
  let len = str.length - 1;
  let result = 0;

  for(let i = len; i >= 0; i--) {
    if (str[i]==='-'){
      result = result * - 1;
      continue;
    }
    let pow = Math.pow(10, i);
    let num = parseInt(str[i]);
    result = (pow * num) + result;
  }

  return (n >= 0) ? result : -result;
}

module.exports = reverseInt;

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  if (str === null || str === undefined) {
    throw new Error('lols');
  }

  let reversed = '';

  for (let i = str.length -1; i >= 0; i--) {
    reversed = `${reversed}${str[i]}`;
  }

  return reversed;
}

function reverseRecursive(str) {
  if (str === null || str === undefined) {
    throw new Error('lols');``
  }

  if (str === '') {
    return str;
  }

  let sub = str.substr(1)
  let c0 = str.charAt(0);

  // console.log({str: str, sub: sub, c0: c0});

  return reverseRecursive(sub) + c0;
}

function reverseReduce(str) {
  return str.split('').reduce((reversed, leChar) => leChar + reversed, '');
}

var reverseString = function(s) {
  let mid = Math.floor(s.length /2);
  let j = s.length - 1;
  for(let i = 0; i < mid; i++) {
      let pointerToJ = s[j - i];
      s[j -i] = s[i];
      s[i] = pointerToJ;
  }
};

var object = {
  reverse: reverse,
  reverseRecursive: reverseRecursive,
  reverseReduce: reverseReduce
}

module.exports = object;

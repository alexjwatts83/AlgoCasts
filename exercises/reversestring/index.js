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

module.exports = reverse;

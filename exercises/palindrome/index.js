// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let i = 0;
  let j = str.length - 1;

  // O(n/2) => O(n)
  while(i < j) {
    if(str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}

function palindrome2(str) {
  let strReversed = reverse(str);
  // console.log({str: str, rev: strReversed});
  return str === strReversed;
}


function reverse(str) {
  let reverse = '';
  let n = str.length;
  for(let i = 0; i < n; i++) {
    reverse = str[i] + reverse;
  }
  return reverse;
}

module.exports = palindrome;

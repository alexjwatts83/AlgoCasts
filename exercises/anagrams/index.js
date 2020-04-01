// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let mappedCharsA = mapString(stringA);
  let mappedCharsB = mapString(stringB);
  let stringAChars = [];

  // get the individual characters of string A
  for(var charA in mappedCharsA) {
    stringAChars.push(charA)
  }

  // loop through all of stringA characters and see if they
  // 1. are contained in string b character map
  // 2. that stringA and stringsBs character count is the same
  // at the end of the loop delete the character from the character maps
  for(let i = 0; i < stringAChars.length; i++) {
    let charA = stringAChars[i];
    // if the charA is in stringB
    if (!mappedCharsB[charA]) {
      console.log(`${stringB} does not contain ${charA}`);
      return false;
    }

    if (mappedCharsA[charA] !== mappedCharsB[charA]) {
      console.log(`Char Count for ${charA} does not match.`);
      return false;
    }

    delete mappedCharsA[charA];
    delete mappedCharsB[charA];
  }

  // here we have looped through all the characters in stringA and 
  // removed all of the chars from the character map of stringA
  // and also the matching characters in stringB. If string b character
  // map has any remaining keys, meaning characters in B that are not in
  // A then return false.
  return Object.keys(mappedCharsB).length === 0;
}

function mapString(str) {
  str = str.replace(/[^\w]/g, '').toLowerCase();
  // console.log('str' + str);
  let cache = {};
  let n = str.length;

  for(let i = 0; i < n; i++) {
    let c = str[i];
    let count = cache[c] + 1 || 1;

    cache[c] = count;
  }
  return cache;
}

module.exports = anagrams;

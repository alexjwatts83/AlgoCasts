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

  for(var charA in mappedCharsA) {
    // if the charA is in stringB
    if (!mappedCharsB[charA]) {
      console.log(`${stringB} does not contain ${charA}`);
      return false;
    }

    if (mappedCharsA[charA] !== mappedCharsB[charA]) {
      console.log(`Char Count for ${charA} does not match.`);
      return false;
    }
  }

  for(var charB in mappedCharsB) {
    // if the charB is in stringA
    if (!mappedCharsA[charB]) {
      console.log(`${stringB} does not contain ${charB}`);
      return false;
    }

    if (mappedCharsA[charB] !== mappedCharsB[charB]) {
      console.log(`Char Count for ${charB} does not match.`);
      return false;
    }
  }
  

  return true;
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

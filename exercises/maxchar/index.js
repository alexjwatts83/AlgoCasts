// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let cache = {};
  let n = str.length;
  let maxCount = 0;
  let charWithMostCounts = '';

  for(let i = 0; i < n; i++) {
    let c = str[i];
    let count = cache[c] + 1 || 1;

    cache[c] = count;

    if (count < maxCount) {
      continue;
    }
    
    maxCount = count;
    charWithMostCounts = c;
  }

  return charWithMostCounts;
}

module.exports = maxChar;

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let cache = {};
  let n = str.length;

  for(let i = 0; i < n; i++) {
    let c = str[i];
    if(cache[c]) {
      cache[c] = cache[c] + 1;
    } else {
      cache[c] = 1;
    }
  }

  let maxCount = 0;
  let charWithMostCounts = '';
  
  for(var prop in cache) {
    let count = cache[prop];
    if (count > maxCount){
      charWithMostCounts = prop;
      maxCount = count;
    }
  }

  return charWithMostCounts;
}

module.exports = maxChar;

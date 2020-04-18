function findLongestSubstring(str) {
  let chars = {};
  let maxCount = 0;
  let j = 0;
 
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (chars[c]) {
      j = Math.max(j, chars[c]);
    }
    // index - beginning of substring + 1 (to include current in count)
    maxCount = Math.max(maxCount, i - j + 1);
    // store the index of the next char so as to not double count
    chars[c] = i + 1;
  }
  return maxCount;
}

module.exports = findLongestSubstring;
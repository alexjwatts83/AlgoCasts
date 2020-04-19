/*
https://www.youtube.com/watch?v=3IETreEybaA
*/
function findLongestSubstring(str) {
  let chars = new Map();
  let maxCount = 0;
  let pointerA = 0;
  let pointerB = 0;
  let n = str.length;
  while(pointerB < n) {
    let c = str[pointerB];
    if (chars.get(c) === undefined){
      // add in a new unqiue character
      chars.set(c, pointerB);
      pointerB++;
      maxCount = Math.max(maxCount, chars.size)
    } else {
      // pointer b is no longer unique lets move
      // pointer a forward one and remove from
      // current list
      chars.delete(str[pointerA]);
      pointerA++;
    }
  }
  return maxCount;
}

module.exports = findLongestSubstring;
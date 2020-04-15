var sumZero = function(sortedArr) {
  let n = sortedArr.length
  let leftIndex = 0;
  let rightIndex = n -1;
  // start from the stand and then end and move in
  // O(n) since there is only one "loop"
  while(leftIndex < rightIndex) {
    let left = sortedArr[leftIndex];
    let right = sortedArr[rightIndex];
    let sum = left + right;
    if (sum === 0) {
      return [left, right]
    }
    if (sum > 0) {
      rightIndex--;
    } else {
      leftIndex++;
    }
  }
  return undefined;
}
module.exports = sumZero;
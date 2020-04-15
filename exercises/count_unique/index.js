var countUniqueValues = function(sortedArr) {
  let n = sortedArr.length;
  if (sortedArr.length < 2) {
    // if 0 or 1, then return n
    return n;
  }
  // at this point there is at least 2 values
  let leftIndex = 0;
  let rightIndex = 1;  
  let left = sortedArr[leftIndex];
  let right = sortedArr[rightIndex];
  
  // there should always be a unique element at this point
  let uniqueCount = 1;

  // start from 0 and 1
  while(rightIndex < n) {
    // if left and right are the same
    // set pointer to next index
    if (left === right) {
      rightIndex++;
      right = sortedArr[rightIndex];
      continue;
    }
    // increment counter
    uniqueCount++;

    // set new indexes
    leftIndex = rightIndex;
    rightIndex = rightIndex + 1;
    
    // can be an out of bounds index;
    if (rightIndex === n) {
      break;
    }

    // reset left and right
    left = sortedArr[leftIndex];
    right = sortedArr[rightIndex];
  }

  return uniqueCount;
}
module.exports = countUniqueValues;
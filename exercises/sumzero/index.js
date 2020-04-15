var sumZero = function(sortedArr) {
  let slowPointer = null;
  let fastPointer = null;
  let n = sortedArr.length
  // start from the first index
  // check the second index
  // keep incrmenting still we get to the end
  for(let i = 0; i < n -1; i++) {
    slowPointer = i;
    fastPointer = i + 1;

    let slowValue = sortedArr[slowPointer];
    
    while(fastPointer < n) {
      let fastValue = sortedArr[fastPointer];
      let sum = slowValue + fastValue;
      if (sum === 0) {
        return [sortedArr[slowPointer], sortedArr[fastPointer]]
      }
      fastPointer++;
    }
  }
  return undefined;
}
module.exports = sumZero;
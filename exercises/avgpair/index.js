/*
 Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
*/
function averagePair(arr, num) {
  
  let n = arr.length;
  if (n === 0) {
    return false;
  }
  let i = 0;
  let j = n - 1;

  // collapse
  while (i < j) {
    let avg = (arr[i] + arr[j]) / 2;
    if (avg === num) {
      return true;
    }
    if (avg < num) {
      i++;
    } else {
      j--;
    }
  }

  return false;
}

module.exports = averagePair;
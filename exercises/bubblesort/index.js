var bubbleSortMe = function(arr) {
  let n = arr.length - 2;
  for(let i = n; i >= 0; i--){
    let wasNoSwapped = true;
    for(let j = 0; j <= i; j++){
      let current = arr[j];
      let next = arr[j + 1];
      if (current > next) {
        arr[j] = next;
        arr[j + 1] = current;
        wasNoSwapped = false;
      }
    }
    if (wasNoSwapped) {
      break;
    }
  }
  return arr;
}
var bubbleSortMeRefactored = function(arr) {
  // return null
}
module.exports = {
  bubbleSortMe: bubbleSortMe,
  // bubbleSortMeRefactored: bubbleSortMeRefactored
}
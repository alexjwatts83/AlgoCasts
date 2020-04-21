var bubbleSortMe = function(arr) {
  // largest value bubbles up
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
var selectionSort = function(arr) {
  // the smallest number gets inserted
  let n = arr.length;
  for(let i = 0; i < n; i++) {
    let min = arr[i];
    let minIndex = i;
    for(let j = i + 1; j < n; j++) {
      let valueAtIndexJ = arr[j];
      if (valueAtIndexJ < min) {
        minIndex = j;
        min = valueAtIndexJ;
      }
    }
    if (i === minIndex) {
      continue;
    }
    let valueAtI = arr[i];
    let valueAtMinIndex = arr[minIndex];
    arr[minIndex] = valueAtI;
    arr[i] = valueAtMinIndex;
  }
  return arr
}
module.exports = {
  bubbleSort: bubbleSortMe,
  selectionSort: selectionSort
}
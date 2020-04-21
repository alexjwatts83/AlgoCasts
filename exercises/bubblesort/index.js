var bubbleSortMe = function(arr) {
  // largest value bubbles up
  let n = arr.length - 2;
  for(let i = n; i >= 0; i--){
    let noSwapsies = true;
    for(let j = 0; j <= i; j++){
      if (arr[j] > arr[j + 1]) {
        let valueAtJ = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = valueAtJ;
        noSwapsies = false;
      }
    }

    if (noSwapsies) {
      break;
    }
  }
  return arr;
}
var selectionSort = function(arr) {
  // the smallest number gets inserted
  let n = arr.length;
  for(let i = 0; i < n; i++) {
    let minIndex = i;
    for(let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    
    if (i === minIndex) {
      continue;
    }

    let valueAtI = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = valueAtI;
  }
  return arr
}

module.exports = {
  bubbleSort: bubbleSortMe,
  selectionSort: selectionSort
}
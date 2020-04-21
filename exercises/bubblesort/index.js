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
  // reverse of bubble where the smallest value
  // is added to start
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

var insertionSort = function(arr) {
  // insert value in the left section until its sorted
  let n = arr.length;

	let currentVal;
  for(let i = 1; i < n; i++){
    currentVal = arr[i];
    let j;
    for(j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j+1] = arr[j]
    }
    arr[j+1] = currentVal;
  }
  return arr;
}

module.exports = {
  bubbleSort: bubbleSortMe,
  selectionSort: selectionSort,
  insertionSort: insertionSort
}
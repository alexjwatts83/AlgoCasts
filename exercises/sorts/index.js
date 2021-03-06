var swap = function(arr, idx1, idx2) {
  temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
var bubbleSort = function(arr) {
  // if the left element is greater than the right then swap it
  // until we get to the end
  // once we hit the end, we don't check it again
  let n = arr.length - 1; // we always check for + 1
  for(let i = 0; i < n; i++){
    let noSwap = true;
    for(let j = 0; j < (n - i); j++) {
      let left = j;
      let right = j + 1;
      if (arr[left] > arr[right]) {
        swap(arr, left, right);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}
var selectionSort = function(arr) {
  // starting from the start we figure out which item
  // should be sorted next
  let n = arr.length;
  for(let i = 0; i < n; i++) {
    let indexOfMinValue = i;
    // loop to the end starting from i + 1
    for(let j = i + 1; j < n; j++) {
      if (arr[j] < arr[indexOfMinValue]) {
        indexOfMinValue = j;
      }
    }
    // swap if index of min value changed from i
    if (indexOfMinValue === i) continue;
    swap(arr, i, indexOfMinValue);
  }
  return arr;
}

var insertionSortNiave = function(arr) {
  let n = arr.length;
  for(let i = 1; i < n; i++) {
    for(let j = i + 1; j >= 0; j--) {
      let right = arr[j];
      let left = arr[j - 1];
      if (right < left) {
        swap(arr, j, j -1);
      }
    }
  }
  return arr;
}

/**
 * 1. If its the first element, then its already sorted
 * 2. Pick the next element
 * 3. Compare with all elements in sorted sub array
 * 4. Shift all the elements in the sorted array that is greater than the
 *    value to be sorted
 * 5. Insert the value
 * 6. Repeat until sorted
 */
var insertionSort = function(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let nextElement = arr[i];
    let startingIndex = i;
    while(startingIndex > 0 && arr[startingIndex - 1] > nextElement){
      // shift the previous value to the right
      // set the current to the previous
      arr[startingIndex] = arr[startingIndex - 1];
      startingIndex--;
    }
    // at this point the value at starting index is the last greater value
    arr[startingIndex] = nextElement;
  }
  // console.log(arr);
  return arr;
}

var insertionSort2 = function(arr) {
  let n = arr.length;
  // start from 1
  for (let i = 1; i < n; i++) {
    // let j = i
    let j = i;
    // while left gt right and j gt 0
    while(j > 0 && arr[j - 1] > arr[j]){
      // swap left and right
      swap(arr, j, j - 1);
      j--;
    }
  }

  return arr;
}

var mergeSort = function(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0,mid);
  let right = arr.slice(mid);
  
  return merge(mergeSort(left), mergeSort(right));
}

var merge = function (left, right) {
  const results = [];
  // one at a time brah
  while(left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  // return results and concat
  return [...results, ...left, ...right];
}

var pivot = function(arr, start = 0, end = arr.length - 1) {
  // const original = [...arr];
  let pivotValue = arr[start];
  let swapIndex = start;
  for(let i = start + 1; i <= end; i++) {
    if (pivotValue > arr[i]) {
      swapIndex++;
      swap(arr, i, swapIndex);
    }
  }
  swap(arr, start, swapIndex);
  // console.log({original: original, arr:arr, swapIndex: swapIndex});
  /*
  [4,8,2,1,5,7,6,3],
  [4,-2-,-8-,1,5,7,6,3],
  [4,2,-1-,-8-,5,7,6,3],
  [4,2,1,-3-,5,7,6,-8-],
  [-3-,2,1,-4-,5,7,6,8],
  */
  return swapIndex;
}

var quickSort = function(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

var getDigit = function(num, position) {
  let numAsString = num.toString();
  if (position >= numAsString.length) {
    return 0;
  }
  return parseInt(numAsString.substr(numAsString.length - 1 - position, 1));
}

var digitCount = function(num) {
  return num.toString().length;
}

var mostDigits = function(arr) {
  let max = 0;
  for(let i = 0; i < arr.length; i++) {
    let count = digitCount(arr[i]);
    if (count > max){
      max = count;
    }
  }
  return max;
}

var radixSort = function(arr) {
  let maxDigitCount = mostDigits(arr);
  for(let i = 0; i < maxDigitCount; i++) {
    let buckets = Array.from({length: 10}, () => []);
    for (let j = 0; j < arr.length; j++) {
      let num = arr[j];
      let bucketIndex = getDigit(num, i);
      buckets[bucketIndex].push(num);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

let sorts = {
  bubbleSort: bubbleSort,
  selectionSort: selectionSort,
  insertionSortNiave: insertionSortNiave,
  insertionSort: insertionSort,
  insertionSort2: insertionSort2,
  mergeSort: mergeSort,
  quickSort: quickSort,
  radixSort: radixSort
};

var helpers = {
  merge: merge,
  pivot: pivot,
  getDigit: getDigit,
  digitCount: digitCount,
  mostDigits: mostDigits
}

module.exports = {
  sorts: sorts,
  helpers: helpers
}
// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(items) {
  if (items.length <= 1) {
    return items;
  }

  let sorted = [...items];
  let index = 0;
  let maxIndex = sorted.length;
  let iterationCount = 0;
  let maxLoop = maxIndex -1;
  while(iterationCount < maxIndex) {
    let isSorted = true;
    while(index < maxLoop) {
      let left = sorted[index];
      let right = sorted[index+1];
      if (left > right) {
        sorted[index] = right;
        sorted[index+1] = left;
        isSorted = false;
      }
      index++;
    }
    if(isSorted) {
      break;
    }
    index = 0;
    iterationCount++;
    maxLoop--;
  }

  return sorted;
}

function selectionSort(items) {
  if (items.length <= 1) {
    return items;
  }

  let sorted = [...items];
  let itemsLength = sorted.length;

  for(let i = 0; i < itemsLength; i++) {
    let lowestValueIndex = i;
    let lowestValue = sorted[i];
    for(let j = i + 1; j < itemsLength; j++) {
      if (sorted[j] < sorted[lowestValueIndex]){
        lowestValueIndex = j;
      }
    }
    sorted[i] =  sorted[lowestValueIndex];
    sorted[lowestValueIndex] = lowestValue;
  }

  return sorted;
}

function mergeSort(items) {
  if (items.length <= 1) {
    return items;
  }

  const left = [];
  const right = [];
  const n = items.length;
  const leftLimit =  Math.floor(n / 2);

  for (let i = 0; i < n; i++) {
    if (i < leftLimit) {
      left.push(items[i]);
    } else {
      right.push(items[i]);
    }
  }

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length &&
    rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++
    }
  }

  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

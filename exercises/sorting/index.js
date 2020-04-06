// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

var mine = {
  bubbleSort(items) {
    if (items.length <= 1) {
      return items;
    }
  
    let sorted = [...items];
    let index = 0;
    let maxIndex = sorted.length;
    let iterationCount = 0;
    let maxLoop = maxIndex -1;
    
    // bubble up the max value
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
  },
  selectionSort(items) {
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
  },
  mergeSort(items) {
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
  
    return this.merge(this.mergeSort(left), this.mergeSort(right));
  },
  merge(left, right) {
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
}

function bubbleSort(items) {
  /*
  Def: Bubble up the largest value one by one
  Find the largest element in an array and move it to the start of the array
  Time: Worst case O(n^2)
  Space: O(1) only thing created was the pointer
  */
  let n = items.length;
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < (n-i); j++){
      if (items[j] > items[j+1]) {
        const pointer = items[j+1];
        items[j+1] = items[j];
        items[j] = pointer;
      }
    }
  }
  return items;
}

function selectionSort(items) {
  /*
  Def: From the start set the min value the first item in the array, loop through all the items
  in the array finding the lowest value. Swap the lowest value with the start. Loop again to
  find the min but start from index 1 or the second item to the end. Swap. Continue until
  we get to the end
  Time: Worst case O(n^2)
  Space: O(1) a few 
  */
  let n = items.length;
  for(let i = 0; i < n; i++) {
    // set the min value and index
    let minIndex = i;
    // loop from i + 1 to the end
    for(let j = (i + 1); j < n; j++){
      if (items[j] > items[minIndex]){
        continue;
      }
      minIndex = j;
    }
    if (minIndex === i) {
      continue;
    }
    // swap
    let minPointer = items[minIndex];
    items[minIndex] = items[i];
    items[i] = minPointer;
  }

  return items;
}

function mergeSort(items) {
  /*
  Def: Split an array into two arrays a divide and conquer approach.
  Time:
  Space:
  */
  let n = items.length;
  if (n === 1) {
    return items;
  }

  let midPoint = Math.floor(n / 2);
  const leftItems = [];
  const rightItems = [];

  for(let i = 0; i < n; i++) {
    if (i < midPoint){
      leftItems.push(items[i]);
    } else {
      rightItems.push(items[i]);
    }
  }
  
  return merge(mergeSort(leftItems), mergeSort(rightItems));
}

function merge(left, right) {
  /*
  Def: Merge two already sorted arrays together. Does assume that the arrays are
       sorted.
  Time: O(n log n) I think
  Space: O(n + m), as we are creating an array based on the two arrays
  */
  const results = [];
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

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

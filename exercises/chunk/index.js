// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let n = array.length;
  let chunked = [];
  let index = 0;
  while (index < n) {
    chunked.push([]);
    let len = ((index + size) > n) ? n : index + size;
    for(let i = index; i < len; i++){
      const value = array[i];
      chunked[chunked.length-1].push(value);
    }
    // console.log({chunked:chunked, index: index});
    index += size;
  }

  return chunked;
}

function chunk2(array, size) {
  let n = array.length;
  let chunked = [];
  for(let i = 0; i < n; i++) {
    const value = array[i];
    // console.log({i:i,chunked:chunked});
    if (!chunked[chunked.length-1]) {
      chunked.push([value]);
      continue;
    }
    // console.log('get here');
    let arr = chunked[chunked.length-1];
    let arrLen = arr.length;
    // console.log({i:i,arr:arr,arrLen:arrLen});
    if (arrLen < size) {
      arr.push(value);
    } else {
      chunked.push([value]);
    }
  }

  return chunked;
}

module.exports = chunk;

var samesquared = function(array1, array2) {
  // check if arrays are empty or null
  if (array1 === null || array1.length === 0) {
    return false;
  }
  if (array2 === null || array2.length === 0) {
    return false;
  }
 
  // set up the object array for array 1
  let array1FreqQbj = convertArrayToFrequencyObject(array1);

  // set up the object for array 2
  let array2FreqQbj = convertArrayToFrequencyObject(array2);

  // check that the objects match
  // get the keys of frequenccy object 1 to loop through its values
  var keys = [...Object.keys(array1FreqQbj)];
  let n = keys.length;
  // loop through the frequency objects keys
  for (let i = 0; i < n; i++) {
    let key = keys[i];
    let keySquared = Math.pow(parseInt(key), 2).toString();
    let value = array2FreqQbj[keySquared];
    // check if the current key squared exits in the next freq obj
    if (value === undefined) {
      return false;
    }
    // if the count does not equal then return false
    if (array1FreqQbj[key] !== array2FreqQbj[keySquared] ) {
      return false;
    }
    // delete keys from second freq object
    delete array2FreqQbj[keySquared];
  }
  // a final check is to see of array2 has any more keys
  keys = Object.keys(array2FreqQbj).length;

  return keys === 0;
}

/**
 * Time O(n), Space O(n)
 */
function convertArrayToFrequencyObject(arr) {
  let frequencyObj = {};
  // loop through each array item
  let n = arr.length;
  for(let i = 0; i < n; i++){
    let key = arr[i];
    // if item as a key is undefined
    if (frequencyObj[key] === undefined){
      // add obj as a property with a value of 1
      frequencyObj[key] = 1;
    } else { // else the key exists
      // increment by 1
      frequencyObj[key] += 1;
    }
  }
    
  return frequencyObj;
}

module.exports = samesquared;
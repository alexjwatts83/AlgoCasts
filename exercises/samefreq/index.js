function sameFrequency(arr1, arr2){
  if (arr1.toString().length !== arr2.toString().length) {
      return false;
  }
  let obj1 = getFreqObject(arr1.toString());
  let obj2 = getFreqObject(arr2.toString());
  let keys = Object.keys(obj1);
  console.log({
    obj1: obj1,
    obj2: obj2
  });
  for(let i = 0; i < keys.length; i++) {
      let key = keys[i];
      console.log({
        key: key,
        value: obj1[key],
        obj2: obj2[key]
      })
      if(obj2[key]===undefined){
          return false;
      }
      if (obj1[key] !== obj2[key]) {
          return false;
      }
  }
  return true;
}
function getFreqObject(arr) {
  let obj1 = {};
  let n = arr.length;
  for (let i = 0; i < n; i++) {
      let key = arr[i];
      obj1[key] = (obj1[key] || 0) + 1;
  }
  return obj1;
}

module.exports = sameFrequency;
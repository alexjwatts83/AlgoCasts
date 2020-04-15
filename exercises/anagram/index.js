var anagram = function(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  // create freq object for str1
  let str1Freq = {}
  for(let i = 0; i < str1.length; i++) {
    str1Freq[str1[i]] = (str1Freq[str1[i]] || 0) + 1;
  }
  // create freq object for str2
  let str2Freq = {}
  for(let i = 0; i < str2.length; i++) {
    str2Freq[str2[i]] = (str2Freq[str2[i]] || 0) + 1;
  }

  let keys = Object.keys(str1Freq);
  for(let i = 0; i < keys.length; i++) {
    let key = keys[i];
    if (str2Freq[key] === undefined) {
      return false;
    }
    if (str2Freq[key] !== str1Freq[key]) {
      return false;
    }
  }
  return true;
}
module.exports = anagram;
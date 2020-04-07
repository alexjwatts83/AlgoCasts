/*
isOneAway("abcde", "abcd");  // should return true
isOneAway("abde", "abcde");  // should return true
isOneAway("a", "a");  // should return true
isOneAway("abcdef", "abqdef");  // should return true
isOneAway("abcdef", "abccef");  // should return true
isOneAway("abcdef", "abcde");  // should return true
isOneAway("aaa", "abc");  // should return false
isOneAway("abcde", "abc");  // should return false
isOneAway("abc", "abcde");  // should return false
isOneAway("abc", "bcc");  // should return false
*/
function isOneAway(s1, s2) {
  let n1 = s1.length;
  let n2 = s2.length;
  let n = n1 > n2 ? n2 : n1;
  let commonIndex = 0;

  for(let x = 0; x < n; x++) {
    if (s1[x] !== s2[x]) {
      break;
    }
    commonIndex++;
  }

  // can we change the next character with something else
  if (n1 === n2) {
    // start from the next index and compare the values
    for(let i = commonIndex + 1; i < n; i++) {
      if (s1[i] !== s2[i]){
        return false;
      }
    }
    return true;
  }
  
  if ((n1 - 1 === n2) || (n1 + 1 === n2)) {
    n = (n1 < n2 ? n2 : n1) - 1;
    let add1 = (n1 > n2) ? 1 : 0;
    let add2 = (n1 > n2) ? 0 : 1;
    console.log({s1:s1,s2:s2, n:n, add1:add1,add2:add2, n1:n1, n2:n2, commonIndex: commonIndex});
    for(let i = commonIndex; i < n; i++) {
      let c1 = s1[i + add1];
      let c2 = s2[i + add2];
      console.log({s1:s1,s2:s2,c1: c1, c2: c2, i: i, n: n});
      if (c1 !== c2){
        return false;
      }
    }
    return true
  }

  return false;
}

module.exports = isOneAway;
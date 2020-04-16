/*
  which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
*/
function isSubsequence(str1, str2) {
  let n1 = str1.length;
  let n2 = str2.length;

  if (n1 > n2) {
    return false;
  }
  
  // find str1 in str2
  let i = 0;
  let j = 0;
  let ci = str1[i];
  let cj = '';

  // start from the next character
  i++;
  j++;
  while(i < n1 && j < n2) {
    cj = str2[j];
    ci = str1[i];
    if (ci === cj){
      i++;
      if (i === n1) {
        return true;
      }
    }
    j++;
  }

  return false;
}

module.exports = isSubsequence;
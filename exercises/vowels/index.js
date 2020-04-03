// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let count = 0;
  let vowelsMap = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  };
  let n = str.length;
  for(let i = 0; i < n; i++) {
    let c = str[i].toLowerCase();
    if (vowelsMap[c]) {
      count++;
    }
    // console.log(`c:${c};count:${count}`);
  }
  return count;
}

module.exports = vowels;

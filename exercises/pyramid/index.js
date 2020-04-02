;// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n) {
  // console.log(`pyramid => ${n}`);
  let colCount = (2 * n) - 1;
  var midPoint = Math.floor(colCount / 2);
  // console.log(`pyramid of ${n} rows and ${colCount} columns`);
  for(let row = 0; row < n; row++) {
    let str = '';
    for(let col = 0; col < colCount; col++) {
      let inRangeLeft = col < midPoint - row;
      let inRangeRight = col > midPoint + row;

      if (inRangeLeft || inRangeRight){
        str += ' ';
      } else {
        str += '#';
      }
    }
    console.log(str);
  }
}

function pyramidw(n) {
  let colCount = (2 * n) - 1;
  console.log(`pyramid of ${n} rows and ${colCount} columns`);
  for(let row = 1; row <= n; row++) {
    let str = '';
    for(let col = 1; col <= colCount; col++) {
      // if (col < row) {
      //   str += '#';
      // } else {
      //   str += '-';
      // }
      str +=`[${row},${col}] `;
    }
    console.log(str);
  }
}

module.exports = pyramid;

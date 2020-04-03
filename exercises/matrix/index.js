// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  console.log(`matrix: n => ${n}`);
  let spiral = [];
  for(let i = 0; i < n; i++){
    let lastIndex = spiral.push([]) -1;
    for(let j = 0; j < n; j++){
      spiral[lastIndex].push('*');
    }
  }
  let rowStart = 0;
  let colStart = 0;
  let rowEnd = n - 1;
  let colEnd = n - 1;
  let num = 1;
  while(num <= (n*n)){
    // loop right
    for (let col = colStart; col <= colEnd; col++) {
      spiral[rowStart][col] = num;
      num++;
    }
    // loop down
    rowStart++;
    for(let row = rowStart; row <= rowEnd; row++){
      spiral[row][colEnd] = num;
      num++;
    }
    colEnd--;
    // loop left
    for(let col = colEnd; col >= colStart; col--) {
      spiral[rowEnd][col] = num;
      num++;
    }
    // loop up
    rowEnd--;
    for(let row = rowEnd; row >= rowStart; row--) {
      spiral[row][colStart] = num;
      num++;
    }
    colStart++;
    // console.log(`rowStart: ${rowStart}, rowEnd: ${rowEnd}`);
    // console.log(`colStart: ${colStart}, rowEnd: ${colEnd}`);
    // break;
  }
  return spiral;
}

module.exports = matrix;

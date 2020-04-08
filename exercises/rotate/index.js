function rotate(a, n) {
  var rotated = [];

  let len = n - 1;
  // set the right hand side to 0
  for(let i = 0; i < n; i++) {
    let x = rotated.push([]);
    for(let j = 0; j < n; j++){
      rotated[x-1].push(0);
    }
  }

  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++){
      rotated[j][n - 1 - i]= a[i][j];
    }
  }

  console.log({rotated:rotated});
  return rotated;
}

/*
https://code.likeagirl.io/rotate-an-2d-matrix-90-degree-clockwise-without-create-another-array-49209ea8b6e6
*/
function rotateInplace(matrix, n) {
  const x = Math.floor(n/ 2);
  const y = n - 1;
  for (let i = 0; i < x; i++) {
     for (let j = i; j < y - i; j++) {
        k = matrix[i][j];
        matrix[i][j] = matrix[y - j][i];
        matrix[y - j][i] = matrix[y - i][y - j];
        matrix[y - i][y - j] = matrix[j][y - i]
        matrix[j][y - i] = k
     }
  }
  return matrix;
}

module.exports = {
  rotate: rotate,
  rotateInplace: rotateInplace
};
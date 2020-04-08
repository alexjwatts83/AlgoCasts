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

function rotateInplace(a, n) {
  
}

module.exports = {
  rotate: rotate,
  rotateInplace: rotateInplace
};
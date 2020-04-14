var isIsland = function(matrix) {
  let xLen = matrix.length - 1;
  let yLen = matrix[0].length - 1;
  let islandCount = 0;
  // loop row
  for(let x = 0; x <= xLen; x++){
    // loop column
    for(let y = 0; y <= yLen; y++) {
      let currentPoint = matrix[x][y];
      if (currentPoint !== 'x') {
        continue;
      }
      markIsland(matrix, x, y, xLen, yLen);
      islandCount++;
    }
  }

  return islandCount;
}

function markIsland(matrix, x, y, xLen, yLen) {
  // mark current
  matrix[x][y] = 'm';

  const neighboringPoints = [
    [x - 1, y], // top
    [x, y + 1], // right 
    [x + 1, y], // bottom
    [x, y - 1] // left
  ]

  // loop through current points neighbors
  for (let i = 0; i < neighboringPoints.length; i++) {
    let xPointer = neighboringPoints[i][0];
    let yPointer = neighboringPoints[i][1];
    markIslandAsSeen(matrix, xPointer, yPointer, xLen, yLen);
  }
}

function markIslandAsSeen(matrix, x, y, xLen, yLen) {
  // if within x and y bounds and is matrix continue
  if ((x >= 0 && x <=xLen) 
      && (y >= 0 && y <= yLen) 
        && matrix[x][y] === 'x') {
    markIsland(matrix, x, y, xLen, yLen);
  }
}
module.exports = isIsland;
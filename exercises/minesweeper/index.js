
/*
int[][] bombs1 = {{0, 2}, {2, 0}};
// mineSweeper(bombs1, 3, 3) should return:
// [[0, 1, -1],
//  [1, 2, 1],
//  [-1, 1, 0]]
*/
function mineSweeper(bombs, numRows, numCols) {
  // set the fields
  var field = [];
  for(let i = 0; i < numRows; i++) {
    let n = field.push([]) - 1;
    for(let j = 0; j < numCols; j++) {
      field[n].push(0);
    } 
  }
  for(let i = 0; i < bombs.length; i++){
    // set the bomb cordinates
    let x = bombs[i][0];
    let y = bombs[i][1];
    field[x][y] = -1;
    for(let row = x - 1; row <= x + 1; row++){
      for(let col = y - 1; col <= y + 1; col++) {
        // check if inbounds
        let isRowInbounds = row >= 0 && row < numRows;
        let isColInbounds = col >= 0 && col < numCols;
        if (isRowInbounds && isColInbounds && field[row][col] !== -1) {
          field[row][col]++;
        }
      }
    }
  }
  // console.log(field);

  return field;
}

function click(field, numRows, numCols, givenI, givenJ) {
  return field;
}

function mineSweeperCrap(bombs, numRows, numCols) {
  setCache(bombs);
  var field = [];
  for(let i = 0; i < numRows; i++) {
    let n = field.push([]) - 1;
    for(let j = 0; j < numCols; j++) {
      field[n].push(bombCount(i, j, numRows, numCols));
    } 
  }
  console.log(field);

  return field;
}

cache = {};

function setCache(bombs) {
  cache = {};
  for(let k = 0; k < bombs.length; k++) {
    let bombCoordinates = bombs[k];
    let i = bombCoordinates[0];
    let j = bombCoordinates[1];
    cache[[i,j]] = true;
  }
  console.log({cache:cache});
}

function bombCount(row, col, numRows, numCols) {
  if (isBombCoordinate(row, col)){
    return -1;
  }
  // search top
  let count = 0;
  let values = [
    [row + 1, col], // top
    [row + 1, col + 1], // top right
    [row, col + 1], // right
    [row - 1, col + 1], // bottom right
    [row - 1, col], // bottom
    [row - 1, col - 1], // bottom left
    [row, col - 1], // left
    [row + 1, col - 1] // top left
  ]
  for(let i = 0; i < values.length; i++) {
    let coords = values[i];
    let x = coords[0];
    let y = coords[1];
    if (isBombCoordinate(x, y)){
      count++;
      // console.log(`(${x}, ${y}) = >found nearby bomb incrementing count to ${count}`);
    }
  }
  return count;
}

function isBombCoordinate(i, j) {
  // let res = cache[[i,j]];
  // console.log(`res:${res}, i:${i}, j${j}`)
  return (cache[[i,j]] === undefined) ? false : true;
}
module.exports = {
  mineSweeper: mineSweeper,
  click: click
}
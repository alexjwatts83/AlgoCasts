function mineSweeper(bombs, numRows, numCols) {
  var field = [];
  for(let i = 0; i < numRows; i++) {
    let n = field.push([]) - 1;
    for(let j = 0; j < numCols; j++) {
      field[n].push(0);
    } 
  }
  console.log(field);

  return field;
}
module.exports = mineSweeper;
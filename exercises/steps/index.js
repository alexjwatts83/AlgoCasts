// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  // console.log(`steps: ${n}`);
  stepsRecursive(n, 1, 1, '');
}

function stepsRecursive(n, i, j, str) {
  if (i > n){
    return;
  }

  if (j > n) {
    console.log(`${str}`);
    j = 1;
    str = stepsRecursive(n, i + 1, 1, '');
    return;
  }

  if (j <= i) {
    str = `${str}#`;
  } else {
    str = `${str} `;
  }

  stepsRecursive(n, i, j + 1, str);
}

function stepsIterative(n) {
  // console.log(`steps: ${n}`);
  for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = 1; j <= n; j++) {
      if (j <= i) {
        str = `${str}#`;
      } else {
        str = `${str} `;
      }
    }
    console.log(str);
  }
}

module.exports = steps;

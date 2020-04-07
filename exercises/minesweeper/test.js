const mineSweeperModule = require('./index');
const mineSweeper = mineSweeperModule.mineSweeper;
const click = mineSweeperModule.click;

test('mineSweeper is a function', () => {
  expect(typeof mineSweeper).toEqual('function');
});
test('click is a function', () => {
  expect(typeof click).toEqual('function');
});

/*
// NOTE: The following input values will be used for testing your solution.
int[][] bombs1 = {{0, 2}, {2, 0}};
// mineSweeper(bombs1, 3, 3) should return:
// [[0, 1, -1],
//  [1, 2, 1],
//  [-1, 1, 0]]

int[][] bombs2 = {{0, 0}, {0, 1}, {1, 2}};
// mineSweeper(bombs2, 3, 4) should return:
// [[-1, -1, 2, 1],
//  [2, 3, -1, 1],
//  [0, 1, 1, 1]]

int[][] bombs3 = {{1, 1}, {1, 2}, {2, 2}, {4, 3}};
// mineSweeper(bombs3, 5, 5) should return:
// [[1, 2, 2, 1, 0],
//  [1, -1, -1, 2, 0],
//  [1, 3, -1, 2, 0],
//  [0, 1, 2, 2, 1],
//  [0, 0, 1, -1, 1]]
*/
describe
  .each([
    [
      [[0, 2], [2, 0]],
      3,
      3,
      [
        [0, 1, -1],
        [1, 2, 1],
        [-1, 1, 0]
      ]
    ],
    [
      [[0, 0], [0, 1]],
      3,
      4,
      [
        [-1, -1, 1, 0],
        [2, 2, 1, 0],
        [0, 0, 0, 0]
      ]
    ],
    [
      [[0, 0], [0, 1], [1, 2]],
      3,
      4,
      [
        [-1, -1, 2, 1],
        [2, 3, -1, 1],
        [0, 1, 1, 1]
      ]
    ],
    [
      [[1, 1], [1, 2], [2, 2], [4, 3]],
      5,
      5,
      [
        [1, 2, 2, 1, 0],
        [1, -1, -1, 2, 0],
        [1, 3, -1, 2, 0],
        [0, 1, 2, 2, 1],
        [0, 0, 1, -1, 1]
      ]
    ],
  ])
    (`mineSweeper does stuff`, (bombs1, numRows, numCols, expected) => {
      test(`when bombs is '${bombs1}' with field of ${numRows} x ${numCols}`, () => {
        expect(mineSweeper(bombs1, numRows, numCols)).toEqual(expected);
      });
});

describe
  .each([
    [
      [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, -1, 1, 0]
      ],
      3, 5, 2, 2,
      [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, -1, 1, 0]
      ]
    ],
    [
      [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, -1, 1, 0]
      ],
      3, 5, 1, 4,
      [
        [-2, -2, -2, -2, -2],
        [-2, 1, 1, 1, -2],
        [-2, 1, -1, 1, -2]
      ]
    ],
    [
      [
        [-1, 1, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 1, 1],
        [0, 0, 1, -1]
      ],
      4, 4, 0, 1,
      [
        [-1, 1, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 1, 1],
        [0, 0, 1, -1]
      ]
    ],
    [
      [
        [-1, 1, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 1, 1],
        [0, 0, 1, -1]
      ],
      4, 4, 1, 3,
      [
        [-1, 1, -2, -2],
        [1, 1, -2, -2],
        [-2, -2, 1, 1],
        [-2, -2, 1, -1]
      ]
    ],
  ])
    (`click does stuff`, (field, numRows, numCols, givenI, givenJ, expected) => {
      test(`Case 1`, () => {
        expect(click(field, numRows, numCols, givenI, givenJ)).toEqual(expected);
      });
});
/*
// NOTE: The following input values will be used for testing your solution.
int[][] field1 = {{0, 0, 0, 0, 0},
                  {0, 1, 1, 1, 0},
                  {0, 1, -1, 1, 0}};

// click(field1, 3, 5, 2, 2) should return:
// [[0, 0, 0, 0, 0],
//  [0, 1, 1, 1, 0],
//  [0, 1, -1, 1, 0]]

// click(field1, 3, 5, 1, 4) should return:
// [[-2, -2, -2, -2, -2],
//  [-2, 1, 1, 1, -2],
//  [-2, 1, -1, 1, -2]]


int[][] field2 = {{-1, 1, 0, 0},
                  {1, 1, 0, 0},
                  {0, 0, 1, 1},
                  {0, 0, 1, -1}};

// click(field2, 4, 4, 0, 1) should return:
// [[-1, 1, 0, 0],
//  [1, 1, 0, 0],
//  [0, 0, 1, 1],
//  [0, 0, 1, -1]]

// click(field2, 4, 4, 1, 3) should return:
// [[-1, 1, -2, -2],
//  [1, 1, -2, -2],
//  [-2, -2, 1, 1],
//  [-2, -2, 1, -1]]
*/
const rotateModule = require('./index');
const rotate = rotateModule.rotate;
const rotateInplace = rotateModule.rotateInplace;

test('rotate function exists', () => {
  expect(rotate).toBeDefined();
});

test('rotateInplace function exists', () => {
  expect(rotateInplace).toBeDefined();
});

describe.each([
  [
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ],
    3,
    [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3]
    ]
  ],
  [
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ],
    4,
    [
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4]
    ]
  ]
])(`Rotate, rotates an array 90 degrees`, (a, n, expected) => {
  test(`rotate`, ()=> {
    // console.log({
    //   a:a,
    //   n:n
    // });
    expect(rotate(a, n)).toEqual(expected);
  });
  test.skip(`rotate`, ()=> {
    // console.log({
    //   a:a,
    //   n:n
    // });
    expect(rotateInplace(a, n)).toEqual(expected);
  });
});
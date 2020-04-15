const fn = require('./index');

test('countUniqueValues function exists', () => {
  expect(typeof fn).toEqual('function');
});

describe.each([
  [
    [-3, -2, -1, 0, 1, 2, 3],
    7
  ],
  [
    [1,1,1,1,1,2],
    2
  ],
  [
    [1,1, 2, 3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,9,9],
    8
  ],
  [
    [1],
    1
  ],
  [
    [],
    0
  ],
  [
    [1,1],
    1
  ],
  [
    [1,2],
    2
  ],
])(`countUniqueValues`, (arg1, expected) => {
  test(`Expect ${expected} for ${arg1}`, () => {
    expect(fn(arg1)).toEqual(expected);
  });
});
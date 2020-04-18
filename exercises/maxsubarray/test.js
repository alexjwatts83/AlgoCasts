const fn = require('./index');

test('maxSubArray function exists', () => {
  expect(typeof fn).toEqual('function');
});

describe.each([
  [
    [2,6,9,2,1,8,5,6,3],
    3,
    19,
  ],
  [
    [100, 200, 300, 400],
    2,
    700,
  ],
  [
    [1,4,2,10,23,3,1,0,20],
    4,
    39,
  ],
  [
    [-3,4,0,-2,6,-1],
    2,
    5,
  ],
  [
    [3, -2, 7, -4, 1, -1, 4, -2, 1],
    2,
    5,
  ],
  [
    [2, 3],
    3,
    null,
  ],
])(`maxSubArray`, (arg1, arg2, expected) => {
  test(`Expect ${expected} for ${arg1} and ${arg2}`, () => {
    expect(fn(arg1, arg2)).toEqual(expected);
  });
});

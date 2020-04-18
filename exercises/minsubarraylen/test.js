const fn = require('./index');

test('minSubArrayLen function exists', () => {
  expect(typeof fn).toEqual('function');
});

describe.each([
  [
    [2,3,1,2,4,3],
    7,
    2,
  ],
  [
    [2,1,6,5,4],
    9,
    2,
  ],
  [
    [3,1,7,11,2,9,8,21,62,33,19],
    52,
    1,
  ],
  [
    [1,4,16,22,5,7,8,9,10],
    39,
    3,
  ],
  [
    [1,4,16,22,5,7,8,9,10],
    55,
    5,
  ],
  [
    [4,3,3,8,1,2,3],
    11,
    2,
  ],
  [
    [1,4,16,22,5,7,8,9,10],
    95,
    0,
  ],
])(`minSubArrayLen`, (arg1, arg2, expected) => {
  test(`Expect ${expected} for ${arg1} and ${arg2}`, () => {
    expect(fn(arg1, arg2)).toEqual(expected);
  });
});

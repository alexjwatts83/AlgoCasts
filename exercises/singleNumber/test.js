const fn = require('./index');

test('singleNumber is a function', () => {
  expect(typeof fn).toEqual('function');
});

describe.each([
  [
      [2,2,1],
      1
  ],
  [
      [4,1,2,1,2],
      4
  ],
  [
    [17,12,5,-6,12,4,17,-5,2,-3,2,4,5,16,-3,-4,15,15,-4,-5,-6],
    16
  ],
  [
    [-1],
    -1
  ],
  [
    [-1,-1,-2],
    -2
  ],
])(`single number`, (arr, expected) => {
  test(`Expect ${expected} for ${arr}`, () => {
    expect(fn(arr)).toEqual(expected);
  });
});
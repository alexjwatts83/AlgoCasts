const fn = require('./index');

describe.each([
  [
    [1,2,3],
    2.5,
    true
  ],
  [
    [1,3,3,5,6,7,10,12,19],
    8,
    true
  ],
  [
    [-1,0,3,4,5,6],
    4.1,
    false
  ],
  [
    [],
    4,
    false
  ],
  [
    [-1,0,3,4,5,6],
    5.5,
    true
  ],
])(`averagePair`, (arr1, arr2, expected) => {
  test(`Expect ${expected} for ${arr1} and ${arr2}`, () => {
    expect(fn(arr1, arr2)).toEqual(expected);
  });
});
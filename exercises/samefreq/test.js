const fn = require('./index');

test('sameFrequency is a function', () => {
  expect(typeof fn).toEqual('function');
});

describe.each([
  [
    [182],
    [281],
    true
  ],
  [
    [34],
    [14],
    false
  ],
  [
    [3589578],
    [5879385],
    true
  ],
  [
    [22],
    [222],
    false
  ],
])(`sameFrequency`, (arr1, arr2, expected) => {
  test(`Expect ${expected} for ${arr1} and ${arr2}`, () => {
    expect(fn(arr1, arr2)).toEqual(expected);
  });
});
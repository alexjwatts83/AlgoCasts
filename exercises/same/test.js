const fn = require('./index');

test('same is a function', () => {
  expect(typeof fn).toEqual('function');
});

describe.each([
  [
    [1, 2, 3],
    [4, 1, 9],
    true
  ],
  [
    [1, 2, 3],
    [1, 9],
    false
  ],
  [
    [1, 2, 1],
    [4, 4, 1],
    false
  ],
])(`same`, (arr1, arr2, expected) => {
  test(`Expect ${expected} for ${arr1} and ${arr2}`, () => {
    expect(fn(arr1, arr2)).toEqual(expected);
  });
});
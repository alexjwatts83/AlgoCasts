const fn = require('./index');

describe.each([
  [
    'hello',
    'hello world',
    true
  ],
  [
    'hello',
    'helsslo world',
    true
  ],
  [
    'sing',
    'sting',
    true
  ],
  [
    'abc',
    'abracadabra',
    true
  ],
  [
    'abc',
    'acb',
    false
  ],
  [
    'elloh',
    'hello world',
    false
  ],
])(`isSubsequence`, (arr1, arr2, expected) => {
  test(`Expect ${expected} for ${arr1} and ${arr2}`, () => {
    expect(fn(arr1, arr2)).toEqual(expected);
  });
});
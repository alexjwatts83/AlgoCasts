const fn = require('./index');

test('sumZero function exists', () => {
  expect(typeof fn).toEqual('function');
});

describe.each([
  [
    [-3, -2, -1, 0, 1, 2, 3],
    [-3, 3]
  ],
  [
    [-2,  0, 1, 3],
    undefined
  ],
  [
    [1, 2, 3],
    undefined
  ],
])(`sumZero`, (arg1, expected) => {
  test(`Expect ${expected} for ${arg1}`, () => {
    expect(fn(arg1)).toEqual(expected);
  });
});
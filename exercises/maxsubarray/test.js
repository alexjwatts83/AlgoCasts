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
])(`maxSubArray`, (arg1, arg2, expected) => {
  test(`Expect ${expected} for ${arg1} and ${arg2}`, () => {
    expect(fn(arg1, arg2)).toEqual(expected);
  });
});

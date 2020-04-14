const fn = require('./index');

test('maxSubArray function exists', () => {
  expect(typeof fn).toEqual('function');
});

describe.each([
  [
      [-2,1,-3,4,-1,2,1,-5,4],
      6
  ],
])(`maxSubArray`, (n, expected) => {
  test(`Expect ${expected} for ${n}`, () => {
    expect(fn(n)).toEqual(expected);
  });
});

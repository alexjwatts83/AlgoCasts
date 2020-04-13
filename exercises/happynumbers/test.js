const fn = require('./index');

test('happynumbers is a function', () => {
  expect(typeof fn).toEqual('function');
});

describe.each([
  [
      19,
      true
  ],
  [
    20,
    false
  ],
])(`happy number`, (n, expected) => {
  test(`Expect ${expected} for ${n}`, () => {
    expect(fn(n)).toEqual(expected);
  });
});
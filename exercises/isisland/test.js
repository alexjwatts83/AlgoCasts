const fn = require('./index');

test('isIsland is a function', () => {
  expect(typeof fn).toEqual('function');
});

describe.each([
  [
      [
        ['0', 'x', 'x'],
        ['0', '0', 'x'],
        ['0', 'x', '0']
      ],
      2
  ],
  // [
  //   20,
  //   false
  // ],
])(`isIsland`, (n, expected) => {
  test(`Expect ${expected} for matrix`, () => {
    expect(fn(n)).toEqual(expected);
  });
});
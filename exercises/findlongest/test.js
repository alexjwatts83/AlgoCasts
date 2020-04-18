const fn = require('./index');

test('findLongestSubstring function exists', () => {
  expect(typeof fn).toEqual('function');
});

describe.each([
  [
    '',
    0,
  ],
  [
    'rithmschool',
    7,
  ],
  [
    'thisisawesome',
    6,
  ],
  [
    'thecatinthehat',
    7,
  ],
  [
    'bbbbbb',
    1,
  ],
  [
    'longestsubstring',
    8,
  ],
  [
    'thisishowwedoit',
    6,
  ],
])(`findLongestSubstring`, (arg1, expected) => {
  test(`Expect ${expected} for ${arg1}`, () => {
    expect(fn(arg1)).toEqual(expected);
  });
});

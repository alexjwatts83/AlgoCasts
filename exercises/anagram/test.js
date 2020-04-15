const fn = require('./index');

test('anagram function exists', () => {
  expect(typeof fn).toEqual('function');
});

describe.each([
  [
    '',
    '',
    true
  ],
  [
    'aaz',
    'zza',
    false
  ],
  [
    'rat',
    'car',
    false
  ],
  [
    'amanaplanacanalpanama',
    'acanalmanplanpamana',
    false
  ],
  [
    'qwerty',
    'qeywrt',
    true
  ],
  [
    'texttwisttime',
    'timetwisttext',
    true
  ],
])(`anagram`, (arg1, arg2, expected) => {
  test(`Expect ${expected} for ${arg1} and ${arg2}`, () => {
    expect(fn(arg1, arg2)).toEqual(expected);
  });
});
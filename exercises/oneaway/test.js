const isOneAway = require('./index');

test('isOneAway is a function', () => {
  expect(typeof isOneAway).toEqual('function');
});

/*
isOneAway("", "");  // should return true
isOneAway("", "");  // should return true
isOneAway("a", "a");  // should return true
isOneAway("", "");  // should return true
isOneAway("", "");  // should return true
isOneAway("", "");  // should return true
isOneAway("", "abc");  // should return false
isOneAway("abcde", "");  // should return false
isOneAway("", "");  // should return false
isOneAway("", "");  // should return false
*/
describe
  .each([
    ['abcde', 'abcd', true],
    ['abde', 'abcde', true],
    ['a', 'a', true],
    ['abcdef', 'abqdef', true],
    ['abcdef', 'abccef', true],
    ['abcdef', 'abcde', true],
    ['aaa', 'abc', false],
    ['abcde', 'abc', false],
    ['abc', 'abcde', false],
    ['abc', 'bcc', false],
  ])
    (`isOneAway does stuff`, (s1, s2, expected) => {
      test(`"${s1}" "${s2}" is ${expected}`, () => {
        expect(isOneAway(s1, s2)).toEqual(expected);
      });
});
const isOneAway = require('./index');

test('isOneAway is a function', () => {
  expect(typeof isOneAway).toEqual('function');
});

/*
isOneAway("abcde", "abcd");  // should return true
isOneAway("abde", "abcde");  // should return true
isOneAway("a", "a");  // should return true
isOneAway("abcdef", "abqdef");  // should return true
isOneAway("abcdef", "abccef");  // should return true
isOneAway("abcdef", "abcde");  // should return true
isOneAway("aaa", "abc");  // should return false
isOneAway("abcde", "abc");  // should return false
isOneAway("abc", "abcde");  // should return false
isOneAway("abc", "bcc");  // should return false
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
const fn = require('./index');

test('areThereDuplicates is a function', () => {
  expect(typeof fn).toEqual('function');
});

test(`Expect  [1, 2, 3] to be true`, () => {
  expect(fn(1, 2, 3)).toEqual(false);
});

test(`Expect [1, 2, 2] to be false`, () => {
  expect(fn(1, 2, 2)).toEqual(true);
});

test(`Expect ['a', 'b', 'c', 'a'] to be false`, () => {
  expect(fn('a', 'b', 'c', 'a')).toEqual(true);
});
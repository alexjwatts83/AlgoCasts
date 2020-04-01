const reverse = require('./index');

test('Reverse function exists', () => {
  expect(reverse.reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse.reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse.reverse('  abcd')).toEqual('dcba  ');
});

test('When reverse is called with null then error is thrown', () => {
  expect(() => {
    reverse.reverse(null);
  }).toThrowError();
});

test('When reverse is called with undefined then error is thrown', () => {
  expect(() => {
    reverse.reverse(undefined);
  }).toThrowError();
});

test('reverseRecursive function exists', () => {
  expect(reverse.reverseRecursive).toBeDefined();
});

test('reverseRecursive reverses a string', () => {
  expect(reverse.reverseRecursive('abcd')).toEqual('dcba');
});

test('reverseRecursive reverses a string', () => {
  expect(reverse.reverseRecursive('  abcd')).toEqual('dcba  ');
});

test('When reverseRecursive is called with null then error is thrown', () => {
  expect(() => {
    reverse.reverseRecursive(null);
  }).toThrowError();
});

test('When reverseRecursive is called with undefined then error is thrown', () => {
  expect(() => {
    reverse.reverseRecursive(undefined);
  }).toThrowError();
});

test('reverseReduce reverses a string', () => {
  expect(reverse.reverseReduce('abcd')).toEqual('dcba');
});

test('reverseReduce reverses a string', () => {
  expect(reverse.reverseReduce('  abcd')).toEqual('dcba  ');
});
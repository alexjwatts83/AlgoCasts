const reverse = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});

test('When reverse is called with null then error is thrown', () => {
  expect(() => {
    reverse(null);
  }).toThrowError();
});

test('When reverse is called with undefined then error is thrown', () => {
  expect(() => {
    reverse(undefined);
  }).toThrowError();
});

const rotate = require('./index');

test('rotate function exists', () => {
  expect(rotate).toBeDefined();
});

describe.each([
  [
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ],
    3,
    [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3]
    ]
  ]
])(`do stuff`, (a, n, expected) => {
  test(`something`, ()=> {
    console.log({
      a:a,
      n:n
    });
    expect(rotate(a, n)).toEqual(expected);
  });
});
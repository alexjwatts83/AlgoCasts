const mod = require('./index');

describe.each([
  [Object.keys(mod.sorts)],
])('mod functions', (keys)=> {
  keys.forEach((key) => {
    it(`expect '${key}' is a function`, () => {
        expect(typeof mod.sorts[key]).toEqual('function');
    });
    describe.each([
      [
        [1,2,3,5,7,4,6],
        [1,2,3,4,5,6,7]
      ],
      [
        [7,1,2,3,4,5,6],
        [1,2,3,4,5,6,7]
      ],
      [
        [7],
        [7]
      ],
      [
        [1,2],
        [1,2]
      ],
      [
        [2,1],
        [1,2]
      ],
      [
        [12, 11, 13, 5, 6],
        [5, 6, 11, 12, 13]
      ],
    ])(`${key} =>`, (arr1, expected) => {
      test(`Expect ${expected} for ${arr1}`, () => {
        expect(mod.sorts[key](arr1)).toEqual(expected);
      });
    });
  });
});

describe.each([
  [
    [4,8,2,1,5,7,6,3],
    [3,2,1,4,5,7,6,8],
    3
  ],
])(`Pivot =>`, (arr1, expected1, expected2) => {
  test(`Expect ${expected2} for ${arr1}`, () => {
    expect(mod.helpers.pivot(arr1)).toEqual(expected2);
    expect(arr1).toEqual(expected1);
  });
});

describe.each([
  [
    12345,
    0,
    5
  ],
  [
    12345,
    1,
    4
  ],
  [
    12345,
    2,
    3
  ],
  [
    12345,
    3,
    2
  ],
  [
    12345,
    4,
    1
  ],
  [
    12345,
    5,
    0
  ],
  [
    7,
    5,
    0
  ],
])(`getDigit =>`, (arg1, arg2, expected) => {
  test(`Expect digit of '${expected}' for '${arg1}' at index of '${arg2}'`, () => {
    expect(mod.helpers.getDigit(arg1, arg2)).toEqual(expected);
  });
});

describe.each([
  [
    1,
    1,
  ],
  [
    12,
    2,
  ],
  [
    123,
    3,
  ],
  [
    1234,
    4,
  ],
  [
    12345,
    5,
  ],
])(`digitCount =>`, (arg1, expected) => {
  test(`Expect '${expected}' for '${arg1}'`, () => {
    expect(mod.helpers.digitCount(arg1)).toEqual(expected);
  });
});
describe.each([
  [
    [1234, 56, 7],
    4,
  ],
  [
    [1, 1, 11111, 1],
    5,
  ],
  [
    [12, 34, 56, 78],
    2,
  ],
])(`mostDigits =>`, (arg1, expected) => {
  test(`Expect '${expected}' for '${arg1}'`, () => {
    expect(mod.helpers.mostDigits(arg1)).toEqual(expected);
  });
});
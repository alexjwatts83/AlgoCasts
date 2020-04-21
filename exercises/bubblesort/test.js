const mod = require('./index');

describe.each([
  [Object.keys(mod)],
])('mod functions', (keys, data)=> {
  keys.forEach((key) => {
    it(`expect '${key}' is a function`, () => {
        expect(typeof mod[key]).toEqual('function');
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
    ])(`${key} =>`, (arr1, expected) => {
      test(`Expect ${expected} for ${arr1}`, () => {
        expect(mod[key](arr1)).toEqual(expected);
      });
    });
  });
});

const fromLast = require('./index');
const L = require('./linkedlist');
const List = L.LinkedList;
const Node = L.Node;

test('fromLast is a function', () => {
  expect(typeof fromLast).toEqual('function');
});

const l = new List();
const testData = [
  // [0, l, 'e'],
  // [1, l, 'd'],
  // [2, l, 'c'],
  // [3, l, 'b'],
  // [4, l, 'a'],
];

// let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let alphabet = 'abcdefghij';
let n = alphabet.length;

for(let i = 0; i < n; i++) {
  let c = alphabet[i];
  l.insertLast(c);
  testData.push([alphabet, n - i -1, l, c]);
}

describe.each(testData)(`fromLast returns the node n elements from the end`, (alphabet, i, l, expected) => {
  test(`when list is '${alphabet}', then index of ${i} returns '${expected}'`, () => {
     expect(fromLast(l, i).data).toEqual(expected);
  });
});


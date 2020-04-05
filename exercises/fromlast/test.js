const fromLast = require('./index');
const L = require('./linkedlist');
const List = L.LinkedList;
const Node = L.Node;

test('fromLast is a function', () => {
  expect(typeof fromLast).toEqual('function');
});

const l = new List();
const testData = [];
let alphabet = 'abcdefghij';
let n = alphabet.length;
for(let i = 0; i < n; i++) {
  let c = alphabet[i];
  l.insertLast(c);
  testData.push([alphabet, n - i -1, l, c]);
}

describe
  .each(testData)
    (`fromLast returns the node n elements from the end`, (alphabet, i, l, expected) => {
      test(`when list is '${alphabet}', then index of ${i} returns '${expected}'`, () => {
        expect(fromLast(l, i).data).toEqual(expected);
      });
});

describe
  .each([new List()])
    ('when list is empty', (l) => {
      test('fromLast returns null when index is 0', () => {
        expect(fromLast(l, 0)).toEqual(null);
      });
      test('fromLast returns null when index is out of bounds', () => {
        expect(fromLast(l, 1)).toEqual(null);
      });
})

describe
  .each([new List()])
    ('when list has size of 1', (l) => {
      beforeAll(() => {
        l.insertLast('a');
      });
      test('fromLast returns correct data with index is 0', () => {
        expect(fromLast(l, 0).data).toEqual('a');
      });
      test('fromLast returns null with index is 1', () => {
        expect(fromLast(l, 1)).toEqual(null);
      });
      test('fromLast returns null with index is 2', () => {
        expect(fromLast(l, 2)).toEqual(null);
      });
});

describe
  .each([new List()])
    ('when list has size of 2', (l) => {
      beforeAll(() => {
        l.insertLast('a');
        l.insertLast('b');
      });
      test('fromLast returns correct data with index is 0', () => {
        expect(fromLast(l, 0).data).toEqual('b');
      });
      test('fromLast returns correct data with index is 1', () => {
        expect(fromLast(l, 1).data).toEqual('a');
      });
      test('fromLast returns null with index is 2', () => {  
        expect(fromLast(l, 2)).toEqual(null);
      });
      test('fromLast returns null with index is 3', () => {  
        expect(fromLast(l, 3)).toEqual(null);
      });
});



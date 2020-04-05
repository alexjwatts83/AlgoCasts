const midpoint = require('./index');
const L = require('./linkedlist');
const Node = L.Node;
const LinkedList = L.LinkedList;

test('Midpoint is a function', () => {
  expect(typeof midpoint).toEqual('function');
});

describe('Midpoint returns the middle node of an odd numbered list', () => {
  test('when the list has 3 elements', () => {
    const l = new LinkedList();
    l.insertLast('a');
    l.insertLast('b');
    l.insertLast('c');
    expect(midpoint(l).data).toEqual('b');
  });

  test('when the list has 5 elements', () => {
    const l = new LinkedList();
    l.insertLast('a');
    l.insertLast('b');
    l.insertLast('c');
    l.insertLast('d');
    l.insertLast('e');
    expect(midpoint(l).data).toEqual('c');
  });
});

describe('Midpoint returns the middle node of an even numbered list', () => {
  test('when the list has 2 elements', () => {
    const l = new LinkedList();
    l.insertLast('a');
    l.insertLast('b');
    expect(midpoint(l).data).toEqual('a');
  });

  test('when the list has 4 elements', () => {
    const l = new LinkedList();
    l.insertLast('a');
    l.insertLast('b');
    l.insertLast('c');
    l.insertLast('d');
    expect(midpoint(l).data).toEqual('b');
  });
});

/* my own tests for mid point */
let values = [];
let start = 1;
let end = start + 20;
for(let i = start; i <= end; i++) {
  let l = new LinkedList();
  l.fillTo(i)
  let mid = Math.ceil(i /2);
  values.push([i, l, mid]);
}
describe.each(values)(`Midpoint returned correcly for list count from ${start} to ${end}`,
  (n, l, expected) => {
    // test(`n is defined`, () => {  
    //   expect(n).not.toBeNull();
    //   expect(n).not.toBeUndefined();
    // });
    // test(`list.size() equals ${n}`, () => {  
    //   expect(l.size()).toEqual(n);
    // });
    test(`when list has ${n} elements then middle is returned correctly with ${expected}`, () => {  
      expect(midpoint(l).data).toEqual(expected);
  });
});


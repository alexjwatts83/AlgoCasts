const circular = require('./index');
const L = require('./linkedlist');
const List = L.LinkedList;
const Node = L.Node;

test('circular', () => {
  expect(typeof circular).toEqual('function');
});

test('circular detects circular linked lists', () => {
  const l = new List();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');

  l.head = a;
  a.next = b;
  b.next = c;
  c.next = b;

  expect(circular(l)).toEqual(true);
});

test('circular detects circular linked lists linked at the head', () => {
  const l = new List();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');

  l.head = a;
  a.next = b;
  b.next = c;
  c.next = a;

  expect(circular(l)).toEqual(true);
});

test('circular detects non-circular linked lists', () => {
  const l = new List();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');

  l.head = a;
  a.next = b;
  b.next = c;
  c.next = null;

  expect(circular(l)).toEqual(false);
});

test('circular detects circular linked lists with large number of entries', () => {
  const l = new List();
  let n = 50;
  for(let i = 1; i <= n; i++) {
    l.insertLast(i);
  }
  let index = Math.floor(n /2);
  let node = l.getAt(index);
  let nextNextNode = l.getAt(index + 2);
  nextNextNode.next = node;
  expect(circular(l)).toEqual(true);
});

describe('Detects circular and does not error with large linked list size', () => {
  test('Circular detection', () => {
    const l = new List();
    let n = 50;
    for(let i = 1; i <= n; i++) {
      l.insertLast(i);
    }
    let index = Math.floor(n /2) + 2;
    let node = l.getAt(index);
    let nextNextNode = l.getAt(index + 2);
    nextNextNode.next = node;
    expect(circular(l)).toEqual(true);
  });
  test('No circular detection', () => {
    const l = new List();
    let n = 50;
    for(let i = 1; i <= n; i++) {
      l.insertLast(i);
    }
    expect(circular(l)).toEqual(false);
  });
})

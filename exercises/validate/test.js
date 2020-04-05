const Node = require('./node');
const validate = require('./index');

describe('Validate identifies valid Binary Search Tree', () => {
  test('When root is the only node, is valid', () => {
    const n = new Node(10);  
    expect(validate(n)).toEqual(true);
  });
  test('When root has only one left node', () => {
    const n = new Node(10);  
    n.insert(5);
    expect(validate(n)).toEqual(true);
  });
  test('When root has only one right node', () => {
    const n = new Node(10);  
    n.insert(5);
    expect(validate(n)).toEqual(true);
  });

  test('When root has both left and right node', () => {
    const n = new Node(10);  
    n.insert(5);
    n.insert(15);
    expect(validate(n)).toEqual(true);
  });

  test('Simple case', () => {
    const n = new Node(10);
    n.insert(5);
    n.insert(15);
    n.insert(0);
    n.insert(20);
    n.insert(25);
  
    expect(validate(n)).toEqual(true);
  });

  test('Bigger case 1', () => {
    const n = new Node(10);
    n.insert(5);
    n.insert(15);
    n.insert(0);
    n.insert(20);
    n.insert(-5);
    n.insert(-2);
    n.insert(25);
    expect(validate(n)).toEqual(true);
  });

  test('Bigger case 2', () => {
    const n = new Node(10);
    n.insert(5);
    n.insert(15);
    n.insert(0);
    n.insert(20);
    n.insert(-5);
    n.insert(-2);
    n.insert(25);
    n.insert(-10);
    n.insert(-15);
    n.insert(30);
    n.insert(35);
    expect(validate(n)).toEqual(true);
  });

})



test('Validate recognizes an invalid BST', () => {
  const n = new Node(10);
  n.insert(5);
  n.insert(15);
  n.insert(0);
  n.insert(20);
  n.left.left.right = new Node(999);

  expect(validate(n)).toEqual(false);
});

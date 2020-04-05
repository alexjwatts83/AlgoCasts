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

});

describe('Validate identifies invalid Binary Search Tree', () => {
  test('Simple case 1', () => {
    const n = new Node(10);
    n.insert(5);
    n.insert(15);
    n.insert(0);
    n.insert(20);
    n.left.left.right = new Node(999);
  
    expect(validate(n)).toEqual(false);
  });

  test('When root has only one left node', () => {
    const n = new Node(10);  
    n.left = new Node(20);
    expect(validate(n)).toEqual(false);
  });

  test('When root has only one right node', () => {
    const n = new Node(10);  
    n.right = new Node(5);
    expect(validate(n)).toEqual(false);
  });

  test('When root has both left and right node but left invalid', () => {
    const n = new Node(10);  
    n.insert(15);
    n.left = new Node(20);
    expect(validate(n)).toEqual(false);
  });

  test('When root has both left and right node but right invalid', () => {
    const n = new Node(10);  
    n.insert(15);
    n.right = new Node(5);
    expect(validate(n)).toEqual(false);
  });

  test('Simple case', () => {
    const n = new Node(10);
    n.insert(5);
    n.insert(15);
    n.insert(0);
    n.insert(20);
    n.insert(25);

    n.right.left = new Node(9);
  
    expect(validate(n)).toEqual(false);
  });

  test('Bigger case 1a left right', () => {
    const n = new Node(10);
    n.insert(5);
    n.insert(15);
    n.insert(0);
    n.insert(20);
    n.insert(-5);
    n.insert(-2);
    n.insert(25);
    n.left.right = new Node(30);
    expect(validate(n)).toEqual(false);
  });

  test('Bigger case 1b left left', () => {
    const n = new Node(10);
    n.insert(5);
    n.insert(15);
    n.insert(0);
    n.insert(20);
    n.insert(-5);
    n.insert(-2);
    n.insert(25);
    n.left.left = new Node(30);
    expect(validate(n)).toEqual(false);
  });

  test('Bigger case 1c left left left', () => {
    const n = new Node(10);
    n.insert(5);
    n.insert(15);
    n.insert(0);
    n.insert(20);
    n.insert(-5);
    n.insert(-2);
    n.insert(25);
    n.left.left.left = new Node(30);
    expect(validate(n)).toEqual(false);
  });

  test('Bigger case 1c left left right', () => {
    const n = new Node(10);
    n.insert(5);
    n.insert(15);
    n.insert(0);
    n.insert(20);
    n.insert(-5);
    n.insert(-2);
    n.insert(25);
    n.left.left.right = new Node(30);
    expect(validate(n)).toEqual(false);
  });

  test('Bigger case 2a right left', () => {
    const n = new Node(10);
    n.insert(5);
    n.insert(15);
    n.insert(0);
    n.insert(20);
    n.insert(-5);
    n.insert(-2);
    n.insert(25);
    n.right.left = new Node(30);
    expect(validate(n)).toEqual(false);
  });

  test('Bigger case 2b right right', () => {
    const n = new Node(10);
    n.insert(5);
    n.insert(15);
    n.insert(0);
    n.insert(20);
    n.insert(-5);
    n.insert(-2);
    n.insert(25);
    n.right.right.data = 0;
    expect(validate(n)).toEqual(false);
  });

  test('Bigger case 2c right right right', () => {
    const n = new Node(10);
    n.insert(5);
    n.insert(15);
    n.insert(0);
    n.insert(20);
    n.insert(-5);
    n.insert(-2);
    n.insert(25);
    n.right.right.right.data = 0;
    expect(validate(n)).toEqual(false);
  });

  test('Bigger case 2c right right left', () => {
    const n = new Node(10);
    n.insert(5);
    n.insert(15);
    n.insert(0);
    n.insert(20);
    n.insert(-5);
    n.insert(-2);
    n.insert(25);
    n.right.right.left = new Node(0);
    expect(validate(n)).toEqual(false);
  });
});




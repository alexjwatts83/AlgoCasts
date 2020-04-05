const Node = require('./index');

test('Node is a constructor', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});

describe('Given a new node', ()=> {
  let node;
  beforeAll(()=>{
    node = new Node(10);
  });
  test(`Then node has data`, ()=> {
    expect(node.data).toEqual(10);
  });
  test(`Then left is null`, ()=> {
    expect(node.left).toBeNull();
  });
  test(`Then right is null`, ()=> {
    expect(node.left).toBeNull();
  });
  test('Node has insert function', () => {
    expect(typeof node.insert).toEqual('function');
  });
  describe
    .each([
      new Node(10)
    ])
      ('When inserting into new node', (node) => {
        test(`when adding a value less than current value, then its added to the left`, () =>{
          // console.log(node);
          node.insert(5);
          expect(node.left.data).toEqual(5);
        });
        test(`when adding a value greater than current value, then its added to the right`, () =>{
          // console.log(node);
          node.insert(15);
          expect(node.right.data).toEqual(15);
        });
        test(`when adding a value equal than current value, then its not added`, () =>{
          // console.log(node);
          expect(node.insert(10)).toBeNull();
          expect(node.insert(5)).toBeNull();
          expect(node.insert(15)).toBeNull();
        });
      });
})

test('Node can insert correctly', () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(15);
  node.insert(17);

  expect(node.left.data).toEqual(5);
  expect(node.right.data).toEqual(15);
  expect(node.right.right.data).toEqual(17);
});

test('Contains returns node with the same data', () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(15);
  node.insert(20);
  node.insert(0);
  node.insert(-5);
  node.insert(3);

  const three = node.left.left.right;
  expect(node.contains(3)).toEqual(three);
});

test.skip('Contains returns null if value not found', () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(15);
  node.insert(20);
  node.insert(0);
  node.insert(-5);
  node.insert(3);

  expect(node.contains(9999)).toEqual(null);
});

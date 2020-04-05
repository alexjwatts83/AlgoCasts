// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }

  insert(value){
    const newNode = new Node(value)
    let node = this;
    while(true) {
      if (value < node.data) {
        
        if (node.left === null) {
          node.left = newNode;
          return newNode;
        }
        node = node.left;
      } else if(value > node.data) {
        if (node.right === null) {
          node.right = newNode;
          return newNode;
        }
        node = node.right
      } else {
        // console.log('exiting because it equals the value');
        return null;
      }
    }
  }
}

module.exports = Node;

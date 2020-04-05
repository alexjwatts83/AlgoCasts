// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(value) {
    this.data = value;
    this.children = [];
  }
  add(value) {
    this.children.push(new Node(value));
  }
  remove(value) {
    this.children = this.children.filter(x => x.data !== value);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    let nodes = [];
    let node = this.root;
    nodes.push(node);
    while(nodes.length > 0) {
      node = nodes.shift();
      fn(node);
      if (node.children.length > 0) {
        nodes.push(...node.children);
      }
    }
  }

  traverseDFS(fn, node) {
    fn(node);
    for(let i = 0; i < node.children.length; i++) {
      this.traverseDFS(fn, node.children[i]);
    }
  }

  traverseDF(fn) {
    this.traverseDFS(fn, this.root);
  }
}

module.exports = { Tree, Node };

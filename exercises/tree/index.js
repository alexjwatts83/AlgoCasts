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
    const n = this.children.length -1;
    for(let i = n; i >= 0; i--) {
      let child = this.children[i];
      if (child.data === value) {

        const firstHalf = this.children.splice(0, i);
        const secondHalf = this.children.splice(i +1);
        this.children = [...firstHalf,...secondHalf];
        
        break;
      }
    }
  }
}

class Tree {}

module.exports = { Tree, Node };

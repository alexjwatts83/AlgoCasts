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

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    // console.log(this);
    // console.log(fn);
    let nodes = [];
    let node = this.root;
    // console.log({node:node, children: node.children});
    while(node != null) {
      nodes.push(node);
      console.log('adding: ' + node.data);
      console.log({ node:node });
      console.log({ children: node.children});
      let childsChildren = [];
      let n = node.children.length;
      for(let i = 0; i < n ; i++) {
        let child = node.children[i];
        console.log({ i:i,child:child });
        if (child.children.length > 0) {
          childsChildren.push(...child.children);
        }
        nodes.push(child);
        console.log('adding child: ' + child.data);
      }
      console.log({ childsChildren: childsChildren});
      node = childsChildren.shift();
    }
    while(nodes.length > 0) {
      let point = nodes.shift();
      fn(point);
    }
  }

  traverseChildrenBFS(fn, node) {
    let n = node.children.length;
    if (n > 0){
      fn(node);
    }
    
    for(let i = 0; i < n ; i++) {
      let child = node.children[i];
      fn(child);
      this.traverseChildrenBFS(fn, child);
    }
    // fn(node);
  }
}

module.exports = { Tree, Node };

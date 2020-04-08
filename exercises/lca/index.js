const Node = require('./node');
const Stack = require('./stack');

// lca(head1, 1, 5) should return 0
// lca(head1, 3, 1) should return 1
// lca(head1, 1, 4) should return 1
// lca(head1, 0, 5) should return 0
// lca(head2, 4, 7) should return 5
// lca(head2, 3, 3) should return 3
// lca(head2, 8, 7) should return 1
// lca(head2, 3, 0) should return null (0 does not exist in the tree)
function buildTree() {
  let node5 = new Node(5);
  let node1 = new Node(1);
  let node4 = new Node(4);
  let node3 = new Node(3);
  let node8 = new Node(8);
  let node9 = new Node(9);
  let node2 = new Node(2);
  let node6 = new Node(6);
  let node7 = new Node(7);
  node5.children.push(node1, node4);
  node1.children.push(node3, node8);
  node4.children.push(node9, node2);
  node3.children.push(node6, node7);

  return node5;
}
// This tree is:
//  head2 = 5
//        /   \
//       1     4
//      /\    / \
//     3  8  9  2
//    /\
//   6  7
function lca(node, i, j) {
  console.log({
    node: node,
    i: i,
    j: j,
  });
  let iStack = findNode(node, i, new Stack());
  console.log({
    iStack: iStack
  });
  return null;
}

function findNode(node, value, stack) {
  if (node === null) {
    return null;
  }
  stack.push(node);
  if (node.data === value) {
    return stack;
  }
}

module.exports = {
  lca: lca,
  buildTree: buildTree
};
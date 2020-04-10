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
//     3  8  9   2
//    /\
//   6  7
/*

All nodes unique
- if node is null return null
- if i does not exist return null
- if j does not exist return null
*/
function lca(node, i, j) {
  // console.log({
  //   node: node,
  //   i: i,
  //   j: j,
  // });
  
  const letNodeI = JSON.parse(JSON.stringify(node));
  const letNodeJ = JSON.parse(JSON.stringify(node));
  const letNode = JSON.parse(JSON.stringify(node));
  // console.log({
  //   letNodeI: letNodeI,
  //   letNodeJ: letNodeJ,
  //   letNode: letNode,
  // });


  // console.log('finding stack for ' + i)
  let jStack = findNode(letNodeI, j, new Stack());
  // console.log({
  //   letNodeI: letNodeI,
  //   letNodeJ: letNodeJ,
  //   letNode: letNode,
  // });
  // console.log('finding stack for ' + j)
  let iStack = findNode(letNodeJ, i, new Stack());
  
  console.log({
    iStack: iStack === undefined ? [] : iStack.data,
    jStack: jStack === undefined ? [] : jStack.data,
  });

  console.log(`Finding common level for '${i}' and '${j}'`)
  let common = findCommon(iStack.data, jStack.data);
  
  console.log(`Found common '${common}' for '${i}' and '${j}'`);

  // let level = 0;
  // let stack = [letNode];
  // while(stack.length > 0) {
  //   let currentNode = stack.shift();
  //   if (currentNode.data == common) {
  //     console.log(`returning ${level} found ${common}`);
  //     return level;
  //   }
  //   level++;
  //   stack.push(...currentNode.children);
  //   console.log(`incrementing level to ${level} with new children '${stack}'`);
  // }
  return common;
}
function findCommon(arr1, arr2) {
  // console.log({arr1, arr2});
  for(let i = arr1.length - 1; i >= 0; i--) {
    for(let j = arr2.length - 1; j >= 0; j--) {
      // console.log(`arr1[${i}] = ${arr1[i]}; arr2[${j}] = ${arr2[j]}`);
      if (arr1[i] === arr2[j]) {
        // console.log(`returning ${arr1[i]}`);
        return arr1[i];
      }
    }
  }
  return null;
}

function findNode(node, value, stack) {
  // console.log({
  //   findNode: 'findNode',
  //   node:node, value:value, stack:stack
  // })
  if (node === null) {
    // console.log('node is null returning stack');
    return stack;
  }
  stack.push(node.data);
  if (node.data === value) {
    // console.log('node.data === value, returning stack');
    return stack;
  }

  for(let i = 0; i < node.children.length; i++) {
    let child = node.children[i];
    // console.log({
    //   child: child,
    //   i: i,
    //   stack: stack
    // });
    stack.push(child.data);
    if (child.data === value) {
      // console.log('child.data === value, returning stack');
      return stack;
    }
    findNode(child, value, stack);
  }
  return stack;
}

module.exports = {
  lca: lca,
  buildTree: buildTree
};
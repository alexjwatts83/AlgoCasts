// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let divider = 'divide';
  let counters = [0];
  let nodes = [root, divider];
  
  
  while(nodes.length > 1) {
    let node = nodes.shift();

    if (node === divider) {
      counters.push(0);
      nodes.push(divider);
      continue;
    }

    nodes.push(...node.children);
    counters[counters.length -1]++;
  }
  console.log("----------------------", counters);
  return counters;
}

function levelWidthMe(root) {
  let counters = [];
  let nodes = [];
  let divider = 'divide';
  counters.push(0);
  nodes.push(root);
  nodes.push(divider);
  let node = nodes.shift();
  while(nodes.length > 0) {
    if (node.children.length > 0) {
      nodes.push(...node.children);
    }
    counters[counters.length -1] += 1;
    // console.log({node: node.data, counters, counters});
    node = nodes.shift();
    if (node === divider) {
      nodes.push(divider);
      // console.log({divider: node, counters, counters});
      node = nodes.shift();
      if (node === divider) {
        break;
      }
      counters.push(0);
    }
  }
  console.log("----------------------", counters);
  return counters;
}

function traverseDFRecursive(node, level, levels) {
  let n = node.children.length;
  if (n === 0) {
    return;
  }
  levels[level] = (levels[level] || 0) + n;
  level++;
  for(let i = 0; i < node.children.length; i++) {
    traverseDFRecursive(node.children[i], level, levels);
  }
  level--;
}

module.exports = levelWidth;

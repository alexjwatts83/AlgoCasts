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
  let levels = [];
  let level = 1;
  levels.push(1);
  traverseDFRecursive(root, level, levels);

  return levels;
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

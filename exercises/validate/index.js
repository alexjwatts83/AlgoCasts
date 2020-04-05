// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

// recursive solution
// All nodes to the left must be less then the max
// All nodes to the right must be greater than the min
// The given node must be within the range

function validate(node, min = null, max = null) {
  // check if the value is within range
  if (max !== null && node.data > max)
  {
    console.log(`!!! data > max ${node.data}, min = ${min} and max = ${max}`);
    return false;
  }

  if (min !== null && node.data < min) {
    console.log(`!!! data < min ${node.data}, min = ${min} and max = ${max}`);
    return false
  }

  // validate the left node
  if (node.left !== null && !validate(node.left, min, node.data)) {
    console.log(`<<< go left with ${node.left.data}, min = ${min} and max = ${max}`);
    return false;
  }

  // validate the right node
  if (node.right !== null && !validate(node.right, node.data, max)) {
    // call the validate on the right
    console.log(`>>> go right with ${node.right.data}, min = ${min} and max = ${max}`);
    return false;
  }

  console.log(`>><< within range ${node.data}, min = ${min} and max = ${max}`);
  return true;
}

module.exports = validate;

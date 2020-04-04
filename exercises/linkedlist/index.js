// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  insertFirst(value) {
    const node = new Node(value, null);
    if (this.head === null) {
      // console.log(`Adding '${value}' to head and tail`);
      this.head = node;
      this.tail = node;
      this.count++;
      // console.log(this.data);
      return;
    }
    // console.log(`replacing head with '${value}'`);
    const placeHolder = this.head;
    // console.log('before', node);
    node.next = placeHolder;
    // console.log('after', node);
    this.head = node;
    // console.log(this.data);
    this.count++;
  }
  size() {
    return this.count;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    return this.tail;
  }
}

module.exports = { Node, LinkedList };

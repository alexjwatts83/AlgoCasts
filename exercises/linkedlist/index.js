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
  }

  insertFirst(value) {
    this.head = new Node(value, this.head);
  }

  size() {
    let count = 0;
    let node = this.head;
    while(node !== null) {
      node = node.next;
      count++;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (this.head === null) {
      return null;
    }
    let node = this.head;
    while(node !== null) {
      if (node.next === null) {
        return node;
      }
      node = node.next;
    }
    return null;
  }

  clear() {
    while(this.head.next !== null) {
      const node = this.head.next;
      this.head = node;
    }
    this.head = null;
  }

  removeFirst() {
    if (this.head === null) {
      return;
    }
    
    this.head = this.head.next;
  }

  removeLast() {
    if (this.head === null) {
      return;
    }

    if (this.head.next === null) {
      this.head = null;
      return;
    }

    let prev = this.head;
    let node = this.head.next;
    
    while(node !== null) {
      if (node.next === null) {
        prev.next = null;
        break;
      }
      prev = node;
      node = node.next;
    }
  }
  insertLast(value) {
    const newNode = new Node(value, null);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    
    if (this.head.next === null) {
      this.head.next = newNode;
      return;
    }
    
    let node = this.head.next;
    
    while(node !== null) {
      if (node.next === null) {
        node.next = newNode;
        break;
      }
      node = node.next;
    }
  }
  getAt(index) {
    let counter = 0;
    let node = this.head;
    
    while(node !== null) {
      // console.log({
      //   when: 'before',
      //   node: node,
      //   counter: counter,
      //   index: index,
      //   match: counter === index
      // });
      if (counter === index) {
        return node;
      }
      node = node.next;
      counter++;
      // console.log({
      //   when: 'after',
      //   node: node,
      //   counter: counter,
      //   index: index
      // });
    }
    // console.log('returning null', this)
    return null;
  }

  removeAt(index) {
    if (index === 0 && this.head !== null) {
      const pointer = this.head.next;
      this.head = pointer;
      return;
    }
    let counter = 0;
    let node = this.head;
    let prev = null;
    while(node !== null) {
      if (counter === index) {
        let pointer = node.next;
        prev.next = pointer;
        node = pointer;
        break;
      }
      prev = node;
      node = node.next;
      counter++;
    }
  }

  insertAt(value, index) {
    const newNode = new Node(value, null);
    if (index === 0 && this.head !== null) {
      const pointer = this.head.next;
      this.head = newNode;
      this.head.next = pointer;
      return;
    }
    let counter = 0;
    let node = this.head;
    let prev = null;
    while(node !== null) {
      if (counter === index) {
        let pointer = node.next;
        prev.next = newNode;
        node = newNode;
        node.next = pointer;
        break;
      }
      prev = node;
      node = node.next;
      counter++;
    }
  }
  forEach() {
    return this.head
  }
}

module.exports = { Node, LinkedList };

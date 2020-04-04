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

    let node = this.getLast();
    node.next = newNode;
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    
    while(node !== null) {
      if (counter === index) {
        return node;
      }
      node = node.next;
      counter++;
    }

    return null;
  }

  removeAt(index) {
    if (this.head === null) {
      return;
    }
    if (index === 0 ) {
      this.head = this.head.next;
      return;
    }
    let prev = this.getAt(index - 1);
    if (prev === null){
      return;
    }
    if (prev.next === null){
      prev = null;
      return;
    }
    prev.next = prev.next.next;
  }

  insertAt(value, index) {
    if (index === 0) {
      this.head = new Node(value, this.head);
      return;
    }

    let prev = this.getAt(index - 1) || this.getLast();
    const node = new Node(value, prev.next);
    prev.next = node;
  }
  
  forEach() {
    return this.head
  }
}

module.exports = { Node, LinkedList };

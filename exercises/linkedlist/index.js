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
    // this.count = 0;
  }

  insertFirst(value) {
    const node = new Node(value, null);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      // this.count++;
      return;
    }

    const placeHolder = this.head;
    node.next = placeHolder;
    this.head = node;
    // this.count++;
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
    return this.tail;
  }
  clear() {
    while(this.head.next !== null) {
      const node = this.head.next;
      this.head = node;
      this.count--;
    }
    this.head = null;
    this.tail = null;
    // this.count--;
  }
  removeFirst() {
    const next = this.head.next;
    this.head = next;
    // this.count--;
  }
  removeLast() {
    let node = this.head;
    let prev = null;

    while(node !== null) {
      if (node.next === null) {
        break;
      }
      prev = node;
      node = node.next;
    }
    
    this.tail = prev;

    if (this.tail === null) {
      this.head = null;
    } else {
      this.tail.next = null;
    }
    // this.count--;
  }
  insertLast(value) {
    const newNode = new Node(value, null);

    let lastNode = this.head;
    let secondLastNode = null;

    while(lastNode !== null) {
      if (lastNode.next === null) {
        break;
      }
      secondLastNode = lastNode;
      lastNode = lastNode.next;
    }
  
    // console.log({
    //   value: value,
    //   secondLastNode: secondLastNode,
    //   lastNode: lastNode,
    //   this: this,
    //   size: this.size()
    // });

    if (secondLastNode === null) {
      if (this.head === null) {
        // console.log('head is null');
        this.head = newNode;
      } else {
        // console.log('head is not null, setting next');
        this.head.next = newNode;
      }
      this.tail = newNode;
      // console.log({head: this.head,tail: this.tail});
    } else {
      // console.log('secondLastNode !== null');
      secondLastNode = lastNode;
      secondLastNode.next = newNode;
      this.tail = newNode;
      // console.log({head: this.head,tail: this.tail});
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
}

module.exports = { Node, LinkedList };

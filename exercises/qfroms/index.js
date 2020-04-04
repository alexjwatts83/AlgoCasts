// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  add(num) {
    // FIFO
    this.stack1.push(num);
  }
  remove(){
    /* Remove First Entry */

    // Empty the first stack to get the first value
    while(this.stack1.peek() !== undefined) {
      this.stack2.push(this.stack1.pop());
    }

    // Pop from stack2 to get the first value entered
    let first = this.stack2.pop();
    
    // re-add the values back into the first stack
    while(this.stack2.peek() !== undefined) {
      this.stack1.push(this.stack2.pop());
    }

    return first;
  }
  peek() {
    /* view First Entry */

    // Empty the first stack to get the first value
    while(this.stack1.peek() !== undefined) {
      this.stack2.push(this.stack1.pop());
    }

    // peek at the last entered value to get the first entered
    // in from stack1
    let first = this.stack2.peek();
    
    // re-add the values back into the first stack
    while(this.stack2.peek() !== undefined) {
      this.stack1.push(this.stack2.pop());
    }
    return first;
  }
}

module.exports = Queue;

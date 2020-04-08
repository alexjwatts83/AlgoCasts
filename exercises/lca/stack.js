class Stack {
  constructor() {
    this.data = [];
  }
  push(num) {
    this.data.push(num);
  }
  pop() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length-1];
  }
}

module.exports = Stack;
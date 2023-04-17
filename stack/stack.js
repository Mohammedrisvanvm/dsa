class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "No elements in Stack";
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }
  isfull() {
    return this.elements.length === this.capacity;
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop(); // returns 3
stack.pop(); // returns 2
stack.peek(); // returns 1
stack.isEmpty(); // returns false
stack.printStack(); // returns "1 "

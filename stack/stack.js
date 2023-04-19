class Stack {
  constructor() {
    this.items = [];
    this.capacity = 5; // Added capacity for isfull() method
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
  
  isFull() {
    return this.items.length === this.capacity; // Fixed isfull() method
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
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.pop());
// console.log(stack.pop());
console.log(stack.peek(),11);
console.log(stack.isFull(),22); // Fixed method call
console.log(stack.isEmpty(),33); // returns false
console.log(stack.printStack(),44); // returns "1 "

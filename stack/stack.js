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
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isFull()); 
console.log(stack.isEmpty());
console.log(stack.printStack());

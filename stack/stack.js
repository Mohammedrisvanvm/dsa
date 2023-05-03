class Stack {
  constructor(size) {
    this.items = [];
    this.capacity = size; // Added capacity for isfull() method
  }

  push(element) {
    if(this.items.length==this.capacity){
      return " stack is full"
    }
    this.items.push(element);
    return true
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

let stack = new Stack(5);
console.log(stack.push(1));
console.log(stack.push(1));
console.log(stack.push(1));
console.log(stack.push(1));
console.log(stack.push(1));
console.log(stack.push(1));
console.log(stack.push(1));
console.log(stack.push(1));
console.log(stack.push(1));
console.log(stack.push(1));
console.log(stack.push(1));
console.log(stack.push(1));
console.log(stack.printStack());

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isFull()); 
console.log(stack.isEmpty());
console.log(stack.printStack());

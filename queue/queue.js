class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length == 0;
  }
  isFull(capacity) {
    return this.items.length === capacity;
  }
  printQueue() {
    if (this.isEmpty()) {
      return "No elements in queue";
    }
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}
let queue = new Queue();
console.log();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // returns 1
console.log(queue.dequeue()); // returns 2
console.log(queue.dequeue()); // returns 3
console.log(queue.peek()); // returns 3
console.log(queue.isFull(5));
console.log(queue.isEmpty()); // returns false
console.log(queue.printQueue()); // returns "3 "


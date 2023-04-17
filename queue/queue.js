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
      let str = "";
      for (let i = 0; i < this.items.length; i++) {
        str += this.items[i] + " ";
      }
      return str;
    }
  }
  let queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.dequeue(); // returns 1
  queue.dequeue(); // returns 2
  queue.peek(); // returns 3
  queue.isEmpty(); // returns false
  queue.printQueue(); // returns "3 "
  console.log(queue);
    
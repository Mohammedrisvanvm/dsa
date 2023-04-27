class Queue {
  constructor(data) {
    this.items = [];
    this.size=data

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
    if(this.isEmpty()) {
      return "No elements in Queue";
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length == 0;
  }
  isFull(capacity) {
    return this.items.length ===capacity;
  }
  insertAtPosition(element, position) {
    if (position >= this.items.length) {
      this.items.push(element);
    } else {
      this.items.splice(position, 0, element);
    }
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

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // returns 1
queue.enqueue(1);

console.log(queue.dequeue()); // returns 2
console.log(queue.dequeue()); // returns 3
console.log(queue.peek()); // returns 3
console.log(queue.isFull());
console.log(queue.isEmpty()); // returns false
console.log(queue.printQueue()); // returns "3 "



// class Node{
//     constructor (data){
//         this.data = data;
//         this.next = null;
//     }
// }
// class queue{
//     constructor(){
//         this.front = null;
//         this.rear = null;
//     }
//     enque(data){
//         let newNode = new Node (data);
//         if (this.front == null){
//             this.front = this.rear = newNode;
//         }else{
//             this.rear.next = newNode;
//             this.rear = newNode;
//         }
//     }
//     deque(){
//         let temp = this.front;
//         if (this.front ==null){
//             console.log("its empty.");
//         }else{
//             this.front = temp.next;
//         }
//     }
//     display(){
//         let temp = this.front;
//         if (temp == null){
//             console.log("empty......");
//         }
//         while(temp != null){
//             console.log(temp.data);
//             temp = temp.next;
//         }
//     }
// }

// let obj = new queue();
// obj.display();
// obj.enque(10);
// obj.enque(20);
// obj.enque(30);
// obj.enque(40);
// obj.enque(50);
// obj.display();
// obj.deque();
// obj.deque();
// obj.display();
class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  insertAtBeginning(data) {
    const newNode = new Node(data);
    newNode.next = this.head;

    if (this.head) {
      this.head.prev = newNode;
    }

    this.head = newNode;
  }
  // insertAtBeginning(data){
  //     const newNode = new Node(data);
  //     if(this.head === null){
  //         this.head =newNode;
  //         this.tail = newNode;
  //     }else{
  //         newNode.next = this.head;
  //         this.head.prev = newNode;
  //         this.head = newNode;
  //     }
  //     this.length++
  // }
}
let ll = new DoublyLinkedList();
ll.insertAtBeginning(5);
ll.insertAtBeginning(10);
ll.insertAtBeginning(15);
ll.insertAtBeginning(20);

console.log(ll);

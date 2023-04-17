class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
 
  }


  insertAtBeginning(data) {
    console.log(data);
    let newNode = new Node(data);
    console.log(newNode);
    newNode.next = this.head;
    this.head = newNode;
  
 
  }
}


let ll = new LinkedList();
ll.insertAtBeginning(5);
ll.insertAtBeginning(10);
//ll.insertAtBeginning(15);
console.log(ll);

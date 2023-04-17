class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
   
    insertAtEnd(data) {
      const newNode = new Node(data); 
      let current = this.head; 
  //console.log(newNode);
 // console.log(current,11);
     
      if (!current) {
        this.head = newNode;
      } else {
        
        while (current.next) {
          current = current.next;
          console.log(current);
          //console.log( this.head);
        }
  
     
        current.next = newNode;
      }
  
      this.size++;
      console.log(this.head);
     // console.log(this.size);
    
    }
  
  }
  let ll = new LinkedList();
  
  ll.insertAtEnd(5);
  ll.insertAtEnd(10);
   ll.insertAtEnd(15);
  
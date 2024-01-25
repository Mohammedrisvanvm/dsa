
class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  

    insertAtBeginning(data) {
      let newNode = new Node(data);
      
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }

      this.size++;
    }
  
    insertAtEnd(data) {
      let newNode = new Node(data);
  
      if (!this.tail) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
  
      this.size++;
    }
  
    insertAtPosition(data, position) {
      if (position < 0 || position > this.size) {
        throw new Error('Invalid position');
      }
  
      if (position === 0) {
        this.insertAtBeginning(data);
      } else if (position === this.size) {
        this.insertAtEnd(data);
      } else {
        let newNode = new Node(data);
        let currentNode = this.head;
        let count = 0;
  
        while (count < position - 1) {
          currentNode = currentNode.next;
          count++;
        }
  
        newNode.next = currentNode.next;
        newNode.prev = currentNode;
        currentNode.next.prev = newNode;
        currentNode.next = newNode;
  
        this.size++;
      }
    }
  
    removeFromBeginning() {
      if (!this.head) {
        return null;
      }
  
      let removedNode = this.head;
  
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
  
      this.size--;
  
      return removedNode.data;
    }
  
    removeFromEnd() {
      if (!this.tail) {
        return null;
      }
  
      let removedNode = this.tail;
  
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
  
      this.size--;
  
      return removedNode.data;
    }
  
    removeFromPosition(position) {
      if (position < 0 || position >= this.size) {
        throw new Error('Invalid position');
      }
  
      if (position === 0) {
        return this.removeFromBeginning();
      } else if (position === this.size - 1) {
        return this.removeFromEnd();
      } else {
        let currentNode = this.head;
        let count = 0;
  
        while (count < position) {
          currentNode = currentNode.next;
          count++;
        }
  
        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
  
        this.size--;
  
        return currentNode.data;
      }
    }
  
    toArray() {
      let array = [];
      let currentNode = this.head;
  
      while (currentNode) {
        array.push(currentNode.data);
        currentNode = currentNode.next;
      }
  
      return array;
    }
  }
 let ll=new DoublyLinkedList()
 ll.insertAtBeginning(5)
 ll.insertAtBeginning(10)
console.log(ll);
  console.log(ll.toArray());
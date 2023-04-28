class Node {
    constructor(key, value) {
      this.key = key;
      this.value = value;
      this.next = null;
    }
  }
  
  class SeparateChainingHashTable {
    constructor(size) {
      this.size = size;
      this.table = new Array(size);
    }
  
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.size;
    }
  
    set(key, value) {
      const index = this.hash(key);
      if (!this.table[index]) {
        this.table[index] = new Node(key, value);
      } else {
        let currentNode = this.table[index];
        while (currentNode.next && currentNode.key !== key) {
          currentNode = currentNode.next;
        }
        if (currentNode.key === key) {
          currentNode.value = value;
        } else {
          currentNode.next = new Node(key, value);
        }
      }
    }
  
    get(key) {
      const index = this.hash(key);
      let currentNode = this.table[index];
      while (currentNode) {
        if (currentNode.key === key) {
          return currentNode.value;
        }
        currentNode = currentNode.next;
      }
      return null;
    }
  
    remove(key) {
      const index = this.hash(key);
      let currentNode = this.table[index];
      let prevNode = null;
      while (currentNode) {
        if (currentNode.key === key) {
          if (!prevNode) {
            this.table[index] = currentNode.next;
          } else {
            prevNode.next = currentNode.next;
          }
          return true;
        }
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      return false;
    }
  }
  
  const hash = new SeparateChainingHashTable(10);
  hash.set("hai", 1);
  hash.set("hai", 2);
  hash.set("hai", 3);
  hash.set("hai", "hai");
  hash.set("hai", 4);
  hash.set("hai", 6);
  hash.set("hai", 8);
  hash.set("hai", 9);
  hash.set("hai", 7);
  hash.set("hai", 0);
  hash.set("hi", 9);
  hash.set("ha", 7);
  hash.set("hi", 0);
  hash.remove("hai");
  hash.remove("hi");
  console.log(hash.get("hai"));
  
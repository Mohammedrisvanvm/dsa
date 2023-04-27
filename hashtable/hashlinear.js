class HashTable {
    constructor(size) {
      this.table = new Array();
      this.size = size;
    }
  
    hash(key) {
      let val = 0;
      for (let i = 0; i < key.length; i++) {
        val += key.charCodeAt(i);
      }
  
      return val % this.size;
    }
  
    set(key, value) {
      let index = this.hash(key);
  
      while (this.table[index]) {
        index = (index + 1) % this.size;
      }
      this.table[index] = { key, value };
    }
    get(key) {
      let index = this.hash(key);
      console.log(index);
      while (this.table[index]) {
        if (this.table[index].key == key) {
          return this.table[index].value;
        }
        index = (index + 1) % this.size;
      }
      return -1;
    }
    display() {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[i]) {
          console.log(i, this.table[i]);
        }
      }
    }
  }
  
  let hash = new HashTable(10);
  hash.set("hai", 1);
  hash.set("hai", 2);
  hash.set("hai", 3);
  hash.set("hai", 1);
  hash.set("hai", 2);
  hash.set("hai", 3);
  hash.set("hai", 1);
  hash.set("hai", 2);
  hash.set("hai", 1);
  hash.set("hai", 2);
  
  console.log(hash.get("hai"));
  hash.display();
  
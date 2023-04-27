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
  
      // Check if the key already exists in the table
      if (this.table[index]) {
        // If the key exists, check if the value already exists in the array
        let values = this.table[index].value;
  
        if (!values.includes(value)) {
          // If the value doesn't exist in the array, add it to the array
          values.push(value);
        }
      } else {
        // If the key doesn't exist, create a new array with the value and set it in the table
        this.table[index] = { key, value: [value] };
      }
    }
  
    get(key) {
      let index = this.hash(key);
  
      while (this.table[index]) {
        if (this.table[index].key == key) {
          return this.table[index].value;
        }
        index = (index + 1) % this.size;
      }
      return -1;
    }
    remove(key, value) {
      const index = this.hash(key);
      
      if (this.table.hasOwnProperty(index)) {
        const values = this.table[index].value;
        
        for (let i = 0; i < values.length; i++) {
          if (values[i] === value) {
            // Remove the value from the array
            values.splice(i, 1);
    
            // If the array is now empty, remove the key from the table
            if (values.length === 0) {
              delete this.table[index];
            }
    
            return true;
          }
        }
      }
      
      return false;
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
  hash.remove("hai", "hai")
  hash.remove("hi", 0)
  
  console.log(hash.get("hai"));
  hash.display();
  
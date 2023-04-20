class HashTable {
    constructor() {
      this.table = {};
    }
  
    // Hash function to generate a hash code
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash;
    }
  
    // Insert a key-value pair into the hash table
    insert(key, value) {
      const hashKey = this.hash(key);
      if (!this.table.hasOwnProperty(hashKey)) {
        this.table[hashKey] = {};
      }
      this.table[hashKey][key] = value;
    }
  
    // Retrieve a value from the hash table by key
    get(key) {
      const hashKey = this.hash(key);
      if (this.table.hasOwnProperty(hashKey) && this.table[hashKey].hasOwnProperty(key)) {
        return this.table[hashKey][key];
      }
      return null; // Return null if key is not found
    }
  
    // Remove a key-value pair from the hash table by key
    remove(key) {
      const hashKey = this.hash(key);
      if (this.table.hasOwnProperty(hashKey) && this.table[hashKey].hasOwnProperty(key)) {
        delete this.table[hashKey][key];
        return
      }
      return "can't find key"
    }
  
    // Check if a key exists in the hash table
    contains(key) {
      const hashKey = this.hash(key);
      return this.table.hasOwnProperty(hashKey) && this.table[hashKey].hasOwnProperty(key);
    }
    
    // Get all keys in the hash table
    keys() {
      const allKeys = [];
      for (const hashKey in this.table) {
        for (const key in this.table[hashKey]) {
          allKeys.push(key);
        }
      }
      return allKeys;
    }
  
    // Get all values in the hash table
    values() {
      const allValues = [];
      for (const hashKey in this.table) {
        for (const key in this.table[hashKey]) {
          allValues.push(this.table[hashKey][key]);
        }
      }
      return allValues;
    }
  
    // Get the size of the hash table
    size() {
      let count = 0;
      for (const hashKey in this.table) {
        for (const key in this.table[hashKey]) {
          count++;
        }
      }
      return count;
    }
  
    // Clear all key-value pairs in the hash table
    clear() {
      this.table = {};
    }
  }
  

  let hash=new HashTable()
  hash.insert("hai",10)
  hash.insert("hal",10)
  hash.insert("hallo",10)
console.log(hash.get("hai"),11);
console.log(hash.remove("hail"),66);
console.log(hash.contains("hallo"),22);
console.log(hash.keys(),33);
console.log(hash.values,44);
console.log(hash.size(),55);
class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.table.hasOwnProperty(index)) {
      this.table[index] = [{ key, value: [value] }];
    } else {
      let found = false;
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i].key === key) {
          this.table[index][i].value.push(value);
          found = true;
          break;
        }
      }
      if (!found) {
        this.table[index].push({ key, value: [value] });
      }
    }
  }
  

  get(key) {
    const index = this.hash(key);
    if (this.table.hasOwnProperty(index)) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i].key === key) {
          return this.table[index][i].value;
        }
      }
    }
    return undefined;
  }

  remove(key, value) {
    const index = this.hash(key);
    console.log(index);
    if (this.table.hasOwnProperty(index)) {
      for (let i = 0; i < this.table[index].length; i++) {
        console.log(this.table[index][i].value,value);
        if (
          this.table[index][i].key === key &&
          this.table[index][i].value === value
        ) {
          console.log(this.table[index][i], 2222222222222222);
          this.table[index][i].splice(i, 1);
          break;
        }
      }
    }
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
hash.set("first", 11);
hash.set("firs", 12);
hash.set("fit", 13);
hash.set("fit", 14);

console.log(hash.get("first"));
console.log(hash.get("firs"));
console.log(hash.get("fit"));
console.log(hash.remove("fit", 13));


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
 set(key,value){
    const index=this.hash(key)
    if(!this.table[index]){

        this.table[index]=value
        return
    }
 }
 get(key){
    const index=this.hash(key)
    return this.table[index]
 }

}
let hash = new HashTable(10);
hash.set(2,11)
hash.set(2,11)

console.log(hash.get(2));

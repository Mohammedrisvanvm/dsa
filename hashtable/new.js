class stack {
  constructor(size) {
    this.items = [];
    this.size = size;
  }
  push(value) {
    this.items.push(value);
  }
  pop(value) {
    this.items.pop(value);
  }
  deleteAtposition(position) {
    for (let i = 0; i < this.items.length; i++) {
      if (i == position - 1) {
       this.items.splice(i, 1);
      }
    }
    
  }
  display(){
    for(let i=0;i<this.items.length;i++){
        console.log(i,this.items[i]);
    }
  }
}
let n=new stack(5)
n.push(5)
n.push(8)
n.push(7)
console.log(n.deleteAtposition(2));
n.display()


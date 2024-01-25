// class Node{
//   constructor(data){
//     this.data=data
//     this.next=null
//   }
// }

// class LinkedList{

//   constructor(){
//     this.head=null

//   }

// insertAtbeginning(data){

//   let newNode=new Node(data)

//   newNode.next=this.head
//   this.head=newNode
// }
// insertAtEnd(data){
//   let newNode=new Node(data)
//   let current=this.head
//   if (!current) {
    
//     this.head=newNode
    
//   }else{
//     while(current.next){
//      current= current.next
//     }
//     current.next=newNode
//   }
 
// }

// }

// let ll=new LinkedList()
// ll.insertAtbeginning(1)
// ll.insertAtEnd(7)
// ll.insertAtbeginning(2)
// ll.insertAtEnd(3)
// ll.insertAtbeginning(1)
// console.log(ll);



//move to right

let arr=[1,2,5,4,1,2,5,8,7,9,1]
const target=1


function moveToRight(arr,target){

for(let i=0;i<arr.length-1;i++){
  if (arr[i]==target) {
  
    let temp=0
  for (let j = arr.length-1; j >= i; j--) {
   
    if (target!=arr[j]) {
      temp=arr[i]
      arr[i]=arr[j]
      arr[j]=temp
  
      break
    }
  
      
    }
    
  }
}
return arr
}

let result=moveToRight(arr,target)
console.log(result)
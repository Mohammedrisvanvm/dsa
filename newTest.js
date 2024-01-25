// function f(n) {
//   if (n <= 1) {
//     return 1;
//   }
//   f(n - 1);

//   console.log(n,111);

//   f(n - 1);
//   console.log(n,2222);
// }
// f(5);

function f(data) {
  if (data === 0) {
    return 1;
  } else {
    return data * f(data - 1);
  }
}
console.log(f(5));

// // const LowestCount=(amount,note)=>{
// // let count=0
// // note.sort((a,b)=>b-a)
// // let i=0
// // while(amount>0){
// //     if(amount>=note[i]){
// //   const vcount= Math.floor(amount/note[i])
// //   count=count+vcount
// //   amount=amount-(vcount*note[i])
// //     }
// //   i++
// // }
// //   return count
// // }

// // const amount =499
// // const notes =[5,10,20,50,100,500,2,1]

// // const count=LowestCount(amount,notes)

// // console.log(count)

// let value1="11"
// let value2="123"
// function sum(value1,value2){
// const biglen=value1.length>value2.length ? value1.length:value2.length
// let reminder=0
// let arr=[]
// for(let i=0;i<biglen;i++){
//     if(value1[i]&&value2[i]){
//     const total=+value1[i] + +value2[i]+reminder
//       console.log(total)
//     arr.unshift(total%10)
//     reminder=Math.floor(total/10)
// }else if(value1[i]){

//      const total=+value1[i] +reminder
//       console.log(total)
//      if(total>=10){
//       arr.unshift(total%10)
//     reminder=Math.floor(total/10)
//      }else{
//         arr.unshift(total) 
//         reminder=0
//      }
// }else if(+value2[i]){
//     const total=+value2[i] +reminder
//       console.log(total)
//      if(total>=10){
//       arr.unshift(total%10)
//     reminder=Math.floor(total/10)
//      }else{
//         arr.unshift(total) 
//         reminder=0
//      }
// }
// }
//  return arr.join("") 
// }
//  console.log(BigInt(value1)+BigInt(value2))
//  console.time("start")
// console.log(sum(value1.split('').reverse(),value2.split('').reverse()))
// console.timeEnd("start");

// const arr=[1,2,1,2,3]
// let a=0
// for(i in arr){
//     a ^= arr[i
// }
const arr=[[0,0],[1,1],[0,0]]
let max=0
let index=0

for(i in arr){
   let inArr=arr[i]
   let count=0
   for(j in inArr){
       if(inArr[j]==1){
           count ++
       }
   }
   if(count>max){
      max=count
      index=i
   }
    
}
console.log(index,max)

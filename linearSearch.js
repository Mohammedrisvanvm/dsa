// function search(arr,target){
//     for(let i=0;i<arr.length;i++){
//       if(arr[i]==target){
//         return "at "+ (i+1)+"th position" ;
//       }
//     }
//     return "not found"
// }
// console.log(search([1,6,2,3,5,4],2))




let names = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve'];
let target = 'hai';
let found = false;
for (let i = 0; i < names.length; i++) {
  if (names[i] === target) {
    found = true;
    break;
  }
}
if (found) {
    console.log("Element found in the array.");
} else {
 console.log("Element not found in the array.");
}
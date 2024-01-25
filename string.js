//change at all


// function change(str,key){
//     let newKey=key%26
  
//     let str1=str.split("")

//     for (let i = 0; i < str1.length; i++) {
//        let charCode=str[i].charCodeAt(0)
//         const newCharCode=charCode+newKey
//         str1[i] = String.fromCharCode(newCharCode);

//     }
//     return str1.join('');

// }
// console.log(change("hai",28))




















//change at a position

// function change(str,key,pos){
//     let newKey=key%26
  
//     let str1=str.split("")

//     for (let i = 0; i < str1.length; i++) {
//         if(i==pos-1){
//        let charCode=str[i].charCodeAt(0)
//         const newCharCode=charCode+newKey
//         str1[i] = String.fromCharCode(newCharCode);
//         }
//     }
//     return str1.join('');

// }
// console.log(change("hai",28,1)); 


//change at end

// function change(str,key,pos){
//     let newKey=key%26
  
//     let str1=str.split("")

//     for (let i = 0; i < str1.length; i++) {
//         if(i>=pos-1){
//        let charCode=str[i].charCodeAt(0)
//         const newCharCode=charCode+newKey
//         str1[i] = String.fromCharCode(newCharCode);
//         }
//     }
//     return str1.join('');

// }
// console.log(change("hai",28,2)); 


 
// JavaScript program for Left Rotation and Right
// Rotation of a String
 
// Function that rotates s towards left by d
function leftrotate(str, d) 
{
    var ans = str.substring(d, str.length) + str.substring(0, d);
    return ans;
}
 
// Function that rotates s towards right by d
function rightrotate(str, d)
{
    return leftrotate(str, str.length - d);
}
var str1 = "GeeksforGeeks";
console.log(str1)
console.log(leftrotate(str1,4))
console.log(rightrotate(str1,4))
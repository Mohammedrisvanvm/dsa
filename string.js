//change at all


function change(str,key){
    let newKey=key%26
  
    let str1=str.split("")

    for (let i = 0; i < str1.length; i++) {
       let charCode=str[i].charCodeAt(0)
        const newCharCode=charCode+newKey
        str1[i] = String.fromCharCode(newCharCode);

    }
    return str1.join('');

}
console.log(change("hai",28))




















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

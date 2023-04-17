







// function fibonacci(num) {
//     const fib=[0,1]
//      for (let i = 2; i < num; i++) {
       
   
//      fib[i]= fib[i - 1] + fib[i - 2];
//      }
//      return fib
//   }

// //   console.log(fibonacci(2));
//   console.log(fibonacci(10));
  
//   function fibonacci(num) {
//     if (num === 0) return 0;
//     if (num <= 2) return 1;
//     return fibonacci(num - 1) + fibonacci(num - 2);
//   }
  
//   // To print the first 10 numbers in the sequence starting with 0
//   for (let i = 0; i < 10; i++) {
//     console.log(fibonacci(i));
//   }



// function factorial(n) {
//     let fact=1
//     for (let i =1; i <=n; i++) {
    
//         fact =fact*i
        
//     }
//     return fact
// }


// console.log(factorial(5));


function prime(n) {
    if (n<2) {
        return "prime"
    }
for (let i =2; i <=n/2; i++) {
    console.log(n,i);
if ( n%i==0) {
    return "not prime"
}

  
}
return "prime"
  
}


console.log(prime(9));







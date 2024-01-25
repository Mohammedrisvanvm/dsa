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

// function prime(n) {
//     if (n<2) {
//         return "prime"
//     }
// for (let i =2; i <=n/2; i++) {
//     console.log(n,i);
// if ( n%i==0) {
//     return "not prime"
// }

// }
// return "prime"

// }

// console.log(prime(9));

let arr = [-5, -1, -2, -5, -5];
console.log(large(arr));
function large(arr) {
  let largest = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
      if (largest < sum) {
        largest = sum;
      }
    }
  }
  return largest;
}

function factorial(num) {
  if (num == 0 || num == 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

console.log(factorial(5));

function ispalindrome(string) {
  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] !== string[string.length - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(ispalindrome("ma"));

const a = [1, 2, 3, 4, 5, 6, 6];

const map = a.map((n) => n * 2);
const reduce = a.reduce((acc, curr) => acc + curr, 0);
const filter = a.filter((n) => n % 2 != 0);
filter.push(1);
console.log(map, reduce, filter, a);

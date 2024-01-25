function large(num) {
  let large = num[0];
  for (let i = 1; i < num.length - 1; i++) {
    if (large < num[i]) {
      large = num[i];
    }
  }
  return large;
}

let arr = [-5, -1, -2, -5, -5];
console.log(large(arr));
function fibonacci(num) {
  const fib = [0, 1];
  for (let i = 2; i < num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

//   console.log(fibonacci(2));
console.log(fibonacci(2));

function thirdLargest(arr) {
  let first = 0;
  let second = 0;
  let third = 0;

  for (let i = 0; i < arr.length; i++) {
    if (first < arr[i]) {
      third = second;
      second = first;
      first = arr[i];
    } else if (second < arr[i] && arr[i] !== first) {
      third = second;
      second = arr[i];
    } else if (third < arr[i] && arr[i] !== second && arr[i] !== first) {
      third = arr[i];
    }
  }
  return third;
}
const numbers = [5, 10, 8, 15, 3, 7];
console.log(thirdLargest(numbers));

console.log(numbers.sort((a,b)=>a-b));
console.log(numbers.sort((a,b)=>b-a));
function sum(){
  return (b)=>{
    return (c)=>{
      return a+b+c
    }
  }
}

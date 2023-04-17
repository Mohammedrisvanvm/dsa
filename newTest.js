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

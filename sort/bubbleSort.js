//compare with very next element
const numbers=[5, 45, 6, 7, 4, 3, 7, 34, 5, 7, 3]
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      console.log(j);
      if (arr[j] > arr[j + 1]) {
        console.log(j,"entered");
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    break
  }
  return arr;
}
console.log(bubbleSort(numbers));

console.log(Math.max.apply(null,numbers));
console.log(Math.max(numbers));

let arr = [4, 5, 10, 1, 6, 2];

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    console.log(temp,"temp")
    let j = i - 1;
    console.log(j,"j")
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      console.log(arr[j],"arr[j]")
      j--;
    }
    arr[j + 1] = temp;
    console.log(i,"i")
  }
  return arr;
}
console.log(insertionSort(arr));

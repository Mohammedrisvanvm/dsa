function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp
    if (min!=i) {
        temp=arr[i]
        arr[i]=arr[min]
        arr[min]=temp
        
    }
  }
  return arr
}
console.log(selectionSort([5, 45, 6, 7, 4, 3, 7, 34, 5, 7, 3]))

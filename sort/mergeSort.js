let arr = [5, 45, 6, 7, 4, 3, 7, 34, 5, 7, 3];
let lb = 0;
let ub = arr.length - 1;
console.log(mergeSort(arr, lb, ub));

function mergeSort(arr, lb, ub) {
  if (lb < ub) {
    let mid = Math.floor((lb + ub) / 2);
    mergeSort(arr, lb, mid);
    mergeSort(arr, mid + 1, ub);
    merge(arr, lb, mid, ub);
  }
  return arr;
}

function merge(arr, lb, mid, ub) {
  let i = lb;
  let j = mid + 1;
  let k = lb;
  let b = [];
  while (i <= mid && j <= ub) {
    if (arr[i] <= arr[j]) {
      b[k] = arr[i];
      i++;
    } else {
      b[k] = arr[j];
      j++;
    }
    k++;
  }
  if (i > mid) {
    while (j <= ub) {
      b[k] = arr[j];
      j++;
      k++;
    }
  } else {
    while (i <= mid) {
      b[k] = arr[i];
      i++;
      k++;
    }
  }
  for (let k = lb; k <= ub; k++) {
    arr[k] = b[k];
  }
  return arr;
}

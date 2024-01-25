
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 4, 4, 1, 2, 3, 3];
// console.log(lucky(arr));
// function lucky(arr) {
//   let lucky = 0;
//   let arr1 = arr.sort();

//   for (let i = 0; i < arr1.length; i++) {
//     let count = 0;
//     for (let j = 0; j < arr1.length; j++) {
//       if (arr1[i] == arr1[j]) {
//         count++;
//       }
//     }
//     if (arr1[i] == count) {
//       if (lucky < count) {
//         lucky = count;
//       }
//     }
//   }

//   return lucky;
// }
// let arr = [5, 45, 6, 7, 4, 3, 7, 34, 5, 7, 3];
// let lb = 0;
// let ub = arr.length - 1;
// function quickSort(arr, lb, ub) {
//   if (lb < ub) {
//     let result = partition(arr, lb, ub);
//     quickSort(arr, lb, result - 1);
//     quickSort(arr, result + 1, ub);
//   }
//   return arr;
// }

// function partition(arr, lb, ub) {
//   let pivot = arr[lb];
//   let start = lb;
//   let end = ub;

//   while (start < end) {
//     while (arr[start] <= pivot) {
//       start++;
//     }
//     while (arr[end] > pivot) {
//       end--;
//     }
//     if (start < end) {
//       let temp = arr[start];
//       arr[start] = arr[end];
//       arr[end] = temp;
//     }
//   }
//   let temp = arr[lb];
//   arr[lb] = arr[end];
//   arr[end] = temp;

//   return end;
// }
// console.log(quickSort(arr, lb, ub));
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

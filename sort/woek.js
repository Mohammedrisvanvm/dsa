let arr = [5, 45, 6, 7, 4, 3, 7, 34, 5, 7, 3];

// console.log(insertionSort(arr));
// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let temp = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > temp) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j+1] = temp;
//   }
//   return arr;
// }
// console.log(bubbleSort(arr));
// function bubbleSort(arr){
//   for(i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length-1-i;j++){
//       if(arr[j]>arr[j+1]){
//        let temp=arr[j]
//         arr[j]=arr[j+1]
//         arr[j+1]=temp

//       }
//     }
//   }
//   return arr
// }
// console.log(selectionSort(arr));
// function selectionSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let min = i;
//     for (j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[min]) min = j;
//     }
//     if (min != i) {
//       let temp = arr[i];
//       arr[i] = arr[min];
//       arr[min] = temp;
//     }
//   }
//   return arr;
// }

let lb = 0;
let ub = arr.length - 1;
// console.log(quickSort(arr, lb, ub));
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






// console.log(mergeSort(arr, lb, ub));

// function mergeSort(arr, lb, ub) {
//   if (lb < ub) {
//     let mid = Math.floor((lb + ub) / 2);
//     mergeSort(arr, lb, mid);
//     mergeSort(arr, mid + 1, ub);
//     merge(arr, lb, mid, ub);
//   }
//   return arr;
// }

// function merge(arr, lb, mid, ub) {
//   let i = lb;
//   let j = mid + 1;
//   let k = lb;
//   let b = [];
//   while (i <= mid && j <= ub) {
//     if (arr[i] <= arr[j]) {
//       b[k] = arr[i];
//       i++;
//     } else {
//       b[k] = arr[j];
//       j++;
//     }
//     k++
//   }
//   if (i > mid) {
//     while (j <= ub) {
//       b[k] = arr[j];
//       i++;
//       k++;
//     }
//   } else {
//     while (i <= mid) {
//       b[k] = arr[i];
//       i++;
//       k++;
//     }
//   }
//   for (let k = lb; k <= ub; k++) {
//     arr[k] = b[k];
//   }
//   return arr;
// }
class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push({ key, value });
  }

  get(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      const chain = this.table[index];
      for (let i = 0; i < chain.length; i++) {
        if (chain[i].key === key) {
          return chain[i].value;
        }
      }
    }
    return undefined;
  }
  
  remove(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      const chain = this.table[index];
      for (let i = 0; i < chain.length; i++) {
        if (chain[i].key === key) {
          chain.splice(i, 1);
          return;
        }
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

let hash = new HashTable(10);
hash.set("first", 11);
hash.set("firs", 12);
hash.set("fit", 13);
hash.set("fit", 14);

console.log(hash.get("first"));
console.log(hash.get("firs"));
console.log(hash.get("fit"));
hash.remove("fit", 13);
hash.display();

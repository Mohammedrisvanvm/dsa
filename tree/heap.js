let arr = [10, 15, 30, 8, 9, 4, 25, 12];

function heapify(arr) {
  const last = Math.floor(arr.length / 2 - 1);
  for (let i = last; i >= 0; i--) {
    prelocate(arr, i);
  }
  return arr;
}

function prelocate(heap, index) {
  let curr = index;
  while (2 * curr + 1 < heap.length) {
    const leftindex = 2 * curr + 1;
    const rightindex = 2 * curr + 2;
    const minindex =
      rightindex < heap.length && heap[rightindex] < heap[leftindex]
        ? rightindex
        : leftindex;
    if (heap[minindex] < heap[curr]) {
      [heap[minindex], heap[curr]] = [heap[curr], heap[minindex]];
      curr = minindex;
    } else {
      break;
    }
  }
}

console.log(heapify(arr));
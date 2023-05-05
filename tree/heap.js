
// const heap = [10, 15, 30, 8, 9, 4, 25, 12];
// heapify(heap);
// console.log(heap); // [4, 8, 10, 12, 15, 30, 25, 9]
// insert(heap, 7);
// console.log(heap); // [4, 7, 10, 12, 8, 30, 25, 9, 15]
// deleteRoot(heap);
// deleteRoot(heap);
// console.log(heap); // [7, 8, 10, 12, 15, 30, 25, 9]


// function heapify(arr) {
//   const last = Math.floor(arr.length / 2 - 1);
//   for (let i = last; i >= 0; i--) {
//     prelocate(arr, i);
//   }
//   return arr;
// }
// function insert(heap, value) {
//   heap.push(value);
//   let index = heap.length - 1;
//   let parentIndex = Math.floor((index - 1) / 2);
//   while (index > 0 && heap[parentIndex] > heap[index]) {
//     [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
//     index = parentIndex;
//     parentIndex = Math.floor((index - 1) / 2);
//   }
// }
// function deleteRoot(heap) {
//   if (heap.length === 0) {
//     return null;
//   }
//   const root = heap[0];
//   const last = heap.pop();
//   if (heap.length > 0) {
//     heap[0] = last;
//     prelocate(heap, 0);
//   }
//   return root;
// }


// function prelocate(heap, index) {
//   let curr = index;
//   while (2 * curr + 1 < heap.length) {
//     const leftindex = 2 * curr + 1;
//     const rightindex = 2 * curr + 2;
//     const minindex =
//       rightindex < heap.length && heap[rightindex] < heap[leftindex]
//         ? rightindex
//         : leftindex;
//     if (heap[minindex] < heap[curr]) {
//       [heap[minindex], heap[curr]] = [heap[curr], heap[minindex]];
//       curr = minindex;
//     } else {
//       break;
//     }
//   }
// }

// console.log(heapify(heap));

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }

  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  swap(indexOne, indexTwo) {
    const temp = this.heap[indexOne];
    this.heap[indexOne] = this.heap[indexTwo];
    this.heap[indexTwo] = temp;
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }

    return this.heap[0];
  }

  poll() {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const item = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return item;
  }

  add(item) {
    this.heap.push(item);
    this.bubbleUp();
  }

  bubbleUp(index = this.heap.length - 1) {
    if (this.hasParent(index) && this.parent(index) > this.heap[index]) {
      this.swap(index, this.getParentIndex(index));
      this.bubbleUp(this.getParentIndex(index));
    }
  }

  bubbleDown(index = 0) {
    let smallerChildIndex = null;

    if (this.hasLeftChild(index) && this.leftChild(index) < this.heap[index]) {
      smallerChildIndex = this.getLeftChildIndex(index);
    }

    if (
      this.hasRightChild(index) &&
      this.rightChild(index) < this.heap[index] &&
      this.rightChild(index) < this.leftChild(index)
    ) {
      smallerChildIndex = this.getRightChildIndex(index);
    }

    if (smallerChildIndex !== null) {
      this.swap(index, smallerChildIndex);
      this.bubbleDown(smallerChildIndex);
    }
  }

  display() {
    console.log(this.heap);
  }
}

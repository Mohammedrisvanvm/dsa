let arr = [5, 45, 6, 7, 4, 3, 7, 34, 5, 7, 3];

let lb = 0;
let ub = arr.length - 1;
console.log(mergeSort(arr, lb, ub));
function mergeSort(arr, lb, ub) {
  if(lb<ub){
let mid=Math.floor((lb+ub)/2)
mergeSort(arr,lb,mid)
mergeSort(arr,mid+1,ub)
merge(arr,lb,mid,ub)

  }
}
function mergeSort(arr,lb,mid,ub){


}

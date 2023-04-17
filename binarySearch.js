

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
     
  
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return "target is not found";
  }


  let arr = [1,8,7,6,2,3,5,4];
  let target = 9;
  arr.sort(); // sort the array
  console.log(binarySearch(arr, target)); // returns the index of target element +1
  
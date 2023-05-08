let arr=[5,2,4,6,9,7,1,6]
deleteFromHeap(arr,6)
let sortedArr=heapSort(arr)
console.log(sortedArr);

function heapSort(arr){
  let n=arr.length

  for(let i=Math.floor(n/2)-1;i>=0;i--){
    heapify(arr,n,i)
  }
  console.log(arr);
  for(let i=n-1;i>0;i--){
    let swap=arr[0]
    arr[0]=arr[i]
    arr[i]=swap
    heapify(arr,i,0)
  }
  return arr
}
function heapify(arr,n,i){
  let smallest=i
  let left=2*i+1
  let right=2*i+2

if(left<n&&arr[left]<arr[smallest]){
  smallest=left
}
if (right<n&&arr[right]<arr[smallest]) {
  smallest=right
  
}
if(smallest!==i){
 let swap=arr[i]
 arr[i]=arr[smallest]
 arr[smallest]=swap
 heapify(arr,n,smallest)
}

}
function deleteFromHeap(arr,value){
  let index=arr.indexOf(value)
    if(index==-1){
      return false
    }
    let lastValue=arr.pop()
    if(index!==arr.length){
      arr[index]=lastValue
      heapify(arr,arr.length,index)
    }
    return true
  

}
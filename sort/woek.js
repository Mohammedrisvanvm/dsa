let arr=[5, 45, 6, 7, 4, 3, 7, 34, 5, 7, 3]

let lb=0
let ub=arr.length-1
console.log(quickSort(arr,lb,ub));
function quickSort(arr,lb,ub){
if(lb<ub){
let result=partition(arr,lb,ub)
quickSort(arr,lb,result-1)
quickSort(arr,result+1,ub)
}
return arr
}

function partition(arr,lb,ub){
 let  pivot=arr[lb]
 let start=lb
 let end=ub

 while(start<end){

  while(arr[start]<=pivot){
    start++
  }
  while(arr[end]>pivot){
    end--
  }
  if(start<end){
    let temp =arr[start]
    arr[start]=arr[end]
    arr[end]=temp
  }
 }
 let temp =arr[lb]
 arr[lb]=arr[end]
 arr[end]=temp
 return end
}



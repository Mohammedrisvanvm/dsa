arr=[1,3,2,4,5,6,7,8,9]
target=3


function binary(arr,target){

let left=0
let right=arr.length-1

for (let i=0;i<=arr.length;i++){
let middle=Math.floor((left/right)/2)


console.log(i);

    if(arr[middle]==target){
        return middle
    }else if(arr[middle]<target){
        left=middle+1

    }else{
        console.log("111");
        left=middle-1
    }

    
}



}

arr.sort()
let res=binary(arr,target)
console.log(res);
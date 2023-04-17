function rotateLeft(d, arr) {
    for (let i = 0; i < d; i++) {
      let first = arr[0];
  
      for (let j = 0; j < arr.length - 1; j++) {
        arr[j] = arr[j + 1];
      }
  
      arr[arr.length - 1] = first;
    }
  
    return arr;
  }
  

  let input = '5 4\n1 2 3 4 5';
  let [d, arrStr] = input.split('\n');
  d = parseInt(d.split(' ')[1]);
  let arr = arrStr.split(' ').map(Number);
  
  console.log(rotateLeft(d, arr)); 
  
function large() {
  let array1 = [1, 8, 6, 4, 2, 1, 5, 8, 9, 6];
  for (i = 0; i <= array1.length; i++) {
    for (let j = i + 1; j <= array1.length - 1; j++) {
      let temp = 0;
      if (array1[i] < array1[j]) {
        temp = array1[i];
        array1[i] = array1[j];
        array1[j] = temp;
      }
    }
  }

  for (i = 0; i <= array1.length - 1; i++) {
    console.log(array1[i]);
  }
  let array2 = [];
  let temp = 0;
  for (i = 0; i <= array1.length; i++) {
    for (let j = i + 1; j <= array1.length - 1; j++) {
        console.log(array1[j]);
   
      if (array1[i] == array1[j]) {
        temp=array1[i]
       
      } else {
        array2.push(array1[i]);
      }
    }
  }
  for (i = 0; i <= array1.length - 1; i++) {
    console.log("111111111111111",array2[i]);
  }
}

large();

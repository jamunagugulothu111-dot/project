function sumOfElements(arr)
  {
    sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log("The sum of elements in the array are:",sum);
  }
  let numbers=[10,20,30,40,50];
  sumOfElements(numbers);
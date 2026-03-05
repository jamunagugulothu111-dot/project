function evenElements(arr){
    console.log("The even elements are:");
    
    for(let i=0;i<arr.length;i++){
        if(arr[i] % 2 == 0){
            console.log(arr[i]);
        }
    }
}

let elements = [10,20,30,40,50];
evenElements(elements);
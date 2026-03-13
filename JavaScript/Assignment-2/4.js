function evenFactors(num){
    console.log("The even factors of 50 are:");
    for(let i=1;i<=num;i++){
        if(num%i==0 && i%2==0){
            console.log(i);
    }
}
}
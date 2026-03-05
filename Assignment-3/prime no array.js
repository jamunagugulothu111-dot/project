function isPrime(num){
    if(num<=1){
        return false;
    }
    for(let i=2;i<num;i++){
    if(num%i==0){
        return false;
    }
}
        return true;
    }
let array=[1,2,3,4,5,6,7,8,9,10];
console.log("The prime elements are:");
for(let i=0;i<array.length;i++){
    if(isPrime(array[i])){
        console.log(array[i]); 
    }
}
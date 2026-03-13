function isPrime(num){
  if(num<=1) {
    return false;
  }

  for(let i=2;i<num;i++){
    if(i%num==0)
    { 
        return false;
         }
        }
        return true;
    }
    let num=15;
    if(isPrime(num)){
        console.log("15 is a Prime number");
    }else
            console.log("15 is not a Prime number");
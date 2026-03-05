function findFactors(num)
{
    console.log("factors of 21 are:",);{
        for(let i=1;i<=num;i++)
            if(num%i==0){
                console.log(i);
            }
    }
}
findFactors(21);
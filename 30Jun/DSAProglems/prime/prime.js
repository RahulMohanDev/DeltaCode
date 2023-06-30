function isPrime(number) {
    if(number<=1){
          return false;
    }
    for(let i =2; i<=Math.sqrt(number);i++){
          if(number%i===0){
                return false;
          }
    }
    return true;
}

function numberOfPrimes(N)
{
    count = 0;
    for(let i=2;i<=N;i++){
          if(isPrime(i)){
                count++;
          } 
    }
    return count;
}
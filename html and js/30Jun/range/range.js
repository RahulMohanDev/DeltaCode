function findMissingNumber(arrayOfIntegers, upperBound, lowerBound) {
    let sum =0;
    for(num of arrayOfIntegers) {
        sum+=num;
    }
    const lower = (lowerBound*(lowerBound+1))/2;
    const higher = (upperBound*(upperBound+1))/2;
    let tSum = higher - lower;
    tSum+=lowerBound;
    console.log(tSum-sum);
}
const getValue = (num) => {
    const sum =total(num);
    if(sum<10) {
        return sum;
    }
    return getValue(sum);
};


function total(num) {
    let total = 0;
    while(num%10 !==0 || num>0) {
        if(num%10 !==0) {
            total+=Math.floor(num%10);
        }
        num=num/10;
    }
    return Math.floor(total);
}
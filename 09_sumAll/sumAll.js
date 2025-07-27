const sumAll = function(start, num) {
    let total = 0;
    if(start > num){
        let x = start;
        start = num;
        num = x;
    }
    if(start < 0 || num <0){
        return "ERROR";
    }
    if (!Number.isInteger(start) || !Number.isInteger(num)) {
        return "ERROR";
    }
    for(let i = start; i <= num; i++){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;

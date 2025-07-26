const reverseString = function(str) {
    arr = [...str];
    arr.reverse();
    newStr = '';
    for(let x of arr){
        newStr += x;
    }
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;

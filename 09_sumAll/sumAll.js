const sumAll = function(num1, num2) {
    if(num1 < 0 || num1 === NaN || num2 < 0 || num2 === NaN || !Number.isInteger(num1) || !Number.isInteger(num2))
        return "ERROR"; 
    let sum = 0;
    let smallNum = 0;
    let bigNum = 0;
    if(num1 > num2) {
        bigNum = num1;
        smallNum =num2;
    } else {
        smallNum = num1;
        bigNum = num2;
    }
    for(let i=smallNum; i<=bigNum; i++){
        sum+=i;
    }
    return sum;
};

console.log(sumAll(9, 3));

// Do not edit below this line
module.exports = sumAll;

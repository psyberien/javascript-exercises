const repeatString = function(str, num) {
    if(num < 0)
        return "ERROR";
    
    let res = "";
    while(num > 0){
        res += str;
        num--;
    }
    return res;
};
console.log(repeatString("hey", 3));
// Do not edit below this line
module.exports = repeatString;

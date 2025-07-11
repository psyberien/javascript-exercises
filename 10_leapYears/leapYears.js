const leapYears = function(year) {
 // if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0)  return true;
  if(year % 100 === 0){
    if(year % 400 === 0 && year % 4 === 0)
        return true;
  } else if(year % 4 === 0) {
         return true;
  }
  return false;
};


console.log(leapYears(1984));
console.log(leapYears(2004));
console.log(leapYears(1800));
console.log(leapYears(1900));
console.log(leapYears(1600));
console.log(leapYears(2000));
// Do not edit below this line
module.exports = leapYears;

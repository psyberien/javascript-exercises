const convertToCelsius = function(temp) {
  return Math.round(((temp-32) * (5/9)) * 10)/10;
};

const convertToFahrenheit = function(temp) {
  return Math.round(((temp * (9/5)) + 32)*10)/10;
};
console.log(convertToCelsius(3)+" Celsius")
console.log(convertToFahrenheit(73.2)+" Fahrenheit");
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

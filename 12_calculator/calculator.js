const add = function(...args) {
	let sum = [...args].reduce((a, b) => a + b);
  return sum;
};

const subtract = function(...args) {
	let difference = [...args].reduce((a, b) => a - b);
  return difference;
};

const sum = function(arr) {
  let sum = 0;
  for (let item of arr) {
    sum += item;
  }
  return sum;
};

const multiply = function(arr) {
  return arr.reduce((num, current) => num * current, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function (num) {
  let fact = 1;
  for (let i = num; i >= 1; i--) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};


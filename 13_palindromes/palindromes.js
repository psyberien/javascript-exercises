const palindromes = function (str) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let word = str
    .toLowerCase()
    .split('')
    .filter(char => alpha.includes(char))
    .join('');
  let reverse = word.split('').reverse().join('');
  return word === reverse;
};


// Do not edit below this line
module.exports = palindromes;


const removeFromArray = function(arr, ...items) {
    arr = arr.filter((elements) => !items.includes(elements));
    
 return arr;
};

console.log(removeFromArray([5, 4, 2, 2, 1], 2, 3, 6, 5, 4, "lol", '1'));

// Do not edit below this line
module.exports = removeFromArray;

const removeFromArray = function(array, ...numsToRemove) {
    const nums = numsToRemove;
   for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            console.log(`${array[i]} ${nums[j]}`);
            if (array[i] === nums[j]) {
                array.splice(i, 1);
                console.log(`removed ${array}`);
                i--;
            }
        }
    }
    return array;
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;

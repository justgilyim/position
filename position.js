/**
 * Created by Gilbert on 9/22/2015.
 */

/* exported position */

/**
 * Finds the position in the array of numss where target should be inserted.
 * @param nums The array of numbers
 * @param target The number to be inserted
 * @returns {number} The position where it should be inserted
 */
function position(nums, target){
    var pointer = 0;
    while(nums[pointer] <= target && pointer < nums.length) {
        if (nums[pointer] === target) {
            return pointer;
        }
       pointer++;
    }
    return pointer;
}

console.log(position(test, 5));
console.log(position(test, 2));
console.log(position(test, 7));
console.log(position(test, 0));

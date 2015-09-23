/**
 * Created by Gilbert on 9/22/2015.
 */
var test = [1,3,5,6];
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
/** time: 8:39 **/
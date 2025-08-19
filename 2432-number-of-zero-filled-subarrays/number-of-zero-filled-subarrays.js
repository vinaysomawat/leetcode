/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let count = 0;
    let result = 0;

    for (let num of nums) {
        if (num === 0) {
            count++;
            result += count;
        } else {
            count = 0;
        }
    }

    return result;
};
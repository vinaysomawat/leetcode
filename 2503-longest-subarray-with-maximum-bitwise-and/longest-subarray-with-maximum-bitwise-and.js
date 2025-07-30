/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let maxElement = Math.max(...nums);
    let curr = 0;
    let maximum = 0;
    nums.forEach((item)=>{
        if(item==maxElement) {
            curr++;
            maximum = Math.max(curr, maximum);
        } else {
            curr =0;
        }
    });
    return maximum;
};
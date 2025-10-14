/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function(nums, k) {
    if(k==1) return true;
    if(nums.length<k) return false;

    let lastcount=0;
    let count= nums[1]>nums[0] ? 1 : 0;
    for(let i=1;i<nums.length;i++) {
        if(nums[i]>nums[i-1]) {
            count++;
        } else {
            console.log(lastcount, count);
            if(lastcount>=k && count>=k) return true;
            if(count/2>=k || lastcount/2>=k) return true;
            lastcount=count;
            count=1;
        }
    }
    console.log(lastcount, count);
    if(lastcount>=k && count>=k) return true;
    if(count/2>=k || lastcount/2>=k) return true;
    return false;
};
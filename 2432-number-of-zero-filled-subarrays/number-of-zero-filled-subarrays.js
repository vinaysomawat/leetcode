/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let count =0;
    let res = [];
    for(let i=0;i<nums.length;i++) {
        if(nums[i]!=0) {
            res.push(count);
            count=0;
        } else {
            count++;
        }
    }
    res.push(count);
    let max = Math.max(...res);
    let dp = [];
    dp[0] = 0;
    for(let i=1;i<=max;i++) {
        dp[i] = dp[i-1]+i;
    }
    // console.log(res, max, dp);
    let result = 0;
    res.forEach((item) => {
        result += dp[item];
    })
    return result;
};
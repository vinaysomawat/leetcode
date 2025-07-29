/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestSubarrays = function(nums) {
  const n = nums.length;
  const answer = new Array(n).fill(0);
  const bitLastSeen = new Array(32).fill(-1);

  for (let i = n - 1; i >= 0; i--) {
    for (let b = 0; b < 32; b++) {
      if ((nums[i] & (1 << b)) !== 0) {
        bitLastSeen[b] = i;
      }
    }

    let farthest = i;
    for (let b = 0; b < 32; b++) {
      if (bitLastSeen[b] !== -1) {
        farthest = Math.max(farthest, bitLastSeen[b]);
      }
    }

    answer[i] = farthest - i + 1;
  }

  return answer;
};

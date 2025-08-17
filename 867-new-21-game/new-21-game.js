/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function(n, k, maxPts) {
    // Edge cases
    if (k === 0 || n >= k - 1 + maxPts) return 1.0;

    let dp = new Array(n + 1).fill(0);
    dp[0] = 1.0;

    let windowSum = 1.0;  // running sum of probabilities
    let result = 0.0;

    for (let i = 1; i <= n; i++) {
        dp[i] = windowSum / maxPts;

        if (i < k) {
            windowSum += dp[i];   // still can draw further
        } else {
            result += dp[i];      // terminal (≥k)
        }

        if (i - maxPts >= 0) {
            windowSum -= dp[i - maxPts];
        }
    }

    return result;
};

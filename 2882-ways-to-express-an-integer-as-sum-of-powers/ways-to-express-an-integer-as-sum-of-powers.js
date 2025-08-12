/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var numberOfWays = function(n, x) {
    const MOD = 1_000_000_007;
    let powers = [];
    let base = 1;
    while(true) {
        let pow = Math.pow(base,x);
        if(pow>n) break;
        powers.push(pow);
        base++;
    }

    const m = powers.length;

    const dp = Array.from({length: n+1}, () => Array(m+1).fill(0));

    for(let i=0;i<=m;i++) {
        dp[0][i] = 1;
    }

        for (let j = 1; j <= m; j++) {
        for (let k = 1; k <= n; k++) {
            // Without using j-th number
            dp[k][j] = dp[k][j - 1];

            // Using j-th number (powers[j - 1])
            if (k >= powers[j - 1]) {
                dp[k][j] = (dp[k][j] + dp[k - powers[j - 1]][j - 1]) % MOD;
            }
        }
    }

    return dp[n][m];

};
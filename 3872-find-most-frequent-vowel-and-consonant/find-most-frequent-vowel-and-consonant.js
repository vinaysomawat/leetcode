/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    const vowels = new Set(['a','e','i','o','u']);
    let freq = {};  
    let maxV = 0, maxC = 0;

    for (let ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
        if (vowels.has(ch)) {
            maxV = Math.max(maxV, freq[ch]);
        } else {
            maxC = Math.max(maxC, freq[ch]);
        }
    }

    return maxV + maxC;
};
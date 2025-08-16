/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minSensors = function(n, m, k) {
    const s = 2*k+1;
    return Math.ceil(n/s) * Math.ceil(m/s);
};
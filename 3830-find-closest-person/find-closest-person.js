/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    return Math.abs(z-y) > Math.abs(z-x) ? 1 : Math.abs(z-y) < Math.abs(z-x) ? 2 : 0;
};
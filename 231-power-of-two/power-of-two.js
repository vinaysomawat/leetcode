/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n<0) return false;
    return (n >>> 0 ).toString(2).split('').filter(x => x==='1').length === 1;
};
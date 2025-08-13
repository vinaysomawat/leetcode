/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let pow = 0;

    while(true) {
        if(n=== Math.pow(3, pow)) return true;
        if(n<Math.pow(3, pow)) return false;

        pow++;
    }
};
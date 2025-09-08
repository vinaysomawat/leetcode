/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    for(let i=1;i<n;i++) {
        if(!check(i) && !check(n-i)) return [i,n-i];
    }
};

function check(n) {
    return n.toString().split('').find(item => item == '0');
}
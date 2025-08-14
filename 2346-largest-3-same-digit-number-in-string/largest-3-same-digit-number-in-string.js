/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let result = '';
    for(let i=0;i<=9;i++) {
        const str = i+''+i+''+i;
        if(num.includes(str)) result = str;
    }
    return result;
};
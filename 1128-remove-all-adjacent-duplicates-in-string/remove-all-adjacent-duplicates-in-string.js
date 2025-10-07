/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = [];
    for(let i=0;i<s.length;i++) {
        const a = stack.pop();
        if(a!=s[i]) {
            stack.push(a);
            stack.push(s[i]);
        }
    }
    return stack.join('');
};
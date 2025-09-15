/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    let count = 0;
    text.split(' ').forEach(item => {
        if(check(brokenLetters, item)) count++;
    });
    return count;
};

function check(br, str) {
    for(let i=0;i<str.length;i++) {
        if(br.includes(str[i])) return false;
    }
    return true;
}
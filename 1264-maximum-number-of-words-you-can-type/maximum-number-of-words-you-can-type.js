/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    const brokenSet = new Set(brokenLetters);
    let count = 0;

    for (const word of text.split(' ')) {
        let valid = true;
        for (const ch of word) {
            if (brokenSet.has(ch)) {
                valid = false;
                break;
            }
        }
        if (valid) count++;
    }

    return count;
};

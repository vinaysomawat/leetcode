/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function(s) {
      const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let count = 0;

  for (let ch of s) {
    if (vowels.has(ch)) count++;
  }

  return count > 0;
};
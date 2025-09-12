/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  for (let ch of s) {
    if ( ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u') return true;
  }

  return false;
};
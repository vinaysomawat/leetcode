/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function(s) {

  for (let ch of s) {
    if ( ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u') return true;
  }

  return false;
};
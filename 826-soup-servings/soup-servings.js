/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
     if (n >= 4800) return 1.0;
  const N = Math.ceil(n / 25);
  const memo = new Map();

  function key(i, j) { return i + ',' + j; }

  function P(i, j) {
    if (i <= 0 && j <= 0) return 0.5;
    if (i <= 0) return 1.0;
    if (j <= 0) return 0.0;

    const k = key(i, j);
    if (memo.has(k)) return memo.get(k);

    const val = 0.25 * (
      P(i - 4, j) +
      P(i - 3, j - 1) +
      P(i - 2, j - 2) +
      P(i - 1, j - 3)
    );
    memo.set(k, val);
    return val;
  }

  return P(N, N); 
};
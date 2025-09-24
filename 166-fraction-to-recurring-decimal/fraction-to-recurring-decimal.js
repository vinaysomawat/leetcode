/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if (numerator === 0) return "0";

    let result = "";

    // Handle sign
    if ((numerator < 0) ^ (denominator < 0)) result += "-";

    // Work with positive numbers
    let n = Math.abs(numerator);
    let d = Math.abs(denominator);

    // Integer part
    result += Math.floor(n / d);
    let remainder = n % d;

    if (remainder === 0) return result; // no decimal part

    result += ".";

    // Map remainder -> index in result
    let map = new Map();

    while (remainder !== 0) {
        if (map.has(remainder)) {
            // Insert parentheses at the repeating start
            let idx = map.get(remainder);
            result = result.slice(0, idx) + "(" + result.slice(idx) + ")";
            return result;
        }

        map.set(remainder, result.length);

        remainder *= 10;
        result += Math.floor(remainder / d);
        remainder %= d;
    }

    return result;
};


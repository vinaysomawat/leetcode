/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
var maxTotalFruits = function(fruits, startPos, k) {
    let n = fruits.length;
    let maxFruits = 0;
    let total = 0;
    let left = 0;

    for (let right = 0; right < n; right++) {
        total += fruits[right][1];

        while (left <= right) {
            const leftPos = fruits[left][0];
            const rightPos = fruits[right][0];

            const stepsLeftFirst = Math.abs(startPos - leftPos) + (rightPos - leftPos);
            const stepsRightFirst = Math.abs(startPos - rightPos) + (rightPos - leftPos);

            if (Math.min(stepsLeftFirst, stepsRightFirst) > k) {
                total -= fruits[left][1];
                left++;
            } else {
                break;
            }
        }

        maxFruits = Math.max(maxFruits, total);
    }

    return maxFruits;
};
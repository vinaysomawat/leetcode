/**
 * @param {number[][]} fruits
 * @return {number}
 */
var maxCollectedFruits = function(fruits) {
const size = fruits.length;
    let total = 0;

    for (let i = 0; i < size; i++) {
        total += fruits[i][i];
    }

    let rightPath = [fruits[0][size - 1], 0, 0];
    let bottomPath = [fruits[size - 1][0], 0, 0];
    let window = 2;

    for (let step = 1; step < size - 1; step++) {
        const newRight = Array(window + 2).fill(0);
        const newBottom = Array(window + 2).fill(0);

        for (let dist = 0; dist < window; dist++) {
            newBottom[dist] = Math.max(
                bottomPath[dist - 1] || 0,
                bottomPath[dist],
                bottomPath[dist + 1] || 0
            ) + fruits[size - 1 - dist][step];

            newRight[dist] = Math.max(
                rightPath[dist - 1] || 0,
                rightPath[dist],
                rightPath[dist + 1] || 0
            ) + fruits[step][size - 1 - dist];
        }

        bottomPath = newBottom;
        rightPath = newRight;

        if (window - size + 4 + step <= 1) {
            window += 1;
        } else if (window - size + 3 + step > 1) {
            window -= 1;
        }
    }

    return total + rightPath[0] + bottomPath[0];

};
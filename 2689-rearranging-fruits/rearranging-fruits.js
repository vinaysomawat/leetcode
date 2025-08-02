var minCost = function(basket1, basket2) {
    const count = new Map();

    for (let val of basket1) {
        count.set(val, (count.get(val) || 0) + 1);
    }

    for (let val of basket2) {
        count.set(val, (count.get(val) || 0) - 1);
    }

    let excess = [];

    for (let [key, val] of count.entries()) {
        if (val % 2 !== 0) return -1; // impossible
        for (let i = 0; i < Math.abs(val) / 2; i++) {
            excess.push(key);
        }
    }

    excess.sort((a, b) => a - b);
    const minFruit = Math.min(...basket1, ...basket2);

    let cost = 0;
    for (let i = 0; i < excess.length / 2; i++) {
        cost += Math.min(excess[i], 2 * minFruit);
    }

    return cost;
};

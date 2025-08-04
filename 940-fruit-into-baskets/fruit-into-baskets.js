var totalFruit = function(fruits) {
    let left = 0;
    let maxFruits = 0;
    let basket = new Map();

    for (let right = 0; right < fruits.length; right++) {
        // Add fruit to basket
        basket.set(fruits[right], (basket.get(fruits[right]) || 0) + 1);

        // If we have more than 2 types, shrink window from the left
        while (basket.size > 2) {
            basket.set(fruits[left], basket.get(fruits[left]) - 1);
            if (basket.get(fruits[left]) === 0) {
                basket.delete(fruits[left]);
            }
            left++;
        }

        maxFruits = Math.max(maxFruits, right - left + 1);
    }

    return maxFruits;
};

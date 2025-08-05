/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
    let count=0;
    for(let i=0;i<fruits.length;i++) {
        for(let j=0;j<baskets.length;j++) {
            if(fruits[i]<=baskets[j]) {
               baskets[j] = -1; 
               break;
            }

            if(j==baskets.length-1 && fruits[i]>baskets[j]) count++;
        }
    }
    return count;
};
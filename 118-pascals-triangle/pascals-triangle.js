/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [[1]];
    for(let i=2;i<=numRows;i++) {
        let lastArray = result[result.length-1];
        let temp = [];
        temp.push(lastArray[0]);
        for(let j=1;j<i-1;j++) {
            temp.push(lastArray[j-1]+lastArray[j]);
        }
        temp.push(lastArray[0]);
        result.push(temp);
    }
    return result;
};
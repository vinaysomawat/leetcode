/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        let count=0;
        let arr = [];
        functions.forEach((item, index) => {
            Promise.resolve(item()).then((data) => {
                count++;
                arr[index] = data;
                if(count == functions.length) {
                    resolve(arr);
                }
            }).catch((err) => {
                reject(err);
            })
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
var TimeLimitedCache = function() {
    this.timeLimit = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    if(!this.timeLimit.has(key)) {
        this.timeLimit.set(key, {value, timestamp: Date.now()+duration});
        return false;
    } else {
        const { value: oldValue, timestamp } = this.timeLimit.get(key);
        this.timeLimit.set(key, {value, timestamp: Date.now()+duration});
        if(timestamp>Date.now()) return true;

        return false;
    }
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const currentTime = Date.now();
    const item = this.timeLimit.get(key);

    if (item && item.timestamp > currentTime) {
        return item.value;
    }

    this.timeLimit.delete(key);
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    let count = 0;
    for(const [key, value] of this.timeLimit) {
        console.log(value.timestamp, Date().now)
        if(value.timestamp>Date.now()) {
            count++;
        }
    }
    return count;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
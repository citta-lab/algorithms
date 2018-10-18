/**
 * If we have queue / array of given size but we want to add more items to an array
 * and return average of numbers then we can make use of queue. First in First out.
 * Example: Array of size 3 i.e [2,3,4] returns 9/3=3. If we add 5 to an array then
 * queue will remove first element i.e 2 and add 5 at the end return the average of
 * current elements. i.e [3,4,5] returns 12/3 = 4.
 */

/**
 * Initialize your data structure here.
 * @param {number} size
 */
class MovingAverage {
    constructor(size){
        this.size = size;
        this.queue = [];
        this.sum = 0.0;
    }

/**
 * @param {number} val
 * @return {number}
 */
    next(val){
        if(this.queue.length == this.size){
            this.sum = this.sum - this.queue[0];
            this.queue.shift();
        }

        this.queue.push(val);
        this.sum += val;
        return this.sum / this.queue.length
    }
};

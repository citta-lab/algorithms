/**
 * Question: Find the minimum value from an sorted array which is pivoted to
 * create unsorted at one point. 
 * Example: [2,3,4,5,6,7] was pivoted at 5 to create [5,6,7,2,3,4] so find the 
 * min value. i.e 2
 * @param {*} nums 
 */
var findMin = function(nums) {

    /**
     * Hence the question is suggesting it has been pivoted at one
     * place then there must be disorientation in the sorted array,
     * so all we have to do is check next value with current value.
     * if we find lesser value then return or return 0'th element by
     * default.
     */
    for (var i =0; i < nums.length - 1; i++){
            if (nums[i] > nums[i+1]){
                return nums[i+1];
            }
        }
        return nums[0];
};

findMin([4,5,6,7,0,1,2])

/**
 * Solution : Second
 * OR ES6 Syntax
 */
var findMin = function(nums) {
    return nums.reduce((a,b) => {
        return a > b ? b : a
    })
};
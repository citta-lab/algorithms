/**
 * QUESTION: Find the pivot point from an given array, so the left side of an array total should be equal to right side of the total.
 * EXAMPLE: In an array [1, 7, 3, 6, 5, 6], index 3 is the pivotal becuase 1+7+3 = 5+6
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = nums.reduce((a,b)=>a+b, 0);
    let sumL = 0, sumR = sum;
    for(let i=0, len=nums.length; i<len; i++){
        sumR -= nums[i];
    	if(sumL === sumR) return i;
    	sumL += nums[i];
    }
    return -1;
};

let test = pivotIndex([1, 7, 3, 6, 5, 6])
console.log(test)

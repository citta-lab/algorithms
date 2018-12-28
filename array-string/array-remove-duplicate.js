/**
 * Question: If sorted array with duplicate elements are given then we need to find the size of an
 * array without the repeated elements.
 * Example: Given array of [1,2,2,3,4,4] then resulting array should be [1,2,3,4] and length 4.
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i=0; i<nums.length; i++){
        if(nums[i] == nums[i+1]){
            nums.splice(i,1);
            i = i -1;
        }
    }

    console.log(JSON.stringify(nums));
    return nums.length;
};


removeDuplicates([0,0,1,1,2,2,2,3,3,4,4,4,4,4])

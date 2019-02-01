/**
 * Question: Remove duplicates from an array without using extra space.
 * Example: [1,2,2,3,4,4] should be [1,2,3,4]
 * @param {*} nums 
 */

var removeDuplicates = function(nums) {
    for(let i=0; i<nums.length; i++){
        if(nums[i] === nums[i+1]){
            nums.splice(i,1);
            i--
        }
    }
    
    return nums
};



/**
 * ES6 Syntax
 * @param {*} nums 
 */
let removeDuplicates = function(nums){
    return nums.filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
    })
}



let nums = removeDuplicates([1,1,2,2,2,2,2,3,4,4])
console.log(nums)
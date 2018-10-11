/**
 * If the array is [2,4,11,14] and target is 13 then we should resturn
 * array of those two indexes i.e [ 0,2]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    var result = [];
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i]+nums[j] === target){
               result.push(i);
               result.push(j);
            }
        }
    }

    return result;
};

/**
 * Each forloop to traverse through the array it takes O(n) complexity, hence we are making two
 * loops it would result in O(n^2), the better solution would be to have O(n) complexity.
 *
 * Solution: Build hash with value and index as key-value pair. Each array value can be subtracted with
 * target, and if the difference value is in hash then return current index and index from hash.
 * else add it to the hash.
 */

 var twoSum = function(nums, target) {

     var hash = {};
     var result = [];
     for(let i=0; i<nums.length; i++){

         var current = nums[i];
         var matchValue = target - current;

         if(matchValue in hash){
           result.push(i);
           result.push(hash[matchValue]);
         }else{
           hash[current] = i;
         }
     }

     return result;
 };

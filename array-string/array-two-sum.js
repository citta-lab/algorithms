/**
 * Question: Find the index of two element which add up to the target value sum.
 * Example: if array [4,2,5,7] and target is 6 then return index [0,1] as 4+2 = 6
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
     let result = [];
     for(let i=0; i<nums.length; i++){

         let checkNum = target - nums[i];
         for(let j=i+1; j < nums.length; j++){
             if(checkNum === nums[j]){
                 result.push(i);
                 result.push(j)
             }
         }
     }

     return result;
 }


 let test = twoSum([2, 7, 11, 15], 9);
 console.log(JSON.stringify(test))

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

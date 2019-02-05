/**
 * Question: 
 * Example: 
 * 
 * Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
 * The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.
 * Note:
 * You may assume that each input would have exactly one solution and you may not use the same element twice.

 * Example:
 * Input: numbers = [2,7,11,15], target = 9
 * Output: [0,1]
 * [0, 1, 2,7,11,15] target 1 -> [0, 1]
 * Explanation: The sum of 2 and 7 is 9. Therefore index1 = 0, index2 = 1.
 */

let twoSumTest = function(numbers, target){
  
    let last = numbers.length-1;
    let first = 0;
    let result = []
     
    while(first < last){ 
        if (  numbers[last]+numbers[first] > target) {
          last--;
        } else if (numbers[last]+numbers[first] == target) {
          result.push(first);
          result.push(last);
          
          return result;
        } else {
          first++;
        }  
    }
 }


 let test = twoSumTest([2,7,11,15], 9);

 console.log(test)



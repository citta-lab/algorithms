/**
 * Question: Validate if the array contains any duplicate element, if yes return true.
 * Example: If given nums is [1,2,2] then return true, where as in [1,2,3] is false.
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj = {};

    for(let ele of nums){
        if(!obj[ele]){
            obj[ele] = 1;
        }else{
            return true;
        }
    }

    return false;
};


//let test = containsDuplicate([1,1,1,3,3,4,3,2,4,2]);
let test = containsDuplicate([1,2,3,4]);
console.log(test);

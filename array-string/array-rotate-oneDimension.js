/**
 * Question: Rotate an one dimentional array K elements from right.
 * Example: if array [1,2,3,4,5] and k=2 then resulting updated array would be [4,5,1,2,3]
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let limit = nums.length - k;
    for(let i=0; i< limit; i++){
        let element = nums[i]
        nums.push(element);
    }

    nums.splice(0, limit);
    return nums
};

let test = rotate([1,2,3,4,5,6,7], 3)
console.log(JSON.stringify(test));

/**
 * Alternative solution
 */

 // var rotate = function(nums, k) {
 //     let arr = []
 //     while(k > 0){
 //         let ele = nums.pop();
 //         arr.unshift(ele);
 //         k --
 //     }
 //
 //     nums.unshift(...arr)
 // };

/**
 * Alternative solution but here we are returning an array
 */

// var rotate = function(nums, k) {
//     let limit = nums.length - k;
//     let left = nums.slice(0, limit);
//     let right = nums.slice(limit);

//     return right.concat(left);
// };


/**
 * Alternative solution
 */

 // var rotate = function(nums, k) {
 //     let arr = []
 //     while(k > 0){
 //         let ele = nums.pop();
 //         arr.unshift(ele);
 //         k --
 //     }
 //
 //     nums.unshift(...arr)
 // };

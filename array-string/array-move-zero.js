/**
 * QUESTION: Move all zeros to the end and retain other element sequence as it is.
 * Example: [1,0,3,4] should be [1,3,4,0]
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let initialSize = nums.length;
    for(let i=initialSize; i>=0; i--){
        if(nums[i] === 0){
            nums.splice(i,1);
            nums.push(0);
        }
    }
}


/**
 * IMPORTANT NOTE:
 * when i used for loop with let for(let i=0; i<initialSize; i++) it FAILD to print
 * [0,0,1] as [1,0,0] but instead it was printing [ 0,1,0].
 * saving this for another day troubleshooting.
 */


/**
 * SECOND WAY: But fails in [0,0,1] case.
 * @param {*} nums
 */
// var moveZeroes = function(nums) {

//     let zeroArray = [];
//     // build array of zeros.
//     for(let ele of nums){
//         if(ele === 0){
//             zeroArray.push(0)
//         }
//     }

//     // filter all zeros from given array
//     nums = nums.filter((key) => nums[key] != 0);
//     console.log(JSON.stringify(nums));

//     // add zeros to the end
//     nums.push(...zeroArray);

//     console.log(JSON.stringify(nums));
// }


// let test = moveZeroes([0,1,0,3,12]);
let test = moveZeroes([0,0,1]);

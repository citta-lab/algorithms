/**
 * Question : Find the element which doesn't repeat more than once. Only one element is not repeated
 * except all other.
 * Example: [3,4,1,2,1,2,4] where 3 is not repeated.
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj = {};
    for(let ele of nums){
        if(!obj[ele]){
            obj[ele] = 1;
        }else{
            obj[ele]++
        }
    }

    let key = Object.keys(obj).find(key => obj[key] === 1);
    return key;
};


let test = singleNumber([3,4,1,2,1,2,4])
console.log(test);

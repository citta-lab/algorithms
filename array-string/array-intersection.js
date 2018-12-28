/**
 * Question: Find intersection between two given array
 * Example: If array one is [1,2,3,4,5] and array two is [7,8,3,4,9] then [3,4] is the intersection.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let obj = {};
    for(let ele of nums1){
        if(!obj[ele]){
            obj[ele] = 1;
        }else{
            obj[ele] ++
        }
    }

    let interArray = [];
    // trick is to loop second array againt the first Object and remove once we found and added to temp array
    for(let ele of nums2){
        if(obj[ele]){
            interArray.push(ele);
            obj[ele] --
        }
    }

    return interArray;
 };


 let test = intersect([4,9,5],[9,4,9,8,4]);
 console.log(test)

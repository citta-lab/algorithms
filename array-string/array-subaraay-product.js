/**
 * Count and print the number of (contiguous) subarrays where the product of all the elements in the subarray is less than k.
 */

 function countSubarrays(nums, k){
    
    if (k < 2) {
        return 0;
    }

    var result = 0;
    var product = 1;

    for(let leftPointer = 0, rightPointer = 0; rightPointer < nums.length ; rightPointer++){
        
        // start with initalized product, which multiplies with array values based on rightPointer.
        product = product * nums[rightPointer];

        // this will execute when product multiplication value exceeds given K condition
        while(leftPointer < rightPointer && product >= k){
            // hence continuous array product didn't satifsy (i.e product < k) we remove the left most value, and go to next left value 
            product = product / nums[leftPointer]; 
            leftPointer++
        }

        /** 
         * happy path, finding the distance between pointer index and adding one as array starts
         * with index 0 and we are interested in length.
        */
        if (product < k){
            let windowLength = rightPointer - leftPointer + 1;
            result = result + windowLength;
        }

    }
    
    console.log(result)
    return result;
 }


// Test condition
// countSubarrays([10,2,4,8], 9);
// countSubarrays([10, 5], 11);
// countSubarrays([10, 5, 2, 6], 100)
countSubarrays([1,2,3], 100);
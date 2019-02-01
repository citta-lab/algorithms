/**
 * Question: Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 * Example: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * result should be [1,2,2,3,5,6]
 */

const merge = (nums1, m, nums2, n) => {
    
    let pointerA = m - 1; // nums1
    let pointerB = n - 1; // nums2
    let resultPointer = m + n - 1; // total size of longest array i.e nums1.

    while (pointerA >= 0 || pointerB >= 0) {
      if (pointerB < 0 || nums1[pointerA] >= nums2[pointerB]) {
        nums1[resultPointer] = nums1[pointerA];
        resultPointer--;
        pointerA--
      } else {
        nums1[resultPointer] = nums2[pointerB];
        resultPointer--;
        pointerB--;
      }
    }

    console.log(nums1)
  };

  merge([1,2,3,0,0,0], 3, [2,5,6], 3) 
  // [1,2,2,3,5,6]


  /**
   *   Easy to understand but not the best solution
   * 
   *   DUMB WAY
   * 
   * 
   * 
   */

  var merge = function(nums1, m, nums2, n) {

    for(let i=nums1.length-1, j=nums2.length-1; i >= m, j>= 0; i--, j--){
        let temp = nums1[i];
        nums1[i] = nums2[j];
        nums2[j] = temp
    }

    for(let i=0; i<nums1.length; i++){
        for(let j=0; j<nums1.length-1-i; j++){
            if(nums1[j+1] < nums1[j]){
                let temp = nums1[j+1];
                nums1[j+1] = nums1[j];
                nums1[j] = temp
            }
        }
    }

    console.log(nums1)

};
/**
 * Question: Plus one the last element of an array such that each element contains single digits.
 * Example: If an array [4,2,3] then result would be [4,2,4]. Similary, if array is [9] then result
 *          would be [1,0].
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    for(var i = digits.length - 1; i >= 0; i--){
      if(++digits[i] > 9){
        digits[i] = 0;
      }else{
        return digits;
      }
    }

    /**
     * This only executed if array has only one number i.e 9, which goes through
     * the loop and get converted to zero.
     */
    digits.unshift(1);
    return digits;
  };

//   let test = plusOne([4,3,2,1]);
  let test = plusOne([9]);
  console.log(JSON.stringify(test))

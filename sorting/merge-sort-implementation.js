/**
 * THIS IS DEVIDED INTO TWO FUNCTION

 * MERGE SORT Function:
 * 1. Takes an array and splits into two half's and this goes on until
      the length of split result array becomes one.
 * 2. Then we take these values and pass it to second Function MERGE.

 * MERGE Function:
 * 1. takes two argument left and right array
 * 2. while loop checks if left AND right array has an element
 * 3. takes the first element from both and compares for the lowest
 * 4. whichever the lowest we do shift on array (i.e left.shift()) to get
      first element of an array
 * 5. add it to the result array
 * 6. repeat the process until we left with some elements and can't compare
 * 7. add remaining to the result array
 */


//MERGE SORT
function mergeSort(arr){

  // can't do anything as it's the smallest unit
  if(arr.length === 1){
    return arr;
  }

  const center = Math.floor(arr.length/2);    // ['a','b','c','d'] center = 2
  const left = arr.slice(0, center);          // ['a','b']
  const right = arr.slice(center);            // ['c','d']

  /* we would keep calling mergeSort recursively until we find the smallest
     unit, and once we do we need to call merge. so below is the code.

     EXAMPLE: 
      [97,0]    -->         mergeSort([97,0])
      /  \
    [97] [0]    --> mergeSort([97])   mergeSort([0])
                -->          merge([97], [0])
                -->             [0,97]
  */

 return merge(mergeSort(left), mergeSort(right))

}


// MERGE
 function merge(left, right){
   ler result = [];
   while(left.length && right.length){
     let leftFirst = left[0];
     let rightFirst = right[0];

     if(leftFirst < rightFirst){
       result.push(left.shift())
     }else{
       result.push(right.shift())
     }
   }

   if(left.length > 0){
     result.push(...left);
   }

   if(right.length > 0){
     result.push(...right);
   }

   return result;

   /** OR we can skip if check on left, right and do the below
    return [...result, ...left, ...right];
    */
 }

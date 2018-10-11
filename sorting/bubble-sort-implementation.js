/**
 * 1. Run time complexity would be n^2
 * 2. We do using two loops, and swapping the value.
 * 3. [10,-30,97,0,5] will become [-30,0,5,10,97]
*/

function bubbleSort(arr){
  for(let i=0; i< arr.length; i++){
    for(let j=0; j<(arr.length-i-1); j++){
      if(arr[j] > arr[j+1]){
        const lesser = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
}

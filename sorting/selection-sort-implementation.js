/**
 * 1. Run time complexity would be n^2
 * 2. We do using two loops
 * 3. we assume current element is lowset in the array,
      and we look to prove wrong
   4. we use helper variable indexOfMin to keep track of min index.
   5. if the index of current element and indexOfMin is not same, we SWAP
 * 6. [10,-30,97,0,5] will become [-30,0,5,10,97]
*/

function selectionSort(arr){
  for(let i=0; i<arr.length; i++){
    let indexOfMin = i;

    for(let j=i+1; j<arr.length; j++){
      if(arr[j] < arr[indexOfMin]){
        indexOfMin = j;
      }
    }

    if(indexOfMin !== i){
      let lesser = arr[indexOfMin]; //this should be lowest value;
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }

  return arr;
}

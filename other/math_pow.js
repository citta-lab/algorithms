/**
 * Question: Implement Math.pow operation in logn time instead of O(n).
 * Example: Math.pow(2,3) result in 2^3 = 8. If it's Math.pow(2,-3) then it
 * should be 1/8 = 0.125.
 * 
 * Hint: devide the n and calculate for first half and multiply the result. if
 * n is odd then do (n-1) and repeat the above step to make half and multiple the
 * result but then multiple with x to consider for (n-1).
 */

 let myPow = function (x,n){

     // base conditions
     if(n === 0) return 1;
     if(n === 1) return x;
     if(n === -1) return 1/x;

     /**
      * devide and concor so we can reduce the computation by half.
      * If we find n is even then it is much easier.
      */
     if(n%2 === 0){
        let evenResult = myPow(x, n/2);
        return evenResult * evenResult;
     }else{
         let oddResult = myPow(x, (n-1)/2);
         return oddResult * oddResult * x;
     }
 }


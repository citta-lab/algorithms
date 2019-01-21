/**
 * Question: Find the longest subseqence palindrome.
 * Example: if the string is `abbda` then `abba` is the 
 * longest subsequence so return 4.
 * 
 * Hint: Implementing m*n memorization to find the longest subsequence. We build two
 * dimentional array and start mapping the characters. Array should be represented by 
 * 1's and 0's to create diagonal divider. Please check https://www.youtube.com/watch?v=yZWmS6CXbQc for
 * more information.
 * @param {*} s 
 */

let longestPalindromeSubseq = function (s){
    
    // if we have empty then return 
    if(s.length === 0 || s.length == null ) return 0;
    
    // building empty array to hold m*n array
    let length = s.length;
    let memo = Array(length).fill(null).map(()=>Array(length).fill(0));
    console.log(memo)

    // using helper, 0 is the row and length-1 is column
    return helper(s, 0, length-1, memo);
}

let helper = function(s, i, j, array){

    // if we find matching then we will this with value.
    if(array[i][j] !=0) return array[i][j];

    // marking evrything below the diagonal of m*n as 0
    if(i>j) return array[i][j]=0;

    // marking eveything on diagonal line in m*n is 1
    if(i==j) return array[i][j]=1;

    /**
     *  Example string 'eate` is prepresnted as 4*4 array, and would look like
     *    e a t e
     *  e 1 X X X
     *  a 0 1 X X
     *  t 0 0 1 X
     *  e 0 0 0 1
     *  
     *  1. first if (i>j) return 0 takes care of all 0's
     *  2. diagonal 1's taken care by 
     */

     if(s.charAt(i) === s.charAt(j)){
         /**
          *  if we find i and j elements same ( example 'e' in the diagram ) 
          *  then we exclude those two char from string, use helper again plus
          *  add `2` as we found the two char match.
          */
         array[i][j] = helper(s, i+1, j-1, array) + 2;  
     }else{
         /**
          * if we dont find the match then we will those X marked positions
          * using it's previous adjusent blocks, by determining which (left or right )
          * block has more value. Hence calling helper twice and figuring out the
          * max value.
          */
         array[i][j] = Math.max(helper(s, i+1, j, array), helper(s, i, j-1, array));
     }

     return array[i][j];
};


let test = longestPalindromeSubseq('adbbca');
console.log(test)
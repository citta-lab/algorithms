/**
 * Question: Set Zero if the row or column has zero. Do it in place.
 * Example: matrix below should result in answer shown.
 * [[1,1,0],
 * [1,1,1]]    
 * should result in 
 * [[0,0,0],
 * [1,1,0]] 
 * as first row and last column has zero defined.
 * 
 * HINT:  
 * Step 1: Loop through each element and build row and column array to determine which
 * row and/or column has zero. Mark that as 1.
 * Step 2: Loop through the matrix again, find the matching from previously found
 * row and/or column. Once we find element for matching row or column then set those
 * values to zero.
 * 
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {

    var col = [];
    var row = [];

    for(let i=0; i<matrix.length; i++){
      for(let j=0; j<matrix[0].length; j++){
        // preparing seperate arrays to hold zero's column and rows in seperate arrays
        if(matrix[i][j] === 0){
          row[i] = 1;
          col[j] = 1;
        }
      }
    }

    console.log(" row of zeros : "+row+ " col of zeros : "+col);

    for(let i=0; i<matrix.length; i++){
      for(let j=0; j<matrix[0].length; j++){
        /**
         * check if the row and column matches with the previously prepared array
         * if yes then filp it to zero for that row or column.
         */
        if(row[i] === 1 || col[j] === 1){
          matrix[i][j] = 0;
        }
      }
    }

    console.log(matrix)
};


let matrix = [
  [1,1,1],
  [1,0,1],
  [1,0,1]
]

let matrixTwo = [
  [1,1,0],
  [1,1,1]
]

let matrixThree = 
[
[0,1,2,0],
[3,4,5,2],
[1,3,1,5]
]
setZeroes(matrixThree)

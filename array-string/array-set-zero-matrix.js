/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {

    var col = [];
    var row = [];

    for(let i=0; i<matrix.length; i++){
      for(let j=0; j<matrix[0].length; j++){
        console.log(" i is : "+i+ " j is : "+j+ " matrix is : "+matrix[i][j])
        if(matrix[i][j] === 0){
          row[i] = 1;
          col[j] = 1;
        }
      }
    }

    console.log(" row of zeros : "+row+ " col of zeros : "+col);

    for(let i=0; i<matrix.length; i++){
      for(let j=0; j<matrix[0].length; j++){
        if(row[i] === 1 || col[j] === 1){
          matrix[i][j] = 0;
        }
      }
    }

    console.log(matrix)
};

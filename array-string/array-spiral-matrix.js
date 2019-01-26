/**
 * Question: Print the elements of an array in spiral way.
 * Example: [[1,2,3]  
 *          [4,5,6]
 *          [7,8,9]] should be printed like 1,2,3,6,9,8,7,4,5.
 * 
 * Hint: In javascript we need to build array with dummy size first. Then build
 * pointers for row and column with begins and ends. Traverse through column 
 * (0,1,2,3 columns)with static row (i.e 0 row ). then in next loop take static
 * column (i.e 3rd col) and traverse through row (i.e 0,1,2,3 ) and repeat.
 * @param {*} matrix 
 */

function matrix(matrix) {
    const res = [];
  
    // in js we can't assign a size of an array so we need to buil one
    for (let i = 0; i < matrix; i++) {
      res.push([]);
    }
  
    // base condition if we have problem 
    if (matrix.length == 0) {
        return res;
    }
    
    let rowBegin = 0;
    let rowEnd = matrix.length-1;
    let colBegin = 0;
    let colEnd = matrix[0].length - 1;
    
    while (rowBegin <= rowEnd && colBegin <= colEnd) {
       
        // Traverse Right
        for (let j = colBegin; j <= colEnd; j ++) {
            res.push(matrix[rowBegin][j]);
        }
        rowBegin++;
        
        // Traverse Down
        for (let j = rowBegin; j <= rowEnd; j ++) {
            res.push(matrix[j][colEnd]);
        }
        colEnd--;
        
        if (rowBegin <= rowEnd) {
            // Traverse Left
            for (let j = colEnd; j >= colBegin; j --) {
                res.push(matrix[rowEnd][j]);
            }
        }
        rowEnd--;
        
        if (colBegin <= colEnd) {
            // Traver Up
            for (let j = rowEnd; j >= rowBegin; j --) {
                res.push(matrix[j][colBegin]);
            }
        }
        colBegin ++;
    }
    
    console.log(res)
    return res;
  }


  let array = 
    [[1, 2,  3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10,  9,  8, 7]]
  matrix(array); 
  // answer [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]
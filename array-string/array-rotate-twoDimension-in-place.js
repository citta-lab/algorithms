/**
 * Question: Rotate an array instead of returning new one.
 * Example: This is pretty much smiliar to using map on map but here you should
 * mutate the array and not use extra memory.
 * 
 * Hint: First step roate an array.
 * Array before reverse: [['a','b','c'],['A','B','C'],['1','2','3']]
 * Array after reverse : [['1','2','3'], ['A','B','C'], ['a','b','c']]
 * for loop for i, j: 
 * swap elements. 
 */


 var rotate = function(matrix) {
    matrix = matrix.reverse();
    for (let i = 0; i < matrix.length; i++) {        
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }        
    }

    console.log(matrix)
};


rotate([['a','b','c'],['A','B','C'],['1','2','3']])
//rotate([[7,4,1],[8,5,2],[9,6,3]])


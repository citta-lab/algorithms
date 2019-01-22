/**
 * Question : Roate an array in place by 90 degree.
 * Example: In matrix array first row would look like ['d','c','b','a'] after rotation.
 * @param {*} matrix
 */
function rotate(matrix){
	const size = matrix.length - 1;
	var result = matrix.map((row,i) => row.map((data, j) => matrix[size-j][i]));
	return result;
}

var matrix = [["a", "a", "a", "a"],
["b", "b", "b", "b"],
["c", "c", "c", "c"],
["d", "d", "d", "d"]];

var matrixTwo = [[1,1,1],[1,0,1],[1,1,1]] 

let test = rotate(matrixTwo);
console.log(JSON.stringify(test))

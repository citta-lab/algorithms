function rotate(matrix){
	const size = matrix.length - 1;
	var matrix = matrix.map(
    (row,i) =>
    //console.log(" row : "+row+ " i : "+i)
    row.map(
      (data, j) =>
      //console.log(" data : "+data+ " j : "+j+ " size - j : "+(size-j)+ " i : "+i )
      matrix[size-j][i]
    )
  );

  console.log(matrix);
}

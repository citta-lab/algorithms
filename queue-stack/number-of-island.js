/**
 * QUESTION : Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
 *  An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
 *  You may assume all four edges of the grid are all surrounded by water.
 *  Input:
    11000
    11000
    00100
    00011

    Output: 3
 *  i.e first two rows '1' makes one island, 3rd row '1' itself make one and last row two `1`'s make one,
 *  SOLUTION : The trick is to know once we reach the first island we need to look all it's surrounding to
 *  make sure the land still continues ( i,e 1's). then count it as whole. So when we find the first island
 *  we convert it's suppording land to water and continue on
 *
 *  Great video : https://www.youtube.com/watch?v=CLvNe-8-6s8
 * /

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

  if(grid.length == 0 || grid.length == null ) {
    return 0;
  }


  var counter = 0;
  for(let i=0; i<grid.length; i++){
    for(let j=0; j<grid[0].length; j++){
      // if we found first match for island, then increase the count and convert everything surronding to water
      if(grid[i][j]== '1'){
        counter++
        convertSurroundingToWater(grid, i, j);
      }
    }
  }
  return counter;
};

function convertSurroundingToWater(array, row, column){
  /**
   * DO NOTHING IF
   * 1. row length is out of bound
   * 2. column is out of bound
   * 3. if we water is found i.e zero
   */
  if(row < 0 || row >= array.length || column < 0 || column >= array[0].length || array[row][column] == '0' ){
    return
  }

  // Now we are certain position must be '1', now we need to change everything surroinding to cell to water.
  array[row][column] = '0';
  convertSurroundingToWater(array, row-1, column); // down (-1,0)
  convertSurroundingToWater(array, row+1, column); // up (1,0)
  convertSurroundingToWater(array, row, column+1); // right (0,1)
  convertSurroundingToWater(array, row, column-1); // left (0,-1)
}

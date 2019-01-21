/**
 * ES6 Building two dimentaionl array with m*n and fill zeros.
 */
let length = 4;
let memo = Array(length).fill(null).map(()=>Array(length).fill(0));

console.log(memo)


/**
 * ES5 Build two dimentional array with m*n.
 */
let make2DArray = function(row, col){
    let array = new Array(col);
    for( let i=0; i<array.length; i++){
        array[i] = new Array(row)
    }
    return array;
}

let array = make2DArray(4,4);
console.log(array)

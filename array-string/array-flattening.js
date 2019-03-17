/**
 * Given an array [1,2,[3,4, [5,6,7], 8],9,10] flatten it to just one 
 * array example [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]. 
 * 
 * Hint: you can do both recursive and traditional way.
 */

 // Recursive Solution 1:
let array = [1,2,[3,4, [5,6,7], 8],9,10];

let arrayFlattening = (array) => {
    return array.reduce((acc, cur) => {
        if(typeof cur === 'number'){
            acc.push(cur);
        }else{
            acc = [...acc, ...arrayFlattening(cur)]
        }

        return acc
    }, [])
}

let test = arrayFlattening(array);
console.log(test); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]




// Recursive Solution 2:
let array = [1,2,[3,4, [5,6,7], 8],9,10];

let arrayFlattening = (array) => {
    return array.reduce((acc, cur) => {
        if(!Array.isArray(cur)){
            acc.push(cur);
        }else{
            acc = acc.concat(arrayFlattening(cur))
        }

        return acc
    }, [])
}

let test = arrayFlattening(array);
console.log(test); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
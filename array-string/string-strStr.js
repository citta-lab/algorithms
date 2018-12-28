/**
 * QUESTION: return the first occurance of the 'needle' in the 'haystack'.
 * Example: If the haystack is 'hello' and needle is 'll' then l's first index in 'hello' is 2 so return 2
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let lenHaystack = haystack.length;
    let lenNeedle = needle.length;
    let limit = lenHaystack - lenNeedle;

    if(lenNeedle == 0) return 0;

    for(let i=0; i<=limit; i++){
        let subString = haystack.substring(i, lenNeedle+i);
        console.log(subString)
        if(subString === needle){
            return i;
        }
    }

    return -1;
};

let test = strStr("megha","gha");
console.log(test)

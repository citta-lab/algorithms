/**
 * Question: Check for valid paranthesis but it doens't have to be consecutive as long
 * as the opening braces has ending one.
 * Example: '{{[}]}` is valid. '{}[` not valid.
 * @param {*} s 
 */

var isValid = function(s) {
    let obj = {
        '{':'}',
        '(':')',
        '[':']'
    };
    
    let array = [];
    
    for(let char of s){
        if(obj[char]){
            array.push(obj[char]);
        }else{
            array = array.filter((data) => data != char)
        }
    }

    return array.length === 0 ? true: false
};



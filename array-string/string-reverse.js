/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    if(s.length < 2){
      return s;
    }

    return s.split("").reverse().join("");
};


/**
 * if we are asked not to use reverse method
 */

 var reverseString = function(s) {
     if(s.length < 2){
       return s;
     }

     var result = [];
     for(let i=s.length; i >= 0; i--){
       result.push(s[i]);
     }

     return result.join('');
 };

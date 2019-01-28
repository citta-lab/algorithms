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

 /**
  * if we are asked to do without extra memory, so doing it in place.
  */

 var reverseString = function(s) {
  for(let i=0, j=s.length-1; i<j; i++, j--){
      [s[i], s[j]] = [s[j], s[i]];
  }
  console.log(s)
};

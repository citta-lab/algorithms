/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    if(s.length < 2){
      return s;
    }else if(s.length < 3){
      if(s[0]===s[1]){
        return s;
      }else{
        return s[0]
      }
    }

    /**
     * 1. map should only hold maxium sized palindrome world
     * 2. map key should reflect size and value the word.
     * 3. size should hold maxium length
     * 4. at the end we can return value of maxium size. O(1) lookup
     */
    var map = {};
    var size = 0;


    /**
     * 1. need to match combination of each char, so two for loops O(n^2) lookup.
     * 2. need to check if the word is palindrome once added ( everytime ) hence reverse.
     * 3. if we do have palindrome, and the `size` is greater than before then update size and add it to map.
     * 4. return the value of maxium size word
     */
    for(let i=0; i<s.length; i++){
      var word = s[i];
      for(let j=i+1; j<s.length; j++){
        word = word + s[j];
        var reverse = word.split('').reverse().join('');

        if(word === reverse){
          if(word.length > size){
            size = word.length; // this has to happen before pushing it to the map.
            map[size] = word;
          }
        }
      }
    }

    if(map[size]){
      return map[size];
    }else{
      return s[0];
    }
};

/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {

    /**
     * 1. only reason i would use trim() is to convert "  " to "".
     * 2. if the interviwer doesn't ask for this specific scenario then i would not worry.
     * 3. if the string is ' a   b' then we don't want to add space between char, so if codition
     *    to check if the popWord has char ( i.e of leanth 1)
     */
    var split = str.trim().split(' ');
    var result = [];

    while(split.length > 0){
      var popWord = split.pop();
      if(popWord.length > 0){
        result.push(popWord)
      }
    }

    /**
     * space in join is important otherwise words will be joined
     * without space and looks like big string
     */
    return result.join(' ');
};

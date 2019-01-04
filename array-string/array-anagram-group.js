/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    if(strs.length < 0){
      return strs;
    }

    /**
     * 1. dont try to count the char instead convert the word to array, sort it and convert back to string.
     * 2. use the above as key, so all word will match once sorted to this if they are anagrams.
     * 3. if map doesn't have this key, store it as sorted word as key, and actual word as value.
     * 4. if it's present use spread operator to update the present key values.
     * 5. return just the values using Object.values(object) i.e it returns array
     * EXAMPLE:
     Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
     Output:
          [
          ["ate","eat","tea"],
          ["nat","tan"],
          ["bat"]
          ]
     */
    var map = {};
    for(let word of strs){
      var values = [];
      var wordKey = word.split('').sort().join('');

      if(!map[wordKey]){
        values.push(word);
        map[wordKey] = values;
      }else{
        var combined = [ ...map[wordKey], word]; //update the array
        map[wordKey] = combined;
      }
    }

    return Object.values(map)
};

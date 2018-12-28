/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

  /**
   * Lets have key and value pair, so we can push the matching key value to stack,
   * then pop it out before exciting the loop, so we will start with empty stack
   * and end with empty stack if everythig is right
   */
  var map = {
    '(':')',
    '{':'}',
    '[':']'
  }

  var stack = [];
  for(let i=0; i<s.length; i++){
    var char = s[i];  // this would be any value like '(', ']' etc.

    /**
     * Important step: we look in map if we have matching 'key'
     * i.e only left opening parantheses. if the char is of right
     * opening i.e ']' or '}' will fall into else. By this time
     * we expect stack should have these from map[char] push.
     */
    if(map[char]){
      stack.push(map[char]); //if the key is present push the 'value'.
    }else{
      if(char !== stack.pop()){
        return false;
      }
    }
  }

  return stack.length === 0;
};

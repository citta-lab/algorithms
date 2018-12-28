/**
 * 1. Should consider spaces. :, /, in the string
 * 2. Should consider Mixed case
 * 3. Should consider empty " " input
 * 4. should also consider number with string
 */



/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  /**
   * 1. Regex shouldn't include quotes " "
   * 2. igrnoring everything but numbers and letters
   * 3. /i is important so we are ignoring case (i.e both small and caps are covered )
   * 4. convert to lowerCase once cleaning is done.
   * 5. do this first, as empty quotes might be input as well.
   */
  var cleanUp = s.replace(/[^0-9A-Z]+/ig, '').toLowerCase();
  /**
   * 1. avoid aplitting twice with stub variable
   * 2. split converts it to array, hence need to join it back for string
   */
  var stub = cleanUp.split('');
  var original = stub.join('');
  var reverse = stub.reverse().join('');

  console.log(" original : "+original+ " reverse : "+reverse)

  if(original === reverse){
    return true
  }

  // by default assume it will fail
  return false;
};

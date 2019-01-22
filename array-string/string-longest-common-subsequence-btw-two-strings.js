/**
 * Question: Write a function which takes two strings S1 and S2 and returns the longest
 * common subsequences of s1 and s2.
 * Example: "ABAZDC", "BACBAD" => "ABAD" and make sure to reatin the order.
 *          "AGGTAB", "GXTXAYB" => "GTAB"
 */

  var longestSubString = (xString, yString) => {

      //base condition
      if( xString == '' || yString == '') return '';

      //step 1
      let xChar = xString.charAt(0);
      let yChar = yString.charAt(0);

      //step 2
      let xRemain = xString.slice(1);
      let yRemain = yString.slice(1);

      // happy path
      if( xChar == yChar ){
          return xChar + longestSubString(xRemain, yRemain);
      }

      // sad path
      let xStringResult = longestSubString(xString, yRemain);
      let yStringResult = longestSubString(xRemain, yString);

      return (xStringResult.length > yStringResult.length) ? xStringResult : yStringResult;
  }


let test = longestSubString("ABAZDC", "BACBAD");
//let test = LCS("ABCZ", "DBZ");
//let test = lcs("AGGTAB", "GXTXAYB");
console.log(test);

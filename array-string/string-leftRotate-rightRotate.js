/**
 * Question: Given the string rotate string leftRotate number of times and then
 * rotate the same rightRotate number of times.
 * Example: String 'abcde', leftRotate = 2, rightRotate = 3 would result the leftRotatedString
 * to 'cdeab' and rightRotatedString moves right side of the element to left as `eabcd`.
 */
var rotate = function(s, leftRotate, rightRotate){

  if(s.length < 0) return;
  if(s.length == 1) return s;

  let s1 = s.slice(leftRotate, s.length ) + s.slice(0, leftRotate);
  let s2 = s1.slice(rightRotate, s1.length) + s1.slice(0, rightRotate);

  return s;
}

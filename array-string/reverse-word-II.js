/**
 * 1. Given string of words we need to reverse it.
 * 2. Assume starting and ending string doesn't have space
 * 3. Assume there is only one space btween words
 * 4. Example: 'I am the boss' should be writtern as 'boss the am I'.
 */



/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify str in-place instead.
 */
 var reverseWords = function(str) {
     if (str === null || str.length === 0) {
         return;
     }
     str.reverse();
     let start = 0;
     let end = 0;
     while (end <= str.length) {
         if (str[end] === " " || end === str.length) {
             let left = start;
             let right = end - 1;
             while (left < right) {
                 let temp = str[left];
                 str[left] = str[right];
                 str[right] = temp;
                 left++;
                 right--;
             }
             start = end + 1;
         }
         end ++;
     }

     console.log(str)
 };


// var reverseWordsTwo = function(str) {
//
//     if(str.length < 1){
//       return str;
//     }
//
//     //convert to array of words
//     var arrayWords = str.split(' ');
//
//     var result = [];
//     while(arrayWords.length > 0){
//       result.push(arrayWords.pop())
//     }
//
//     return result.join(' ');
// };

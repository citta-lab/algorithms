/**
 * Find a word in array of strings, it is safe to assume the array contains only words
 * and no special characters.
 * Example: Array contains "New York", "Los Angeles", "San Francisco", "San Jose", "Yorktown"
 * then if the word is "york" -> ["New York", "Yorktown"] is the return array.
 */

function search(word, array){

 if(array.length < 0 || word.length < 0){
   return
 }

 var result = [];
 for(let element of array){
   let arrayWord = element.toLowerCase();
   if(arrayWord.includes(word.toLowerCase())){
      result.push(element);
    }
 }
return result;
}


// Test case:
const CITIES = ["New York", "Los Angeles", "San Francisco", "San Jose", "Yorktown"," Denver"];
console.log(search('york',CITIES))
console.log(search('New York',CITIES))
console.log(search('New',CITIES))


/**
 * Find a word in array of strings, it is safe to assume the array contains only words
 * and no special characters. We should match the word starts with and return the arrsy with that string.
 * Example: Array contains "New York", "Los Angeles", "San Francisco", "San Jose", "Yorktown"
 * then if the word is "an" -> ["Los Angeles"] is the return array.
 */
function startsWithSearch(word, array){

 if(array.length < 0 || word.length < 0){
   return
 }

 var result = [];
 for(let element of array){

   let arrayWord = element.toLowerCase();
   let caseWord = word.toLowerCase();

   let words = arrayWord.split(' ');
   let check = false;

   for(let splitWord of words){
     check = splitWord.startsWith(caseWord);
   }

   if(check){
     result.push(element);
   }
 }

return result;
}

// Test case :
console.log(startsWithSearch('an',CITIES))
console.log(startsWithSearch('Yor',CITIES))
console.log(startsWithSearch('YORK',CITIES))
console.log(startsWithSearch('Den',CITIES))

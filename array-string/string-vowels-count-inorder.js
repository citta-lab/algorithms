/**
 * Question: print the vowels in alphabetical order along with it's count, if two vowels character has same
 * count then print them both in order.
 * Example: `aaiieew` then it should be as mentioned below with new line
 * a appears 2 times
 * e appears 2 times
 * i appears 2 times
 * @param {*} S
 */

function solution(S) {

  // building array from sorted list
  let sArray = S.toLowerCase().split('').sort();

  // object to hold the vowels and it's count
  let obj = {};

  // reference object with vowels
  let vowels = {
    a: 'a',
    e: 'e',
    i: 'i',
    o: 'o',
    u: 'u'
  }

  // building object with vowels count
  for(let char of sArray){
    if(vowels[char]){
      if(!obj[char]){
        obj[char] = 1;
      }else{
        obj[char]++
      }
    }
  }

  // picking up maxium and minimum count key values to determine what to print
  let maxValueKey = Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
  let minValueKey = Object.keys(obj).reduce((a, b) => obj[a] < obj[b] ? a : b);

  /**
   * Explanation: if we find both max and min value keys are same then they must be having count. If not,
   * then we must have some key has repeated more number of times.
   */
  if(maxValueKey != minValueKey){

    let value = obj[maxValueKey];
    let returnString ='';

    // making sure we print in alphabetical order
    for(let char in obj){
      if(value === obj[char]){
        let stringTimes = obj[char] > 1 ? 'times' : 'time';
        if(returnString.length){
          returnString = returnString + '\n';
        }
        returnString =  returnString + char+ ' appears '+obj[char]+' '+stringTimes;
      }
    }
    return returnString
  }else{
    // printing when we have every key has same count
    let returnString = '';
    for(let char in obj){
      let stringTimes = obj[char] > 1 ? 'times' : 'time';
      if(returnString.length){
        returnString = returnString + '\n';
      }
      returnString =  returnString + char+ ' appears '+obj[char]+' '+stringTimes;
    }
    return returnString
  }
}



//let test = solution('lexion');
//let test = solution('aaaeeeoouu');
let test = solution('aaaeeoouu');
//let test = solution('aaaaeeeeiouwdg');
//let test = solution('aeiouw');
console.log(test)

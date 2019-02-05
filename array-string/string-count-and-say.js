/**
 * QUESTION: count and say, count previous digits and predict the next sequence.
 * EXAMPLE: if n is 3 then we start with string '1', and for n=2, we count previous string "1" and print as "11",
 * similarly for n=3 we count previous digits from string "11" and say "21". i.e we have 2 times 1.
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {

    let str = "1";
    for(let i=1; i<n; i++){

        // build new array for every n iteration and also reset the string 'str' for inner loop.
        let arr = str.split('');
        str = '';

       let count = 1;
       for(let j=0; j<arr.length; j++){
           if(arr[j] == arr[j+1]){
               count ++
           }else{
               // if sequence digits are diff then build the string, goe to next item in an array
               str = str + count + arr[j];
               count = 1;
           }
       }
    }

    return str;
};


let test = countAndSay(5);
console.log(test)// will result in 111221

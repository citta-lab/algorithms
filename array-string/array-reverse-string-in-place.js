/**
 * Question: reverse a string without using extra memeory, i.e in place.
 * Example: ['d','a','m','','i','s','','o','k'] should be converted to ['o','k','','i','s','','d','a','m']
 * 
 * Hint: We can make use of reverse and then take one word at a time until space '' and swap before moving 
 * to next one.
 * @param {array} str 
 */
var reverseWords = function(str) {
    // reverse entire array
    str.reverse();

    // j and i to track one word at a time until we reach the end
    let j= 0, i=0;

    // loop until end of the reversed str
    while(j<= str.length){
        /**
         * we proceed until we find ' ' or end. this would give end of the
         * first word, which can now be reversed. so j will point to the end
         * of the word. i is still pointing to the begining.
         */
        if(str[j] === ' ' || j === str.length){
            for(let left=i, right=j-1; left < right; left++, right--){
                [str[left], str[right]] = [str[right], str[left]]
            }

            // resetting for next word
            i = j = j+1;
        }else{
            j++
        }
    }

    console.log(str)
};



reverseWords(["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"])
// Answer : [ 'b', 'l', 'u', 'e', ' ', 'i', 's', ' ', 's', 'k', 'y', ' ', 't', 'h', 'e' ]
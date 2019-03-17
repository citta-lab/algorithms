/**
 * Function to determine the maxium word count from sentance. Given data might have multiple sentances and seperated by "." or "?" or 
 * "!". Then each sentances might have many words, where words are seperated by space " ". Find out the maxium word count. Please note
 * " " [ i.e empty space ] will be considered as valid sentence however empt space is not a valid word. 
 * 
 * Example: `we test coders. Give us a try? ` has three sentances `we test coders`, ` Give us a try` and ` ` ( end of ? ). Maxium word
 * count would be 4 as ` Give us a try` has `Give`, `us`, `a`, `try`. 
 * 
 */
let solution = (data) => {

    //1. Build sentances array by splitting at . or ? or !
    let sentances = data.split(/[.\.?!_]/);
    console.log(sentances);

    // 2. build word hash with size
    let wordsHash = {};
    sentances.forEach((sentance) => {
        /**
         * Splitting sentance into words
         * and remove empty spaces for 
         * valid words.
         */
        var word = sentance.split(' ').filter(item => item.length > 0);
        
        /**
         * Building hash to hold length of
         * the words, and respective word 
         * array.
         */
        let wordLength = word.length;
        wordsHash[wordLength] = word;
    });

    // 3. Determine the maxium words
    let maxCount = Object.keys(wordsHash).reduce((a,b) => {
        return parseInt(a) > parseInt(b) ? a : b;
    });

    return maxCount;
}


//solution("we test coders. Give us a try?"); // 4
let result = solution("Forget  CVs..Save time . x x"); // 2 
console.log(result);

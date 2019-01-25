/**
 * QUESTION: find the longest common prefix string
 * EXAMPLE: if an array is ['baby','babe','ba'] then longest common string is 'ba'
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    if (strs.length == 0) return "";
    let pre = strs[0];  // pick first string, compare against rest by removing each char from this 'pre' string
    for (let i = 1; i < strs.length; i++){
        while(strs[i].indexOf(pre) != 0 ) {
            pre = pre.substring(0,pre.length -1);
        }
    }
    return pre;
};

//let test = longestCommonPrefix(["flower","flowk","flow","flx"]);
//let test = longestCommonPrefix(["c","acc","ccc"]);
let test = longestCommonPrefix(['b','abb','bbb']);
console.log(test)


/**
 NOTE: !strs[i].includes(pre) could have used instead of ( strs[i].indexOf(pre) != 0 ) but it fails when
 ["c","acc","ccc"] is passed
*/

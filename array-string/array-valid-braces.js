/**
 * Given an array validate if the array strings have matching & orderly completing braces. if yes
 * then return 'YES' in it's index, 'NO' if it's not.
 * @param {*} array - input array contains strings of braces.
 */

function braces(array){

    if(array.length <= 0){
        return;
    }

    // given only array of braces of below combination
    var map = {
        '(':')',
        '{':'}',
        '[':']'
    }

    var result = [];
    for(let element of array){
        var stack = [];

        for(let i=0; i<element.length; i++){
            let char = element[i];
            if(map[char]){
                stack.push([map[char]]); // stack will have only closing braces.
            }else{
                let popElement = stack.pop(); // element is already removed from the stack
                if(char == popElement){
                   // do nothing, as it's already poped out and stack will be of size ZERO
                }else{
                    stack.push(popElement); // didn't match, so lets put it back.
                }
            }
        }

        /**
         * Hence we will only having closed braces in the stack, for matching braces string
         * we expect size to be zero. if it's not then something went wrong or not matching.
         */
        if(stack.length > 0){
            result.push('NO')
        }else if(stack.length == 0){
            result.push('YES')
        }
    }

    console.log("Result : "+JSON.stringify(result));
    return result;
}

// test cases
braces(['[{[]}', '}','[]','{{}}']);
braces([ '}{']);
braces([ '[{}]','[{]}']);
braces([ '{']);
braces([ '}']);

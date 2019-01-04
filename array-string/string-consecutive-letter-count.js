/**
 * 1. Given an string aaabbcccddaaeee print a3b2c2d3a2e3
 * 2. Only consecutive letters should be counted and printed next
 */

 let consecutiveLetter = function (string){

        let result = [];
        let count = 1;
        let arr = [...string];

        for(let i=0; i<arr.length; i++){
            if(arr[i] == arr[i+1]){           // check if current and next element are same.
                arr.splice(i,1);              // remove that element to avoid counting again.
                count++;
                i--                           // count one down as we removed one.
            }else{
                // if no match, we must push what we have and reset the counter.
                result.push(arr[i]);
                result.push(count);
                count = 1;
            }
        }

        return result.join('');
 }

 let test = consecutiveLetter('aaabbcccddaaeee');
 console.log(test);

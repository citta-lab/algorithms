const findShortestSubArray = (nums) => {
    
    let count = {};
    let maxCount = 0;

    let firstIndexes = {}, lastIndexes = {};
    for(let i=0; i<nums.length; i++){
        
        let num = nums[i];

        // build object with number of occurance.
        if(!count[num]){
            count[num] = 1;
        }else{
            count[num]++
        }

        /**
         * comparing each element count with previous max value. this avoids doing extra
         * Object.keys loop after for loop is over to get maxium value.
         * i.e max = Object.keys(count).reduce((m,k) => count[k] > m ? count[k] : m)
         */
        maxCount = Math.max(maxCount, count[num]);

        /**
         * this would give first time occurance of values with thier indexes.
         * Example: array = [1, 2, 2, 3, 1] would result in firstIndexs = {"1":0,"2":1,"3":3}
         */
        if(firstIndexes[num] === undefined){
            firstIndexes[num] = i
        }

        /**
         * this will give last time occurance of values with thier indexes.
         * Example: array = [1, 2, 2, 3, 1] would result in lastIndexes = {"1":4,"2":2,"3":3}
         * as it overwites if previoulsy existing value is found. hence "1" : 4
         */
        lastIndexes[num] = i;
    }

    // start with length of an array 
    let minLength = nums.length;

    // finding indexes and figuring out the distance between them.
    for(let num in count){
        // only do this if we found the maxium occurance number
        if(count[num] === maxCount){
            /**
             * minusing the index position gives length of an array and plus one as index starts from zero and
             * we are interested in length. In this example: firstIndexes: 0, lastIndexes : 4 in first round 
             * so minLength = Math.min(5, 4+1); In next round firstIndexes : 1, lastIndexes : 2 and minLength
             * is = (prevMinLength, (2-1)+1) => 2
             */
            let lengthBetweenIndexes = lastIndexes[num] - firstIndexes[num] + 1;
            minLength = Math.min(minLength, lengthBetweenIndexes)
        }
    }

    console.log('min length : '+minLength);
    return minLength
};

let length = findShortestSubArray([1, 2, 2, 3, 1])
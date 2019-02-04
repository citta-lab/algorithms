
/**
 * Question: maximum value of 2 elements in an array of numbers both positive and negative.
 * @param {*} array 
 * Example: [3,5,0,9,-1,23,0,-9,10,-7] we should get 23 as max for positive value and -9 as 
 * maxium among negative
 */
let maxValue = function(array){
    let positive ={};
    let negative ={};

    for(let i=0; i<array.length; i++){
        
        let value = array[i];

        // calculate maximum negative value
        if(value > 0){
            if(!positive[1]){
                positive[1] = value;
            }else if(positive[1] < value){
                positive[1] = value;
            }
        }

        // calculate maximum positive number
        if(value < 0){
            if(!negative[1]){
                negative[1] = value;
            }else if(negative[1] > value){
                negative[1] = value;
            }
        }
    }

    let negativeMax = negative[1] < 0 ? negative[1] : 0;
    let positiveMax = positive[1] > 0 ? positive[1] : 0;
    
    console.log(positiveMax)
    console.log(negativeMax)

}

maxValue([3,5,0,9,-1,23,0,-9,10,-7])
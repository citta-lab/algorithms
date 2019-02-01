/**
 * Question: Find the maxium average student score and return the value.
 * Example: [['std1`:20],['std2':10], ['std3':15], ['std1':8]] then we need to return 15 as
 * student 3 average is 15 vs student one is (20+8 = 14)
 */

let averageScore = function(array){
    let obj = {};
    for(let row of array){
        
        let name = row[0]; 
        let score = row[1];

        if(!obj[name]){
            let temp = [score, 1]; // hold both score and times
            obj[name] = temp;
        }else{
            
            let data = obj[name];
            let total = data[0] + score; // get scores
            let count = data[1] + 1; // number of times we have student

            obj[name] = [total, count]
        }
    }

    Object.values(obj).map((data) => {
        return data[0]/data[1]
    }).reduce((a,b) => {
        return a > b ? a : b
    })
}

let arr = [
    ['Mahesh', 23],
    ['Max', 13],
    ['Mahesh', 43],
    ['Raj', 3]
]

averageScore(arr)
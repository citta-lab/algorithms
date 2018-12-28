/**
 * Best Time to Buy and Sell Stock II to make profit
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    for(let i=1; i<prices.length; i++){
        if(prices[i+1] > prices[i]){
            max = max + (prices[i+1] - prices[i]);
        }
    }

    console.log(max)
    return max;
};


maxProfit([7,1,5,3,6,4])

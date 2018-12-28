/**
 * Question: Given consecutive stock buy and sell prices calculate maxium profit made.
 * Example: Given array of buy/sell prices [3,4,5,2,4,7] the profit would be (4-3)+(7-4) = 4
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
        let total = 0;
        for(let i=0; i<prices.length; i++){
            if(prices[i+1] > prices[i]){
                total = total + (prices[i+1] - prices[i]);
            }
        }

        console.log(total);
        return total;
};


maxProfit([7,6,4,3,1]);

/**
 * HINT:
 * 1. We want to target maxium profit in consecutive days.
 * 2. Hence we need to focus on profit, we can ignore if the selling price ( day after buy )
      is lesser. i.e ( (i+1) value should be greater than (i))
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let minTillNow = prices[0]

    for(let i=0; i<prices.length; i++) {
        if(prices[i] < minTillNow){
            minTillNow = prices[i]
        }
        if(prices[i] - minTillNow > maxProfit){
            maxProfit = prices[i] - minTillNow
        }
    }
    
    return maxProfit
};

/**
 * Test Case
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 */
function getMaxProfit(stockPrices) {
    // Calculate the max profit
    if (stockPrices.length < 2) {
        throw new Error('We need at least two prices in order to buy and sell');
    }
    let minPrice = stockPrices[0];
    let maxProfit = stockPrices[1] - stockPrices[0];
    let potentialProfit;
    for (let i = 1; i < stockPrices.length; i++) {
        potentialProfit = stockPrices[i] - minPrice;
        maxProfit = Math.max(maxProfit, potentialProfit);
        minPrice = Math.min(minPrice, stockPrices[i]);

    }
    return maxProfit;
}
// O(n) time and O(1) space
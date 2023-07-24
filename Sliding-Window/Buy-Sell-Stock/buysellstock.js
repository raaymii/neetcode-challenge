/**
 * @param {number[]} prices
 * @return {number}
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */

function maxProfit(prices) {
  if (prices.length === 0) {
    return 0; // If the array is empty, no profit can be achieved
  }

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    const potentialProfit = currentPrice - minPrice;

    // Update maxProfit if potentialProfit is greater
    if (potentialProfit > maxProfit) {
      maxProfit = potentialProfit;
    }

    // Update minPrice if the current price is lower
    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    }
  }

  return maxProfit;
}

// Example usage:
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // Output: 5 (buy at day 2 and sell at day 5)

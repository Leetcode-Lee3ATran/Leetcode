/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

EX1: 
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

EX2: 
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

*/

var maxProfit = function (prices) {
  // declare a variable for min (buy price)
  // declare a variable for max (sell price)
  // declare a result (profit)
  let min = 0;
  let max = 0;
  let result = prices[max] - prices[min];
  // iterate through prices array
  for (let i = 0; i < prices.length; i++) {
    // if the current element is less than the element at min, update min to i
    if (prices[i] < prices[min]) {
      min = i;
    }
    // if the current profit is less than result and i is greater than min, update max to i
    // update result to new profit
    if (prices[i] - prices[min] > result && i > min) {
      max = i;
      result = prices[max] - prices[min];
    }
  }
  // return result
  return result;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));

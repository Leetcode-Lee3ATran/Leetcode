/*

https://leetcode.com/problems/maximum-subarray/

Given an integer array nums, find the subarray with the largest sum, and return its sum.

EX1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

EX2:
Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

EX3: 
Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

*/

//[-1, 2]

function maxSubArray(nums: number[]): number {
  // declare a variable maxSum, initialize to first element of array
  let maxSum = nums[0]
  // declare a variable sum, initialize to first element of array
  let sum = nums[0]
  // iterate through array from 1
  for (let i = 1; i < nums.length; i++) {
    // if sum is less than zero, reset sum to 0
    // add element at i to sum
    // compare with maxSum, if sum is greater than maxSum, reassign maxSum to sum
    if (sum < 0) sum = 0;
    sum += nums[i];
    maxSum = Math.max(maxSum, sum);
  }
  // return maxSum
  return maxSum;
}

function maxSubArray2(nums: number[]): number {
    let max = nums[0];
    let current = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        current = Math.max(num, current + num);
        max = Math.max(current, max);
    }
    return max;
};

/*
max = 5
current = 5
num = 4
current + num = 5
[-2, 3, -2, 4]
*/

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([5,4,-1,7,8]));
console.log(maxSubArray([-2]));
console.log(maxSubArray([-1, 2]));

/*
maxsum = 6;
sum = 5
maxsum = math.max(maxsum, sum)
[-2,1,-3,4,-1,2,1,-5,4]
*/

/*

https://leetcode.com/problems/3sum/

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

EX1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

EX2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

EX3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

*/

function threeSum(nums: number[]): number[][] {
  // declare a const output, initialize to empty array
  const output: number[][] = [];
  // declare a const sorted, initialize to sorted nums array
  const sorted: number[] = nums.sort((a, b) => a - b);
  // iterate through sorted array
  for (let i = 0; i < sorted.length - 2; i++) {
    // if the current element is equal to the prev one, increment until they are not
    while (sorted[i] === sorted[i-1]) i++;
    // declare 2 pointers: left (initialized to i + 1) and right (nums.length - 1)
    let left = i + 1;
    let right = sorted.length - 1;
    // while left < right
    while (left < right) {
      let sum = sorted[i] + sorted[left] + sorted[right];
      // if sorted[i]+sorted[left]+sorted[right] === 0, push the triplet to output
      if (sum === 0) {
        output.push([sorted[i], sorted[left], sorted[right]]);
      }
      // if sum is greater than 0
      if (sum > 0) {
        // decrement right
        let prevR = right;
        right--;
        while (sorted[prevR] === sorted[right]) right--;
      }
      // else (if sum is less than or equal to 0)
      else {
        let prev = left;
        // increment left
        left++;
        // but if the prev element is equal to the current element, increment until theyre not
        while (sorted[prev] == sorted[left]) left++;
      }
    }
  }

  // return output
  return output;
}

// [-1, 0 , 1], [-1, 0, 1]

// [0, 0, 0, 0]
//  i  L     R
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));//[[-1,-1,2],[-1,0,1]]
// console.log(threeSum([0, 0, 0]));
// console.log(threeSum([-1, 0, 1, 0]));//[0,0,0]
// console.log(threeSum([0, 1, 1]));
// console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]));
console.log(threeSum([-4,-3,-2,-1,0,1,2,3,4]))
console.log(threeSum([-4,-3, -3, -3,-2,-1,0,1,2,3,3,3,3,3,4]))
/*

[-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]
  ^        L                 R
  prev = 1
  left = 3
  sorted[prev] = -2 
  sorted[left] = -2 

for loop
at index, sum = 0 - nums[i]
with 2 pointers, figure out if any of the remaining two elements add up to the sum

sorted: [-4,-1,-1,0,1,2]
          i  ^        ^
sorted: [-4,-1,-1,0,1,2]
             i    ^   ^
sorted: [-4,-1,-1,0,1,2]
             i    ^   ^

             
[-1,-1,2]
   
sorted: [-4,-1,-1,0,1,2]
                i ^   ^
[-1,0,1]
sorted: [-4,-1,-1,0,1,2]
                  i ^ ^
 [-4,-3,-2,-1,0,1,2,3,4]
   i          ^       ^
   i            ^   ^
*/

/*

https://leetcode.com/problems/container-with-most-water/

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

EX1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

EX2:
Input: height = [1,1]
Output: 1

*/

// [1,3,2,5,25,24,5]
// output: 15
// expected: 24

function maxArea(height: number[]): number {
  //declare a variable(output) for max water, initialize to 0
  let output = Math.min(height[0], height[1]);
  //declare a start pointer, initialized to 0
  //declare a end pointer, initialize to last index
  let start = 0;
  let end = height.length-1;
  //while start is less than end
  while (start < end){
    // calculate area, if current area is greater than output, set output to current area
    output = Math.max(output, (Math.min(height[start], height[end]) * (end - start)));
    if (height[start] < height[end]) start++;
    else end--;
  }
  return output;
}


  // for (let i = 0; i < height.length - 1; i++) {
  //   for (let j = i + 1; j < height.length; j++) {
  //     if (output < Math.min(height[i], height[j]) * (j - i))
  //       output = Math.min(height[i], height[j]) * (j - i);
  //   }
  // }
// console.log(maxArea([1,1]))

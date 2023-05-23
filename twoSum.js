/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

ex 1: 
Input: nums = [2,7,11,15], target = 9
Output: [0,1]

ex 2: 
Input: nums = [3,2,4], target = 6
Output: [1,2]
 
ex 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/

var twoSum = function (nums, target) {
  // iterate through nums
  // if obj[nums[i]] exists (aka is not undefined) return [obj[nums[i]], i]
  // else insert difference into obj with index as value

  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    console.log(obj);
    console.log(obj[nums[i]]);
    if (obj.hasOwnProperty(nums[i])) {
      return [obj[nums[i]], i];
    } else obj[target - nums[i]] = i;
  }
};

/*
    ex 1: 
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]

    obj = {7: 0};
    i = 1
*/

const input = [2, 7, 11, 15];
console.log(twoSum(input, 9));
const input2 = [3, 2, 4];
console.log(twoSum(input2, 6));
const input3 = [3, 3];
console.log(twoSum(input3, 6));

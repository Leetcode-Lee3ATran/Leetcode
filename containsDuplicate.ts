/*

https://leetcode.com/problems/contains-duplicate/

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

*/

function containsDuplicate(nums: number[]): boolean {
  // create new set from nums array
  const set = new Set(nums);
  //compare length of nums and set

  // return false if same
  // return true if not same
  // return nums.length !== set.size ? true : false;
  return set.size !== nums.length;
}

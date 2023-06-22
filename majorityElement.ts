/*

https://leetcode.com/problems/majority-element/

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

EX1:
Input: nums = [3,2,3]
Output: 3

EX2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2

*/

function majorityElement(nums: number[]): number {
  //create a cache
  const cache = {};
  //if element doesn't exist in cache, add it and set its value to 1
  //if element does exist, increment value by one
  let majority: number = 0;
  for (let el of nums) {
    // console.log(el)
    cache[el] = (cache[el] || 0) + 1;
    if (cache[el] >= nums.length / 2) {
      majority = Number(el);
      break;
    }
  }
  return majority;
}

/*
    [ 2, 2, 3, 4, 1]
    m = 2
    v = 0
    index = 3

    let majority = nums[0];
    let vote = 0;
    for (let i = 0; i < nums.length; i++) {
    if (vote == 0) {
        vote++;
    majority = nums[i];
    } else if (majority == nums[i]) {
    vote++;
     } else {
    vote--;
    }
  }
  return majority;

*/

//current max counter = 2
//key counter = 2;
//current counter = 1;

//current max counter = 2
//current max el = 3

//key counter = 2;
//if element at current index == key counter, current counter++
//current counter = 4;
//if current counter > length/2, return the key counter

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));


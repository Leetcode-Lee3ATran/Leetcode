/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. 
If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

EX 1: 
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

EX2: 
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

*/

var search = function (nums, target): number {
  //declare middle index variable
  let midIndex = 0;

  // helper function {
  // if array only has one element left and it is not target, set midIndex to -1 and return
  // declare variable mid, initialize to middle of array
  // if element at mid is equal to target then add mid to midIndex, return mid
  // else if target < element at mid
  // recursively invoke helper with lower half of array
  // else
  // add mid to midIndex and recursively invoke helper with upper half of array
  //}
  const help = (arr: Array<Number>): number | void => {
    if (arr.length === 1 && arr[0] !== target) {
        midIndex = -1; 
        return;
    };
    let mid = Math.floor(arr.length / 2);
    if (arr[mid] === target) {
        midIndex+= mid;
        return mid;
    }
    else if (target < arr[mid]) return help(arr.slice(0, mid));
    else {
      midIndex+= mid;
      return help(arr.slice(mid, arr.length));
    }
  };

  //invoke helper
  help(nums);
  //return middle index variable
  return midIndex;
};

console.log(search([-1,0,3,5,9,12], 9))
// console.log(search([-1,0,3,5,9,12], 2))

// [-1,0,3,5,9,12], target = 9 (index = 4)
// middle index: 3
// [9,12], target = 9
// middle index: 1
// [9], target = 9
// middle index: 0

// [-1,0,3,5,9,12], target = 0 (index = 1)
// middle index: 3
// [-1,0,3], target = 0
// middle index: 1


/*
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = Math.round((end - start) / 2) + start;
        if (nums[mid] === target) return mid;
        else if (target < nums[mid]) end = mid - 1;
        else start = mid + 1;
    }
    return -1;
};
*/
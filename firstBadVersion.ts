/*

https://leetcode.com/problems/first-bad-version/

You are a product manager and currently leading a team to develop a new product. 
Unfortunately, the latest version of your product fails the quality check. 
Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. 
You should minimize the number of calls to the API.

EX1:
Input: n = 5
(bad = 4)
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.

EX2:
Input: n = 1, bad = 1
Output: 1

*/
const array = [false, false, false, true, true];
//const array = [true, true]
const isBadVersion = (num) => array[num - 1];

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    // create 2 pointers, left and right
    let left = 1;
    let right = n;
    
    // while left is less than right 
    while (left < right) {
      //let mid = left + Math.floor((right - left) / 2);
      let middle = Math.floor((left + right) / 2);
      // check if isBadVersion at the middle of n is true or false
      // if returns true check version before, recursively call on lower half
      if (isBadVersion(middle) === true) {
        right = middle;
      }
      // if returns false, recursively call on upper half
      else {
        left = middle + 1;
      }
    }
    // return right pointer
    return right;
  };
};

let test = solution(isBadVersion);
console.log(test(5));

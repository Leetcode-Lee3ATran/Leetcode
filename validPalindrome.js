/*
https://leetcode.com/problems/valid-palindrome/

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.
Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

EX1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

EX2: 
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

EX3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

*/

var isPalindrome = function(s) {
  // remove special characters, make string lowercase
  // base case: if string length is less than or equal to 1, return true
  // recursive case: if the first and last characters are equal, recursively call isPalindrome slicing off first and last char
  // return false
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//   if (s.length <= 1) return true;
//   if (s[0] === s[s.length - 1]) return isPalindrome(s.slice(1, -1));
//   return false;
  return s === s.split("").reverse().join("");
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
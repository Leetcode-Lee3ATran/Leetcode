/*

https://leetcode.com/problems/longest-palindrome/

Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

EX1:
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

EX2:
Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.

*/


function longestPalindrome(s: string): number {
  //initialize cache to empty
  const cache: Record<string, number> = {};
  let result: number = 0;
  //add characters one by one
  //{a:1,b:1}
  //result = 6
  for (let i = 0; i < s.length; i++) {
    if (!cache[s[i]]) cache[s[i]] = 1;
    else if (cache[s[i]] === 1) {
      delete cache[s[i]];
      result += 2;
    }
  }
  if (Object.keys(cache).length) result++;
  return result;
}

console.log(longestPalindrome("abccccdd"));
console.log(longestPalindrome("a"));
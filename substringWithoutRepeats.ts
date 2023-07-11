/*

https://leetcode.com/problems/longest-substring-without-repeating-characters/

Given a string s, find the length of the longest substring without repeating characters.

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

function lengthOfLongestSubstring(s: string): number {
  //declare a variable result and set it equal to 0
  let result = 0;
  //declare a set
  const set = new Set();
  //declare two pointers, initialize to 0
  let left = 0;
  let right = 0;
  while (right < s.length) {
    //  if s[right] does not exist in set, put it into set, increase right
    if (!set.has(s[right])) {
      set.add(s[right]);
      right++;
      //update result for max
      result = Math.max(result, set.size);
      }
    // if s[right] does exist in set, delete s[left] from set, increase left
    else {
      set.delete(s[left]);
      left++;
    }
  }
  return result;
}

console.log(lengthOfLongestSubstring('hi'));
console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));

/*

a b c a b c b b
    l     r           
 set.delete(string[i])           

result = math.max(result, set.size)
set={
    c
    a
    b
}

while (set.has(b)) iterate over set until you delete b 

set.delete(s[pointer1])
add b 


word = cb
index = 1
b
*/

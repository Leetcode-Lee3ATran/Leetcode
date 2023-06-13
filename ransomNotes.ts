/*

https://leetcode.com/problems/ransom-note/

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

EX1: 
Input: ransomNote = "a", magazine = "b"
Output: false

EX2: 
Input: ransomNote = "aa", magazine = "ab"
Output: false

EX3:
Input: ransomNote = "aa", magazine = "aab"
Output: true

*/

function canConstruct(ransomNote: string, magazine: string): boolean {
  //cache
  let cache = {};
  //iterate through magazine, if letter exists in cache, increment value by one
  for (let i = 0; i < magazine.length; i++) {
    // cache[magazine[i]] = (cache[magazine[i]] || 0) + 1

    if (cache[magazine[i]]) cache[magazine[i]]++;
    // otherwise store letter in cache
    else {
      cache[magazine[i]] = 1;
    }
  }
  for (let i = 0; i < ransomNote.length; i++) {
    //iterate through letters of ransomNote -- decrementing from cache
    //once count for letter hits 0, delete from cache
    if (cache[ransomNote[i]]) cache[ransomNote[i]]--;
    // if (cache[ransomNote[i]] === 0) delete cache[ransomNote[i]];
    //if letter doesn't exist - return false
    else {return false}
  }
  //return true
  return true;
}

console.log(canConstruct('a', 'b'));
console.log(canConstruct('aa', 'ab'));
console.log(canConstruct('aa', 'aab'));
console.log(canConstruct('potato', 'potatoes'));
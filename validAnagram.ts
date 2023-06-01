/*
https://leetcode.com/problems/valid-anagram/

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

EX1:
Input: s = "anagram", t = "nagaram"
Output: true

EX2:
Input: s = "rat", t = "car"
Output: false

*/

var isAnagram = function(s:string, t:string):boolean {
    // if string lengths are not equal return false
    if (s.length!== t.length) return false;
    return s.split('').sort().join('') === t.split('').sort().join('');
}

/*
var isAnagram = function(s, t) {
    if (s.length !== t.length){
        return false;
    }

    // create a new array, fill it with all 0s
    // represents each letter in alphabet
    const freq = new Array(26).fill(0);

    // iterate through s
    for (let i = 0; i < s.length; i++) {
        // get index of letter (97 is unicode value for 'a')
        const charCodeS = s.charCodeAt(i) - 97;
        const charCodeT = t.charCodeAt(i) - 97;

        // increment freq at current letter for s
        freq[charCodeS]++;
        // decrement freq at current letter for t
        freq[charCodeT]--;
    }

    // if array is back to all 0s again, return true
    return freq.every((value) => value === 0);

}
*/

console.log(isAnagram("anagram", "nagaram")) 
console.log(isAnagram("rat", "car"))
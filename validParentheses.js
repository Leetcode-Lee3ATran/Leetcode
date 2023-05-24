/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Ex 1: 
input: s = "()"
output: true

Ex 2: 
input: s = "()[]{}"
output: true

Ex 3: 
input: s = "(]"
output: false
*/

var isValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    } else if (
      (stack[stack.length - 1] === '(' && s[i] === ')') ||
      (stack[stack.length - 1] === '[' && s[i] === ']') ||
      (stack[stack.length - 1] === '{' && s[i] === '}')
    ) {
      stack.pop();
    } else {
      return false;
    }
  }
  if (!stack.length) return true;
  return false;
};

console.log(isValid('(])'));
console.log(isValid('()[]{}'));
console.log(isValid(']'));

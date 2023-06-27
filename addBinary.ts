/*

https://leetcode.com/problems/add-binary/

Given two binary strings a and b, return their sum as a binary string.

EX1: 
Input: a = "11", b = "1"
Output: "100"

EX2:
Input: a = "1010", b = "1011"
Output: "10101"
 _ _ 1 0 0

 1 0 1 0 1
 

 __1
 1011 0001
 
 a = 1101, b = 1
 
a = 11 b = 11 
sum = ???
*/

function addBinary(a: string, b: string): string {
  let carry = false;
  let sum = '';
  // add 0's in front of shorter string
  if (a.length > b.length) b = b.padStart(a.length, '0');
  else a = a.padStart(b.length, '0');
  // for loop adding each digit one by one
  for (let i = a.length - 1; i >= 0; i--) {
    // declare a variable to keep track of digit sum
    let digitSum: number;
    // add one to digitSum if carry is needed
    if (carry) {
      digitSum = Number(a[i]) + Number(b[i]) + 1;
    } else {
      digitSum = Number(a[i]) + Number(b[i]);
    }
    // based on digitSum, add binary numbers accordingly
    if (digitSum == 0) {
      carry = false;
      sum = '0' + sum;
    }
    if (digitSum == 1) {
      carry = false;
      sum = '1' + sum;
    }
    if (digitSum == 2) {
      carry = true;
      sum = '0' + sum;
    }
    if (digitSum == 3) {
      carry = true;
      sum = '1' + sum;
    }
  }
  // if carry is still positive at the end, add 1 to the front
  if (carry) sum = '1' + sum;
  // return sum
  return sum;
}

let a = '11';
let b = '11';
console.log(addBinary(a, b));

console.log(BigInt('0b'+ '101')) //5n
console.log(BigInt('0b' + '11')) //3n
console.log((BigInt('0b'+ '101') + BigInt('0b' + '11')).toString(2)) //1000(binary in string form)
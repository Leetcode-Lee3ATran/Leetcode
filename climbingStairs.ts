/*

https://leetcode.com/problems/climbing-stairs/

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

EX1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

EX2: 
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

*/

function climbStairs(n: number): number {
  // dynamic programming approach (https://www.youtube.com/watch?v=Y0lT9Fck7qI)
  // one = how many steps it takes to get to n from n
  // two = how many steps it takes to get to n from n - 1
  let one = 1;
  let two = 1;
  // you only have to iterate n - 1 times 
  for (let i = 0; i < n - 1; i++) {
    // store value of one first
    let temp = one;
    // then set one to adding itself and the previous number
    one = one + two;
    // set two to original value of one to 'move pointer'
    two = temp;
  }
  // one will be the final calculated value so just return it
  return one;
}

console.log(climbStairs(4)); //(n-3)
console.log(climbStairs(5)); //(n-2)
console.log(climbStairs(6)); //climbStairs(n-1)
console.log(climbStairs(7)); //climbstiars(n-1) + climbStairs(n-2)
// console.log(climbStairs(36));

//climbStairs(n) = climbStairs(n-1) + climbStairs(n-2)
//climbStairs(n) = (climbStairs(n-2) + climbStairs(n-3)) + climbStairs(n-2)

/*

function climbStairs(n: number): number {
    if (n <= 3) return n
    return 2 * climbStairs(n - 2) + climbStairs(n - 3)
    return n <= 3 
        ? n 
        : 2 * climbStairs(n - 2) + climbStairs(n - 3);
}

*/

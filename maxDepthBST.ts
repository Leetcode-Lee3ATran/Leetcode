/*
https://leetcode.com/problems/maximum-depth-of-binary-tree/

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

EX1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

EX2:
Input: root = [1,null,2]
Output: 2

*/

function maxDepth(root: TreeNode | null): number {
  // recursive function
  // base case: if root is null, return 0 (for counting nodes)
  if (!root) return 0;
  // recursive case:
  // declare variable left, recursively call maxDepth on root.left
  // decalre variable right, recursively call maxDepth on root.right
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  // return max of left and right + 1
  return Math.max(left, right) + 1;
}

/*
checkBalancedBinaryTree

Given a binary tree, check if it is balanced (ie the heights of the two subtrees of any node never differ by more than one. 

https://leetcode.com/problems/balanced-binary-tree/

*/

// input: binary tree
// output: boolean

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const isBalanced = function(root) {
    // if the root is null, return true
    if (!root) return true;

    // helper function to get height of subtrees
    const height = (root) => {
      // if the root is null, return 0
      // recursively call height on left
      // recursively call height on right
      // return max of left and right + 1
      if (!root) return 0;
      const left = height(root.left); 
      const right = height(root.right); 
      return Math.max(left, right) + 1;
    }

    // get the height of the left side and then the height of the right side
    // if the difference of left and right is greater than 1, return false
    // otherwise return true
      const leftHeight = height(root.left);
      console.log(leftHeight)
      const rightHeight = height(root.right);
      console.log(rightHeight)
      if (Math.abs(leftHeight - rightHeight) > 1) return false;
      if (!isBalanced(root.left) || !isBalanced(root.right)) return false;
      return true;
};

const BST = new TreeNode(1);
const left = new TreeNode(2);
const right = new TreeNode(2);
const leftLeft = new TreeNode(3);
const rightRight = new TreeNode(3);
const leftLeftLeft = new TreeNode(4)
const rightRightRight = new TreeNode(4)
BST.left = left;
BST.right = right;
BST.left.left = leftLeft;
BST.right.right = rightRight;
BST.left.left.left = leftLeftLeft;
BST.right.right.right = rightRightRight;

console.log(isBalanced(BST));



/* 
        5
      /  \ 
     3    8 
   /
  2
 /
1

    1
     \ 
      2
       \ 
        3


         1
      /    \
     2      2
   /  \    /  \
  3    n  n    3
 / \         /   \
4   n       n     4

*/
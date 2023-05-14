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
    const rightHeight = height(root.right);
    if (Math.abs(leftHeight - rightHeight) > 1) return false;
    return true;
};

const BST = new TreeNode(1);
const left = new TreeNode(2);
const right = new TreeNode(2);
const leftLeft = new TreeNode(3);
const leftRight = new TreeNode(3);
const leftLeftLeft = new TreeNode(4)
const leftLeftRight = new TreeNode(4)
BST.left = left;
BST.right = right;
BST.left.left = leftLeft;
BST.left.right = leftRight;
BST.left.left.left = leftLeftLeft;
BST.left.left.right = leftLeftRight;

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

      5
    /  \
   3    8
 /  \  /  \
2    nn    11
            \
             13
*/
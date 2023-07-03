/*

https://leetcode.com/problems/diameter-of-binary-tree/

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

EX1: 
Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

                      10
                 4          15
            1        5
       -1                6
   -2                         7     
                                  8

EX2: 
Input: root = [1,2]
Output: 1

*/

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
function diameterOfBinaryTree(root: TreeNode | null): number {
  //find the height of the left
  //find the height of the right
  //add them up 
  //perform steps 1-3 for every node, finding the diameter for each node 
  //return the largest diameter
  let diameter = -Infinity;

  const height = (root): number => {
    if (!root) return 0;
    const left = height(root.left);
    const right = height(root.right);
    console.log(left, right)
    diameter = Math.max(diameter, (left + right));
    return Math.max(left, right) + 1;
  };

  height(root);
  console.log(height(root));
  return diameter;
}
/*
            
        (2)1(1)
    (1)2(0)   3(0)
  (0)4(0) null 
  null

*/

const BST = new TreeNode(1);
const leftNode = new TreeNode(2);
const rightNode = new TreeNode(3);
const leftleftNode = new TreeNode(4);
const leftrightNode = new TreeNode(5);
BST.left = leftNode;
BST.right = rightNode;
BST.left.left = leftleftNode;
BST.left.right = leftrightNode;
console.log(diameterOfBinaryTree(BST));

//   while (root && root.left) {
//     diameter = Math.max(diameter, height(root));
//     root = root.left;
//   }
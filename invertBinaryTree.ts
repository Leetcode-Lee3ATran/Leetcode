/*

Given the root of a binary tree, invert the tree, and return its root.

Example:
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Ex 2:
Input: root = [2,1,3]
Output: [2,3,1]

Ex 3:
Input: root = []
Output: []

*/

interface TreeNode {
  val: number;
  left: TreeNode;
  right: TreeNode;
}

// function TreeNode(val:number, left?:TreeNode, right?:TreeNode):void {
//     this.val = (val===undefined ? 0 : val);
//     this.left = (left===undefined ? null : left);
//     this.right = (right===undefined ? null : right);
// }

const invertTree = function (root:TreeNode):TreeNode | null {
  // if root is null, return null
  if (!root) return null;
  //swap
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  //recursive call
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

const BST1 = new TreeNode(4); 
BST1.right = new TreeNode(7);
BST1.left = new TreeNode(2);
BST1.left.left = new TreeNode(1);
BST1.left.right = new TreeNode(3);
BST1.right.left = new TreeNode(6);
BST1.right.right = new TreeNode(9);

console.log(invertTree(BST1)); //expect [4,7,2,9,6,3,1]
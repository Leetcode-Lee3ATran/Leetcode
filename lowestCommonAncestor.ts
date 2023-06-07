/*
https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: 
“The lowest common ancestor is defined between two nodes p and q as the lowest node in T 
that has both p and q as descendants (where we allow a node to be a descendant of itself).”

EX1: 
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.
[6,2]
[6,8]
6 = LCA
traverse til you find 6

[[6,2,8,0,4,7,9,null,null,3,5], [2,8,0,4,7,9,null,null,3,5]]
[[6,2,8,0,4,7,9,null,null,3,5], [8,0,4,7,9,null,null,3,5]]
[{root:6, left: 2.....}]

EX2: 
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

EX3: 
Input: root = [2,1], p = 2, q = 1
Output: 2

 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
*/

interface TreeNode {
    val: number;
    left: TreeNode;
    right: TreeNode;
  }

function TreeNode(val:number, left?:TreeNode, right?:TreeNode):void {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  // if root is equal to p or q then return root
  if (!root || !p || !q) return null;
  // if (root === p || root === q) return root;
  let originalRoot = root; 
  // let originaloriginalRoot = root
  // const pArr: Array<number> = [root.val];
  // const qArr: Array<number> = [root.val];
  // while (originalRoot.val !== p.val) {
  //   // pArr.push(p);
  //   console.log(originalRoot.val)
  //   if (p.val < originalRoot.val) {
  //     pArr.push(originalRoot.left.val);
  //     originalRoot = originalRoot.left;
  //   }
  //   if (p.val > root.val) {
  //     pArr.push(root.right.val);
  //     originalRoot = originalRoot.right;
  //   }
  // }
  // while (originaloriginalRoot.val !== q.val) {
  //   console.log(originaloriginalRoot.val)
  //   if (q.val < originaloriginalRoot.val) {
  //     qArr.push(originaloriginalRoot.left.val);
  //     originaloriginalRoot = originaloriginalRoot.left;
  //   }
  //   if (q.val > originaloriginalRoot.val) {
  //     qArr.push(originaloriginalRoot.right.val);
  //     originaloriginalRoot = originaloriginalRoot.right;
  //   }
  // }
  // console.log(pArr)
  // console.log(qArr)
  // let result: number | null | TreeNode = null;
  // for (let i = Math.min(pArr.length, qArr.length) - 1; i >= 0; i--) {
  //   if (pArr[i] === qArr[i]) {
  //     result = pArr[i];
  //     break;
  //   }
  // }
  // console.log(result)

  // //traverse
  // if (!result) return null;
  // while (root.val !== null) {
  //   if (result === root.val) {
  //     return root;
  //   } else if (result < root.val) {
  //     root = root.left;
  //   } else {
  //     root = root.right;
  //   }
  // }

  // // create 2 empty arrays one for p, one for q
  // // binary search for p keeping track of nodes to get there, adding each node to p array
  // //binary search for q, keep track of nodes to get there, adding each node to q array
  // //compare arrays starting from array.length of shorter array until you find a common element
  // //return common node
  // return null;

  while (root !== null) {
    if (p.val < originalRoot.val && q.val < originalRoot.val) originalRoot = originalRoot.left;
    else if (p.val > originalRoot.val && q.val > originalRoot.val) originalRoot = originalRoot.right;
    else return originalRoot;
  }
  return null;
}

const BST = new TreeNode(6); 
BST.left = new TreeNode(2);
BST.right = new TreeNode(8);
BST.left.left = new TreeNode(0);
BST.left.right = new TreeNode(4);
BST.right.left = new TreeNode(7);
BST.right.right = new TreeNode(9);

const p = new TreeNode(2);
const q = new TreeNode(4);

console.log(lowestCommonAncestor(BST, p, q));

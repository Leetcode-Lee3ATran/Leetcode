/* 
https://leetcode.com/problems/merge-two-sorted-lists/

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Ex1)
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Ex2)
Input: list1 = [], list2 = []
Output: []

Ex3)
Input: list1 = [], list2 = [0]
Output: [0]


 Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 * 
*/

var mergeTwoLists = function (list1, list2) {
  // declare variable result, initialize to new ListNode
  let result = new ListNode(null, null);
  // declare pointer variable current, initialize to result
  let current = result;
  // if list1 is null, return list2
  if (list1.val === null) return list2;
  // if list2 is null, return list1
  if (list2.val === null) return list1;

  //while (list1 exists and list2 exists)
  while (list1 && list2) {
    //if list1 > list2
    if (list1.val > list2.val) {
      current.next = list2;
      list2 = list2.next;
    }
    //if list 2 >= list1
    else {
      current.next = list1;
      list1 = list1.next;
    }
    current = current.next;
  }

  //concat list1 or list2 (whichever is not empty)
  current.next = list1 || list2;

  //in the end return result
  return result.next;
};

// 1 -> 2 -> 3 -> null
// 5 -> 6 -> 7
// { val: 1, next: { val: 2 next: { val: 3 { next: null }}}
// { val: null, next: null}
// null
//let test = new Node(null);
// console.log(test)
// const tester = () => {
//   if (test === null) {
//     return true;
//   }
//   else return false;
// }
// console.log(tester())

// function Node(val) {
//     this.val = val;
//     this.next = null;
//   }

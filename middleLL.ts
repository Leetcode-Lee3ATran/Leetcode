/*

https://leetcode.com/problems/middle-of-the-linked-list/

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

EX1: 
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

EX2: 
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

*/

// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  //two pointers (slow and fast)
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  //while both pointers are not null, slow = slow.next, fast = fast.next.next
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  //return slow;
  return slow;
}

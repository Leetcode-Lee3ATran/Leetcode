/*

https://leetcode.com/problems/linked-list-cycle/

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

EX1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

EX2: 
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

EX3:
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.

*/
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  //if no head return false
  if (!head) return false;
  // // declare const cache, initialize to empty set
  // const cache: Set<number> = new Set();
  // declare pointer variable, initialize to head
  let pointer: ListNode | null = head;
  // iterate through linked list
  // if node is in cache, return true
  // otherwise put into cache
  while (head && pointer && pointer.next) {
    head = head.next;
    pointer = pointer.next.next;
    if (head === pointer) return true;
  }
  return false;
}
//      p    h   
// 1 -> 2 -> 3
//      ^
/*

Given the head of a singly linked list, reverse the list, and return the reversed list.

EX1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

EX2:
Input: head = [1,2]
Output: [2,1]

EX3:
Input: head = []
Output: []

*/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
    // if head is null, return null
    if (!head) return null;
    let prev:ListNode | null = null;
    // let current = head;
    while (head) {
        let temp = head.next; 
        head.next = prev; 
        prev = head;
        head = temp; 
    }
    return prev; 
}


/*

 if(head === null) return null;
  let temp = new Node();
  let previous = new Node();
  while (head) {
    temp = head.next;
    head.next = previous;
    previous = head;
    head = temp;
  }
  return previous;
  
  */
/*
Implement a first in first out (FIFO) queue using only two stacks. 
The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.

Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. 
You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

*/

interface MyQueue {
  stack1: Array<number | undefined>;
  stack2: Array<number | undefined>;
}

class MyQueue {
  constructor() {
    // TWO STACKS ASSIGNED TO EMPTY ARRS
    this.stack1 = [];
    this.stack2 = [];
  }

  push(x: number): void {
    //push the value into stack1
    this.stack1.push(x);
  }

pop(): number | null | undefined {
     // if both stacks are empty, return null
     if (!this.stack1.length && !this.stack2.length) return null;
     // if stack2 is empty
     if (!this.stack2.length) {
      //pop the values from stack1
      //push the same value to stack2
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
     }
    //pop the last inputted value from stack 2
    return this.stack2.pop();
    
  }

  peek(): number | undefined | null {
    // if both stacks are empty, return null
    if (this.stack1.length === 0 && this.stack2.length === 0) return null;
    // if stack2 is not empty return the last element of stack2
    if (this.stack2.length) return this.stack2[this.stack2.length -1];
    // return first element of stack1
    else return this.stack1[0];
  }

  empty(): boolean {
    // if both stacks are empty return true
    if (!this.stack1.length && !this.stack2.length) return true;
    // return false
    return false;
  }
}

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/
const myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
console.log(myQueue);
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
console.log(myQueue);
myQueue.peek(); // return 1
console.log(myQueue.peek());
myQueue.pop(); // return 1, queue is [2]
console.log(myQueue);
myQueue.empty(); // return false
console.log(myQueue);
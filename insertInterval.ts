/*

https://leetcode.com/problems/insert-interval/

You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi]
 represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. 
 You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals 
still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

EX1:
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]   
Output: [[1,5],[6,9]]

EX2:
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

*/

function insert(intervals: number[][], newInterval: number[]): number[][] {
  // if intervals is empty, just return new array with newInterval
  if (!intervals.length) return [newInterval];
  // if first num of newInterval is greater than second num of last interval, just push newInterval to end
  if (newInterval[0] > intervals[intervals.length - 1][1]) intervals.push(newInterval);
  else {
    // iterate through intervals
    for (let i = 0; i < intervals.length; i++) {
      // if first num of newInterval is less than first num of first interval, unshift to front of intervals
      if (newInterval[0] < intervals[0][0]) intervals.unshift(newInterval);
      // if second num of current interval is greater than or equal to first num of newInterval OR 
      // if second num of newInterval is less than first num of next interval
      // ex. [3, 5] and [1, 2] vs. [6, 6] and [12, 15]
      if (intervals[i][1] >= newInterval[0] || newInterval[1] < intervals[i + 1][0]) {
        // splice at next index
        intervals.splice(i + 1, 0, newInterval);
        // merge intervals and remove unneeded intervals (y)
        while (intervals[i + 1] && intervals[i][1] >= intervals[i + 1][0]) {
          intervals[i][0] = Math.min(intervals[i][0], intervals[i + 1][0]);
          intervals[i][1] = Math.max(intervals[i][1], intervals[i + 1][1]);
          intervals.splice(i + 1, 1);
        }
        break;
      }
    }
  }
  return intervals;
}

// console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]))
// console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [17,20]))
// console.log(insert([[1,3],[6,9]], [2,5]))
// console.log(insert([], [5,7]))
// console.log(insert([[1,5]], [6,8]))
// console.log(insert([[3,5]], [1,2]))
// console.log(insert([[1,5]], [0,3]))
// console.log(insert([[0,5], [9,12]], [7,16]))
// console.log(insert([[3,5], [12,15]], [6,6]))

/*
i = 2; 
intervals[i][0] = 6
newInterval[0] = 4

[[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]

intervals[i - 1][1] = 5
intervals[i][0] = 4

[1,2],[3,5],[4,8],[6,7],[8,10],[12,16]

intervals[i - 1][1] = 8
intervals[i][0] = 6

[1,2],[3,8],[6,7],[8,10],[12,16]

intervals[i - 1][1] = 8
intervals[i][0] = 8

[1,2],[3,8],[8,10],[12,16]

intervals[i - 1][1] = 10
intervals[i][0] = 12

[1,2],[3,10],[12,16]


const stack = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    stack.push(intervals[i]);
    if (intervals[i][0] <= intervals[i - 1][1]) {
        intervals[i - 1][1] = intervals[i][1];
        stack.pop();
    }
  }
  return stack;
*/

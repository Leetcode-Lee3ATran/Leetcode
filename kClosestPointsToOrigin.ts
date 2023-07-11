/*

https://leetcode.com/problems/k-closest-points-to-origin/

Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, 
return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

EX1:
Input: points = [[1,3],[-2,2]], k = 1
Output: [[-2,2]]

EX2:
Input: points = [[3,3],[5,-1],[-2,4]], k = 2
Output: [[3,3],[-2,4]]
*/

function kClosest(points: number[][], k: number): number[][] {
  // declare a cache, initialize to empty object
  let cache: { distance?: number[] } = {};
  // helper function to calculate distance
  const distance = (x: number, y: number): number => {
    return Math.sqrt(x ** 2 + y ** 2);
  };
  // iterate through points, calculate distance for each point, add index: distance to cache
  for (let i = 0; i < points.length; i++) {
    cache[i] = distance(points[i][0], points[i][1]);
  };
  // sort Object.entries of cache
  const result = Object.entries(cache).sort((a, b) => Number(a[1]) - Number(b[1]));
  // declare a results array
  let results: number[][] = [];
  // push points from first k elements into results
  for (let i = 0; i < k; i++) {
    results.push(points[result[i][0]]);
  }
  return results;
}

// O(n) + O(nlog(n)) + O(k)

// console.log(kClosest([[1,3],[-2,2]], 1));
// console.log(kClosest([[3,3],[5,-1],[-2,4]], 2))
// console.log(kClosest([[0, 1],[1, 0],[4, 2],], 2));
// console.log(kClosest([[2,2],[2,2],[3,3],[2,-2],[1,1]], 4));

/*
)': rip

index: distance

// declare a cache, initialize to empty object
  let cache: { distance?: number[] } = {};
  // helper function to calculate distance
  const distance = (x: number, y: number): number => {
    return Math.sqrt(x ** 2 + y ** 2);
  };
  // iterate through points, calculate distance for each point, add point: distance to cache
  points.forEach((el) => {
    cache[JSON.stringify(el)] = distance(el[0], el[1]);
  });
  // sort Object.entries of cache
  const result = Object.entries(cache).sort((a, b) => Number(a[1]) - Number(b[1]));
  // declare a results array
  let results: number[][] = [];
  // push points from first k elements into results
  for (let i = 0; i < k; i++) {
    results.push(JSON.parse(result[i][0]));
  }
  return results;
*/
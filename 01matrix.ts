/*

https://leetcode.com/problems/01-matrix/

Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1

EX1:
Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
Output: [[0,0,0],[0,1,0],[0,0,0]]

EX2:
Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
Output: [[0,0,0],[0,1,0],[1,2,1]]


*/

function updateMatrix(mat: number[][]): number[][] {
  //declare output initialized to size of mat
  let output: number[][] = [];
  // iterate through matrix
  for (let i = 0; i < mat.length; i++) {
    output[i] = [];
    for (let j = 0; j < mat[0].length; j++) {
      // invoke helper function that does the following:
      let newMatrix = JSON.parse(JSON.stringify(mat));
      // output[i][j] = traverse(i, j, newMatrix);
      //   console.log(i,j,output[i][j])
    }
  }
  //base case: if 0, return counter
  //if left exists, check left, increment counter
  //if right exists, check right, increment counter
  //if up exists, check up, increment counter
  //if down exists, check down, increment counter

  function traverse(
    row,
    column,
    matrix,
    left = Infinity,
    right = Infinity,
    up = Infinity,
    down = Infinity
  ): number {
    // console.log(row, column)
    // let left, right, up, down;
    console.log(left, row, column);
    if (matrix[row][column] === 0) return 0;
    else {
      matrix[row][column] = -1;
      if (column - 1 >= 0 && matrix[row][column - 1] !== -1)
        left = traverse(row, column - 1, matrix) + 1;
      if (row - 1 >= 0 && matrix[row - 1][column] !== -1)
        up = traverse(row - 1, column, matrix) + 1;
      if (column + 1 < matrix[0].length && matrix[row][column + 1] !== -1)
        right = traverse(row, column + 1, matrix) + 1;
      if (row + 1 < matrix.length && matrix[row + 1][column] !== -1)
        down = traverse(row + 1, column, matrix) + 1;
    }
    return Math.min(left, right, up, down);
  }
  console.log(traverse(9, 2, mat));
  return output;
}
let mate = [
  [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
  [0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
  [0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
  [0, 1, 0, 1, 1, 0, 0, 0, 0, 1],
  [0, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
  [1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
  [1, 1, 1, 1, 0, 1, 0, 0, 1, 1],
];
console.log(updateMatrix(mate));
/*
 OUR OUTPUT:
[ [ 1, 0, 1, 1, 0, 0, 1, 0, 0, 1 ],
  [ 0, 1, 1, 0, 1, 0, 1, 0, 1, 1 ],
  [ 0, 0, 1, 0, 1, 0, 0, 1, 0, 0 ],
  [ 1, 0, 1, 0, 1, 1, 1, 1, 1, 1 ],
  [ 0, 1, 0, 1, 1, 0, 0, 0, 0, 1 ],
  [ 0, 0, 1, 0, 1, 1, 1, 0, 1, 0 ],
  [ 0, 1, 0, 1, 0, 1, 0, 0, 1, 1 ],
  [ 1, 0, 0, 0, 1, 2, 1, 1, 0, 1 ],
  [ 2, 1, 1, 1, 1, 2, 1, 0, 1, 0 ],
  [ 4, 4, 5, 1, 0, 1, 0, 0, 1, 1 ] ]


  EXPECTED OUTPUT:
  [[1,0,1,1,0,0,1,0,0,1],
  [0,1,1,0,1,0,1,0,1,1],
  [0,0,1,0,1,0,0,1,0,0],
  [1,0,1,0,1,1,1,1,1,1],
  [0,1,0,1,1,0,0,0,0,1],
  [0,0,1,0,1,1,1,0,1,0],
  [0,1,0,1,0,1,0,0,1,1],
  [1,0,0,0,1,2,1,1,0,1],
  [2,1,1,1,1,2,1,0,1,0],
  [3,2,2,1,0,1,0,0,1,1]]
*/

/*
[ 
    [0,0,0],
    [0,1,0],
    [1,1,1]
]


[
  [ 0  1  1  0  0 ]
  [ 0  1  1  0  0 ]
  [ 1  1  1  1  0 ]
  [ 1  1  1  1  0 ]
]

*/

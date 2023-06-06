/*

https://leetcode.com/problems/flood-fill/

An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel 
of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on.
Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.


EX1: 
Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

EX2:
Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
Output: [[0,0,0],[0,0,0]]
Explanation: The starting pixel is already colored 0, so no changes are made to the image.

*/

function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {

  let startingValue = image[sr][sc];

  // helper function
  const traverse = (
    image: number[][],
    sr: number,
    sc: number,
  ): void => {
    // if the value at sr, sc is equal to startingValue
    if (image[sr][sc] === startingValue) {
      // change color of current spot to new color
      image[sr][sc] = color;
      // check for bounds, then recursively call traverse with new coordinates
      if (sr > 0) traverse(image, sr - 1, sc);
      if (sr < image.length-1) traverse(image, sr + 1, sc);
      if (sc < image[0].length-1) traverse(image, sr, sc + 1);
      if (sc > 0) traverse(image, sr, sc - 1);
    }
  };

  // if starting spot is not equal to color, invoke helper to check each direction and return image
  if (startingValue !== color) {
    traverse(image, sr, sc);
    return image;
  }
  // otherwise just return image
  return image;
}

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);

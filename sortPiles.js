/*

Given many piles of products, follow the rules given below to stack the products in an orderly manner.
There are a total of n piles of products.

The number of products in each pile is represented by the array numProducts

Select any subarray from the array numProducts and pick up products from that subarray such that the number of products you pick from the i'th pile 
is strictly less than the number of products you pick from the (i+1)'th pile for all indices i of the subarray.

Find the maximum number of products that can be picked.

For example, the number of products in each pile are numProducts=[7,4,5,2,6,5].
Using a 1-based index we can use the subarray from indices (1, 3) and pick products [3, 4, 5] respectively from each index, which amounts to 12 products.
We can also choose subarray from indices (3, 6) and pick products [1,2,4,5] respectively from each index, which is also 12 products.

So in this case passing in [7,4,5,2,6,5] should return 12, [2,9,4,7,2] should return 16, and [2,5,6,7] should return 20.

*/

// input: numProducts: array
// output: number (max products that can be picked)
const sortPiles = (numProducts) => {
    //max value:
    //helper function
        //for loop to iterate through the numProducts
            //while loop with second pointer to iterate through numProducts as long as pointer+1 is less 
        // checks if this subarray is greater than max
            //replace max if true
    //Kadane's algorithm
}

//console.log(sortPiles([7,4,5,2,6,5])) -> 12
//console.log(sortPiles([2,9,4,7,2])) -> 16
//console.log(sortPiles([2,5,6,7])) -> 20

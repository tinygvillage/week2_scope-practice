/***********************************************************************
Write a function named `arrowRestSum` that accepts all incoming parameters
and sums them. Assign the below function to a variable using the const keyword.

**Hint**: Use rest parameter syntax!

Examples:
arrowRestSum(3,5,6); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 45
arrowRestSum(0); // => 0
***********************************************************************/
// const arrowRestSum = (num1, ...otherNums) => {
//   let sum = num1 // = 3
//   console.log(num1)
//   for (let i = 0; i < otherNums.length; i++) {
//     // console.log(otherNums) // othernums = [5,6]
//     sum += otherNums[i] //   3 + index 0  of othernums = 5 = 8  which is the first iteration
//     //sum = 8 + index 1  of othernums = 6 = 14
//   }
//   return sum;
// }


const arrowRestSum = (...otherNums) => {       // rest method makes param an array, which is why we can loop it
  let sum = 0
  // console.log(num)
  for (let i = 0; i < otherNums.length; i++) {
    // console.log(otherNums) // othernums = [5,6]
    sum += otherNums[i] //   3 + index 0  of othernums = 5 = 8  which is the first iteration
    //sum = 8 + index 1  of othernums = 6 = 14
  }
  return sum;
}


console.log(arrowRestSum(3, 5, 6)); // => 14
console.log(arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // => 45
console.log(arrowRestSum(0)); // => 0

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowRestSum;
} catch (e) {
  module.exports = null;
}

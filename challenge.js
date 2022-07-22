function leftmostNodesSum(array) {
  // your code here
  let sum = 0;
  let currentNode = 0;
  for (let i =0; i < array.length; i++) {
    if (i === currentNode) {
      sum += array[i];
      currentNode = 2 * i + 1;
    }
  }
  return sum;
}

console.log(leftmostNodesSum([2, 7, 5, 2, 6, 0, 9]))
// => 11

module.exports = leftmostNodesSum

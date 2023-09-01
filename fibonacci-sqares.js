// If n = 2 then the number of squares is 2^2 + 1  = 4  + 1  = 5
// If n = 3 then the number of squares is 3^2 + 5  = 9  + 5  = 14
// If n = 4 then the number of squares is 4^2 + 14 = 16 + 14 = 30
// If n = 5 then the number of squares is 5^2 + 30 = 25 + 30 = 55

function calculateSquares(n) {
  if (n === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = n; i >= n; i--) {
    sum += Math.pow(i, 2);
  }

  return sum + calculateSquares(n - 1);
}

console.log(calculateSquares(0)); // Output: 0
console.log(calculateSquares(1)); // Output: 1
console.log(calculateSquares(2)); // Output: 5
console.log(calculateSquares(3)); // Output: 14
console.log(calculateSquares(4)); // Output: 30
console.log(calculateSquares(5)); // Output: 55

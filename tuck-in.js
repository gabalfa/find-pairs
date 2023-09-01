function tuckIn(arr1, arr2) {
  return [arr1[0], ...arr2, arr1[1]];
}

// ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));

// ➞ [15, 45, 75, 35, 150]
console.log(tuckIn([15, 150], [45, 75, 35]));

// ➞ [[1, 2], [3, 4], [5, 6]]
console.log(
  tuckIn(
    [
      [1, 2],
      [5, 6],
    ],
    [[3, 4]]
  )
);

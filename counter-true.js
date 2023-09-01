function countTrue(arr) {
  let counter = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index]) {
      counter++;
    }
  }
  return counter;
}

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));

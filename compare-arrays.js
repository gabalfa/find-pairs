function compareTriplets(a, b) {
  let resultsA = 0;
  let resultsB = 0;

  for (let index = 0; index < a.length; index++) {
    if (a[index] > b[index]) {
      resultsA++;
    } else if (a[index] < b[index]) {
      resultsB++;
    }
  }

  return [resultsA, resultsB];
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10]));

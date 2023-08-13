function findPairs(listNumbers, givenValue) {
  const numbersSeen = new Set(); // space: O(n)
  const pairs = []; // space: O(n)
  // for:  space: O(1), time: O(n)
  for (const number of listNumbers) {
    const possiblePartner = givenValue - number; // space: O(1), time: O(1)
    // if: space: O(1), time: O(1)
    if (numbersSeen.has(possiblePartner)) {
      pairs.push([number, possiblePartner]); // space: O(1), time: O(1)
    }
    numbersSeen.add(number); // space: O(1), time: O(1)
  }
  return pairs; // space: O(n), time: O(n)
}

module.exports = findPairs;

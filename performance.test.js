const findPairs = require("./performance");

describe("findPairs", () => {
  it("should return an array with pairs founded into a list of numbers", () => {
    /// input the list of numbers
    const listNumbers = [1, 9, 5, 0, 20, -4, 12, 16, 7];
    /// given value target
    const givenValue = 12;
    /// result
    const returnedPairs = findPairs(listNumbers, givenValue);

    returnedPairs.forEach((pair) => {
      expect(givenValue).toEqual(pair[0] + pair[1]);
      console.log([pair[0], pair[1]]);
    });
  });

  it("should return an array with a specific length", () => {
    /// input the list of numbers
    const listNumbers = [1, 9, 5, 0, 20, -4, 12, 16, 7];
    /// given value target
    const givenValue = 12;
    /// result
    const returnedPairs = findPairs(listNumbers, givenValue);

    expect(3).toEqual(returnedPairs.length);
  });
});

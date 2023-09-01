const nums = [2, 0, 0, 0, 0, 3, 2, 3, 1, 1, 0, 3, 4, 4, 8];
const maxNum = Math.max(...nums);
const countArray = new Array(maxNum + 1).fill(0);

for (let num of nums) {
  countArray[num]++;
}
console.log(countArray);

const sortedArray = [];
for (let i = 0; i < countArray.length; i++) {
  while (countArray[i] > 0) {
    sortedArray.push(i);
    countArray[i]--;
  }
}

console.log("output:", sortedArray);

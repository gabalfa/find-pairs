const n = 6;
const genes = "a b c aa d b".split(" ");
const health = "1 2 3 4 5 6".split(" ").map(Number);
const s = 3;
const strand1 = "1 5 caaab".split(" ");
const strand2 = "0 4 xyz".split(" ");
const strand3 = "2 4 bcdybc".split(" ");

const arrStrands = [strand1, strand2, strand3];
const results = [];

for (let index = 0; index < s; index++) {
  const start = Number(arrStrands[index][0]);
  const end = Number(arrStrands[index][1]);
  const d = arrStrands[index][2];
  let healthy = 0;

  for (let gene = start; gene <= end; gene++) {
    const pattern = new RegExp(genes[gene], "g");
    let matches = d.match(pattern);

    if (matches && genes[gene].length > 1) {
      matches = new Array(genes[gene].length).fill(genes[gene]);
    }
    if (matches) {
      healthy += health[gene] * matches.length;
    }
  }

  results.push(healthy);
}

console.log(`${Math.min(...results)} ${Math.max(...results)}`);

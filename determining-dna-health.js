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
  const first = Number(arrStrands[index][0]);
  const last = Number(arrStrands[index][1]);
  const d = arrStrands[index][2];
  let healthy = 0;

  for (let indexGene = first; indexGene < last; indexGene++) {
    const gene = genes[indexGene];
    for (let indexLetter = 0; indexLetter < gene.length; indexLetter++) {
      let indexDNA = d.length - 1;
      let matches = 0;
      while (indexDNA >= 0) {
        if (d[indexDNA] == gene[indexLetter]) {
          console.log("if:", indexGene);
          matches++;
          if (matches === gene.length) {
            healthy += health[indexGene];
          }
        }
        indexDNA--;
      }
    }
  }

  results.push(healthy);
}
// console.log(`${Math.min(...results)} ${Math.max(...results)}`);
console.log(results);

//  genes:      b c aa d b
//              ^
//              ^
// string:      c a a a b
//                      ^

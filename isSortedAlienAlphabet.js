var isAlienSorted = function (palabras, orden) {
  mapAlphabet = new Map();

  orden.split("").map((data, index) => {
    mapAlphabet[orden[index]] = index;
  });

  for (let i = 1; i < palabras.length; i++) {
    return comparar(palabras[i - 1], palabras[i]);
  }

  return ":)";
};

function comparar(word1, word2) {
  const length = Math.min(word1.length, word2.length);
  for (let index = 0; index < length; index++) {
    if (mapAlphabet[word1[index]] < mapAlphabet[word2[index]]) {
      return true;
    }
    if (mapAlphabet[word1[index]] > mapAlphabet[word2[index]]) {
      return false;
    }
  }
}

const words1 = ["habito", "hacer", "lectura", "sonreir"];
const order1 = "hlabcdfgijkmnopqrstuvwxyz";
const result = isAlienSorted(words1, order1);

console.log(result);

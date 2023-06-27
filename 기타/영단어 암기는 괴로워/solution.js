// 20920

const solution = (input) => {
  const [wordCount, minLength] = input
      .shift()
      .split(" ")
      .map((str) => parseInt(str)),
    words = input;
  const voca = {};

  for (let i = 0; i < wordCount; i++) {
    const word = words[i];
    if (word.length >= minLength) voca[word] = (voca[word] || 0) + 1;
  }

  const sorted = mergeSort(Object.entries(voca));

  return sorted.map((word) => word[0]);
};

const mergeSort = (voca) => {
  if (voca.length < 2) return voca;

  const center = Math.round(voca.length / 2),
    left = mergeSort(voca.slice(0, center)),
    right = mergeSort(voca.slice(center)),
    merged = [];

  let indexL = 0,
    indexR = 0;

  while (indexL < left.length && indexR < right.length) {
    const [wordL, countL] = left[indexL],
      [wordR, countR] = right[indexR];

    if (countL > countR) {
      merged.push(left[indexL]);
      indexL += 1;
    } else if (countL < countR) {
      merged.push(right[indexR]);
      indexR += 1;
    } else {
      if (wordL.length > wordR.length) {
        merged.push(left[indexL]);
        indexL += 1;
      } else if (wordL.length < wordR.length) {
        merged.push(right[indexR]);
        indexR += 1;
      } else {
        let indexChar = 0;
        while (indexChar <= wordL.length) {
          if (wordL[indexChar].charCodeAt() < wordR[indexChar].charCodeAt()) {
            merged.push(left[indexL]);
            indexL += 1;
            break;
          } else if (
            wordL[indexChar].charCodeAt() > wordR[indexChar].charCodeAt()
          ) {
            merged.push(right[indexR]);
            indexR += 1;
            break;
          } else {
            indexChar += 1;
          }
        }
      }
    }
  }

  return merged.concat(left.slice(indexL), right.slice(indexR));
};

const input = require("fs")
  .readFileSync("./input1.txt")
  .toString()
  .trim()
  .split("\n");

console.log(solution(input).join("\n"));

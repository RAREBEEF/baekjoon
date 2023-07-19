const solution = (dict, sentences) => {
  const charSortedDict = dict.map(([...item]) => {
      const head = item.splice(0, 1),
        tail = item.splice(-1),
        bodies = item,
        sortedBodies = charSort(bodies);
      return head + sortedBodies.join("") + tail;
    }),
    countingDict = {};

  for (item of new Set(charSortedDict)) {
    countingDict[item] = charSortedDict.filter((el) => el === item).length;
  }

  return sentences
    .map((s) =>
      s
        .split(" ")
        .map(([...w]) => {
          const head = w.splice(0, 1),
            tail = w.splice(-1),
            bodies = w,
            sortedBodies = charSort(bodies);
          return countingDict[head + sortedBodies.join("") + tail] || 0;
        })
        .reduce((acc, cur) => acc * cur, 1)
    )
    .join("\n");
};

const charSort = (chars) => {
  if (chars.length < 2) return chars;

  const center = Math.round(chars.length / 2),
    left = charSort(chars.slice(0, center)),
    right = charSort(chars.slice(center)),
    merged = [];
  let indexL = 0,
    indexR = 0;

  while (indexL < left.length && indexR < right.length) {
    if (left[indexL].charCodeAt() <= right[indexR].charCodeAt()) {
      merged.push(left[indexL]);
      indexL += 1;
    } else {
      merged.push(right[indexR]);
      indexR += 1;
    }
  }

  return merged.concat(left.slice(indexL), right.slice(indexR));
};

const input = require("fs")
    .readFileSync("./input1.txt")
    .toString()
    .trim()
    .split("\n"),
  dictLine = +input.shift(),
  dict = input.splice(0, dictLine).map((str) => str.trim()),
  sentences = input.splice(1).map((str) => str.trim());

console.log(solution(dict, sentences));

// const solution = (dict, sentences) => {
//   const result = [],
//     charSortedDict = dict.map(([...item]) => {
//       const head = item.splice(0, 1),
//         tail = item.splice(-1),
//         bodies = item,
//         sortedBodies = charMergeSort(bodies);
//       return head + sortedBodies.join("") + tail;
//     }),
//     countingDict = {};

//   for (item of new Set(charSortedDict)) {
//     countingDict[item] = charSortedDict.filter((el) => el === item).length;
//   }

//   for (s of sentences) {
//     const words = s.split(" "),
//       meaningCount = [];

//     for ([...w] of words) {
//       const head = w.splice(0, 1),
//         tail = w.splice(-1),
//         bodies = w,
//         sortedBodies = charMergeSort(bodies);
//       meaningCount.push(countingDict[head + sortedBodies.join("") + tail] || 0);
//     }

//     result.push(meaningCount.reduce((acc, cur) => acc * cur, 1));
//   }

//   return result.join("\n");
// };

// const charMergeSort = (chars) => {
//   if (chars.length < 2) return chars;

//   const center = Math.round(chars.length / 2),
//     left = charMergeSort(chars.slice(0, center)),
//     right = charMergeSort(chars.slice(center)),
//     merged = [];
//   let indexL = 0,
//     indexR = 0;

//   while (indexL < left.length && indexR < right.length) {
//     if (left[indexL].charCodeAt() <= right[indexR].charCodeAt()) {
//       merged.push(left[indexL]);
//       indexL += 1;
//     } else {
//       merged.push(right[indexR]);
//       indexR += 1;
//     }
//   }

//   return merged.concat(left.slice(indexL), right.slice(indexR));
// };

// const input = require("fs")
//     .readFileSync("./input1.txt")
//     .toString()
//     .trim()
//     .split("\n"),
//   dictLine = +input.shift(),
//   dict = input.splice(0, dictLine).map((str) => str.trim()),
//   sentences = input.splice(1).map((str) => str.trim());

// console.log(solution(dict, sentences));

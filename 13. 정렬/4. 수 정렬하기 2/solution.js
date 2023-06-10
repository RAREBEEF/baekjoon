// url: https://www.acmicpc.net/problem/2751
//
// step: 4
//
// id: 2751
//
// title: 수 정렬하기 2
//
// description:
// N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.
//
// input:
//
// 					첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수가 주어진다. 이 수는 절댓값이 1,000,000보다 작거나 같은 정수이다. 수는 중복되지 않는다.
//
//
//
// output:
//
// 					첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.
//
//
//
// sample input / output: 경로 내 txt 확인
//
// 이미지 여부: false
//
//

// const input = require("fs")
//   .readFileSync("./input1.txt")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((str) => parseInt(str))
//   .slice(1);

var input = [];
while (input.length < 50000) {
  var r = Math.floor(Math.random() * 50000) + 1;
  if (input.indexOf(r) === -1) input.push(r);
}

console.time("time");

/*************/
/* 병합 정렬 */
/*************/

const mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  const center = Math.round(arr.length / 2);
  const left = mergeSort(arr.slice(0, center));
  const right = mergeSort(arr.slice(center));

  const merged = [];
  let indexL = 0;
  let indexR = 0;

  while (indexL < left.length && indexR < right.length) {
    if (left[indexL] < right[indexR]) {
      merged.push(left[indexL]);
      indexL += 1;
    } else {
      merged.push(right[indexR]);
      indexR += 1;
    }
  }

  return merged.concat(left.slice(indexL), right.slice(indexR));
};

console.log(mergeSort(input).join("\n"));

/***********/
/* 퀵 정렬 */
/***********/

// const quickSort = (arr) => {
//   if (arr.length < 2) {
//     return arr;
//   }

//   const pivot = arr.shift();
//   const left = [];
//   const right = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }

//   left.push(pivot);

//   return quickSort(left).concat(quickSort(right));
// };

// console.log(quickSort(input).join("\n"));

console.timeEnd("time");

// url: https://www.acmicpc.net/problem/18870
//
// step: 11
//
// id: 18870
//
// title: 좌표 압축
//
// description:
// 수직선 위에 N개의 좌표 X1, X2, ..., XN이 있다. 이 좌표에 좌표 압축을 적용하려고 한다.
//
// Xi를 좌표 압축한 결과 X'i의 값은 Xi > Xj를 만족하는 서로 다른 좌표의 개수와 같아야 한다.
//
// X1, X2, ..., XN에 좌표 압축을 적용한 결과 X'1, X'2, ..., X'N를 출력해보자.
//
// input:
//
// 					첫째 줄에 N이 주어진다.
//
// 둘째 줄에는 공백 한 칸으로 구분된 X1, X2, ..., XN이 주어진다.
//
//
//
// output:
//
// 					첫째 줄에 X'1, X'2, ..., X'N을 공백 한 칸으로 구분해서 출력한다.
//
//
//
// sample input / output: 경로 내 txt 확인
//
// 이미지 여부: false
//
// '

const input = require("fs")
  .readFileSync("./input1.txt")
  .toString()
  .trim()
  .split("\n")[1]
  .split(" ")
  .map((str) => parseInt(str));

const mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  const center = Math.round(arr.length / 2),
    left = mergeSort(arr.slice(0, center)),
    right = mergeSort(arr.slice(center)),
    merged = [];

  let [indexL, indexR] = [0, 0];

  while (left.length > indexL && right.length > indexR) {
    if (left[indexL] <= right[indexR]) {
      merged.push(left[indexL]);
      indexL += 1;
    } else {
      merged.push(right[indexR]);
      indexR += 1;
    }
  }

  return merged.concat(left.slice(indexL), right.slice(indexR));
};

const binarySearch = (arr, target) => {
  if (arr[0] === target) return 0;

  let low = 0,
    high = arr.length - 1,
    center = Math.round((low + high) / 2);

  while (low + 1 < high) {
    center = Math.round((low + high) / 2);

    if (arr[low] < target !== arr[center] < target) {
      high = center;
    } else {
      low = center;
    }
  }

  return high;
};

const solution = (arr) => {
  const sortedUniqNum = mergeSort(Array.from(new Set(arr)));
  const compressed = [];

  for (let i = 0; i < arr.length; i++) {
    compressed.push(binarySearch(sortedUniqNum, arr[i]));
  }
  return compressed.join(" ");
};

console.log(solution(input));

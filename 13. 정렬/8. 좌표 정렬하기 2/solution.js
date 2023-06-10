// url: https://www.acmicpc.net/problem/11651
//
// step: 8
//
// id: 11651
//
// title: 좌표 정렬하기 2
//
// description:
// 2차원 평면 위의 점 N개가 주어진다. 좌표를 y좌표가 증가하는 순으로, y좌표가 같으면 x좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.
//
// input:
//
// 					첫째 줄에 점의 개수 N (1 ≤ N ≤ 100,000)이 주어진다. 둘째 줄부터 N개의 줄에는 i번점의 위치 xi와 yi가 주어진다. (-100,000 ≤ xi, yi ≤ 100,000) 좌표는 항상 정수이고, 위치가 같은 두 점은 없다.
//
//
//
// output:
//
// 					첫째 줄부터 N개의 줄에 점을 정렬한 결과를 출력한다.
//
//
//
// sample input / output: 경로 내 txt 확인
//
// 이미지 여부: false
//
//

const input = require("fs")
  .readFileSync("./input1.txt")
  .toString()
  .trim()
  .split("\n")
  .map((strs) => strs.split(" ").map((str) => parseInt(str)))
  .slice(1);

const solution = (arr) => {
  if (arr.length < 2) return arr;

  const center = Math.floor(arr.length / 2),
    left = solution(arr.slice(0, center)),
    right = solution(arr.slice(center)),
    merged = [];

  let indexL = 0,
    indexR = 0;

  while (indexL < left.length && indexR < right.length) {
    const l = left[indexL],
      r = right[indexR];

    if (l[1] < r[1]) {
      merged.push(l);
      indexL += 1;
    } else if (l[1] > r[1]) {
      merged.push(r);
      indexR += 1;
    } else {
      if (l[0] < r[0]) {
        merged.push(l);
        indexL += 1;
      } else if (l[0] > r[0]) {
        merged.push(r);
        indexR += 1;
      }
    }
  }

  return merged.concat(left.slice(indexL), right.slice(indexR));
};

console.log(
  solution(input)
    .map((arr) => arr.join(" "))
    .join("\n")
);

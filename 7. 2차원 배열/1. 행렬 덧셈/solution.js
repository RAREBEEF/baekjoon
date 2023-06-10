// url: https://www.acmicpc.net/problem/2738
//
// step: 1
//
// id: 2738
//
// title: 행렬 덧셈
//
// description:
// N*M크기의 두 행렬 A와 B가 주어졌을 때, 두 행렬을 더하는 프로그램을 작성하시오.
//
// input:
//
// 					첫째 줄에 행렬의 크기 N 과 M이 주어진다. 둘째 줄부터 N개의 줄에 행렬 A의 원소 M개가 차례대로 주어진다. 이어서 N개의 줄에 행렬 B의 원소 M개가 차례대로 주어진다. N과 M은 100보다 작거나 같고, 행렬의 원소는 절댓값이 100보다 작거나 같은 정수이다.
//
//
//
// output:
//
// 					첫째 줄부터 N개의 줄에 행렬 A와 B를 더한 행렬을 출력한다. 행렬의 각 원소는 공백으로 구분한다.
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
  .map((strs) => strs.split(" ").map((str) => parseInt(str)));

const solution = (arrs) => {
  const size = arrs.shift();
  const arr1 = arrs;
  const arr2 = arr1.splice(size[0]);
  const answer = [];

  for (let i = 0; i < size[0]; i++) {
    answer.push([]);

    for (let j = 0; j < size[1]; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }

    answer[i] = answer[i].join(" ");
  }

  return answer.join("\n");
};

console.log(solution(input));

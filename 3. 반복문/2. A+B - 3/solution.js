// url: https://www.acmicpc.net/problem/10950
//
// step: 2
//
// id: 10950
//
// title: A+B - 3
//
// description:
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
//
// input:
//
// 					첫째 줄에 테스트 케이스의 개수 T가 주어진다.
//
// 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
//
//
//
// output:
//
// 					각 테스트 케이스마다 A+B를 출력한다.
//
//
//
// sample input / output: 경로 내 txt 확인
//
// 이미지 여부: false
//
//

const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .split("\n")
  .map((strs) => strs.split(" ").map((str) => parseInt(str)));

const sum = (caseCount, cases) => {
  for (let i = 0; i < caseCount; i++) {
    console.log(cases[i].reduce((acc, cur) => acc + cur, 0));
  }
};

sum(input.shift()[0], input);

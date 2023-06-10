// url: https://www.acmicpc.net/problem/11021
//
// step: 7
//
// id: 11021
//
// title: A+B - 7
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
// 					각 테스트 케이스마다 "Case #x: "를 출력한 다음, A+B를 출력한다. 테스트 케이스 번호는 1부터 시작한다.
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
  .trim()
  .split("\n")
  .map((strs) => strs.split(" ").map((str) => parseInt(str)));

const sum = (cases) => {
  return cases.map((nums, i) => `Case #${i + 1}: ${nums[0] + nums[1]}`);
};

console.log(sum(input.splice(1)).join("\n"));

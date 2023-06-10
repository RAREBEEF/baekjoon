// url: https://www.acmicpc.net/problem/10757
//
// step: 8
//
// id: 10757
//
// title: 큰 수 A+B
//
// description:
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
//
// input:
//
// 					첫째 줄에 A와 B가 주어진다. (0 < A,B < 1010000)
//
//
//
// output:
//
// 					첫째 줄에 A+B를 출력한다.
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
  .split(" ")
  .map((str) => BigInt(str));

const solution = (input) => {
  return (input[0] + input[1]).toString();
};

console.log(solution(input));

// url: https://www.acmicpc.net/problem/11720
//
// step: 5
//
// id: 11720
//
// title: 숫자의 합
//
// description:
// N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.
//
// input:
//
// 					첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다.
//
//
//
// output:
//
// 					입력으로 주어진 숫자 N개의 합을 출력한다.
//
//
//
// sample input / output: 경로 내 txt 확인
//
// 이미지 여부: false
//
//

const input = require("fs")
  .readFileSync("./input2.txt")
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  return [...input[1]]
    .map((num) => parseInt(num))
    .reduce((acc, cur, i) => acc + cur, 0);
};

console.log(solution(input));

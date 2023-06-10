// url: https://www.acmicpc.net/problem/2745
//
// step: 1
//
// id: 2745
//
// title: 진법 변환
//
// description:
// B진법 수 N이 주어진다. 이 수를 10진법으로 바꿔 출력하는 프로그램을 작성하시오.
//
// 10진법을 넘어가는 진법은 숫자로 표시할 수 없는 자리가 있다. 이런 경우에는 다음과 같이 알파벳 대문자를 사용한다.
//
// A: 10, B: 11, ..., F: 15, ..., Y: 34, Z: 35
//
// input:
//
// 					첫째 줄에 N과 B가 주어진다. (2 ≤ B ≤ 36)
//
// B진법 수 N을 10진법으로 바꾸면, 항상 10억보다 작거나 같다.
//
//
//
// output:
//
// 					첫째 줄에 B진법 수 N을 10진법으로 출력한다.
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
  .split(" ");

const solution = (input) => {
  const notation = parseInt(input.pop());
  const target = [...input[0]];

  const result = target.reduce((acc, cur, i) => {
    const digit = target.length - i - 1;
    const num =
      48 <= cur.charCodeAt() && cur.charCodeAt() <= 57
        ? parseInt(char)
        : cur.charCodeAt() - 55;

    return acc + notation ** digit * num;
  }, 0);

  return result;
};

console.log(solution(input));

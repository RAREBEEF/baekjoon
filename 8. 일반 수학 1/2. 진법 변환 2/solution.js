// url: https://www.acmicpc.net/problem/11005
//
// step: 2
//
// id: 11005
//
// title: 진법 변환 2
//
// description:
// 10진법 수 N이 주어진다. 이 수를 B진법으로 바꿔 출력하는 프로그램을 작성하시오.
//
// 10진법을 넘어가는 진법은 숫자로 표시할 수 없는 자리가 있다. 이런 경우에는 다음과 같이 알파벳 대문자를 사용한다.
//
// A: 10, B: 11, ..., F: 15, ..., Y: 34, Z: 35
//
// input:
//
// 					첫째 줄에 N과 B가 주어진다. (2 ≤ B ≤ 36) N은 10억보다 작거나 같은 자연수이다.
//
//
//
// output:
//
// 					첫째 줄에 10진법 수 N을 B진법으로 출력한다.
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
  .split(" ")
  .map((str) => parseInt(str));

const solution = (num, notation, result) => {
  const quotient = Math.floor(num / notation);
  const remainder = num % notation;

  if (quotient > notation) {
    result.push(...solution(quotient, notation, []).result);
    return solution(remainder, notation, result);
  } else if (quotient !== 0) {
    result.push(quotient);
    return solution(remainder, notation, result);
  } else {
    result.push(remainder);
    return {
      result,
      toNotation: () =>
        result
          .map((cur) => {
            if (cur === notation) {
              return 10;
            } else if (cur >= 10) {
              return String.fromCharCode(cur + 55);
            } else {
              return cur;
            }
          })
          .join(""),
    };
  }
};

console.log(solution(input[0], input[1], []).toNotation());

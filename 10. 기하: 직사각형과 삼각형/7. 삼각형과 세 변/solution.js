// url: https://www.acmicpc.net/problem/5073
//
// step: 7
//
// id: 5073
//
// title: 삼각형과 세 변
//
// description:
// 삼각형의 세 변의 길이가 주어질 때 변의 길이에 따라 다음과 같이 정의한다.
//
//
// 	Equilateral :  세 변의 길이가 모두 같은 경우
// 	Isosceles : 두 변의 길이만 같은 경우
// 	Scalene : 세 변의 길이가 모두 다른 경우
//
//
// 단 주어진 세 변의 길이가 삼각형의 조건을 만족하지 못하는 경우에는 "Invalid" 를 출력한다. 예를 들어 6, 3, 2가 이 경우에 해당한다. 가장 긴 변의 길이보다 나머지 두 변의 길이의 합이 길지 않으면 삼각형의 조건을 만족하지 못한다.
//
// 세 변의 길이가 주어질 때 위 정의에 따른 결과를 출력하시오.
//
// input:
//
// 					각 줄에는 1,000을 넘지 않는 양의 정수 3개가 입력된다. 마지막 줄은 0 0 0이며 이 줄은 계산하지 않는다.
//
//
//
// output:
//
// 					각 입력에 맞는 결과 (Equilateral, Isosceles, Scalene, Invalid) 를 출력하시오.
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

const solution = (sides) => {
  const results = [];

  while (true) {
    const side = sides.shift();
    if (side[0] === 0) break;

    side.sort((a, b) => a - b);
    if (side[0] + side[1] <= side[2]) {
      results.push("Invalid");
      continue;
    }

    const sameLength = 4 - Array.from(new Set(side)).length;
    switch (sameLength) {
      case 2:
        results.push("Isosceles");
        break;
      case 3:
        results.push("Equilateral");
        break;
      default:
        results.push("Scalene");
    }
  }

  return results.join("\n");
};

console.log(solution(input));

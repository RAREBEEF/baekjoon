// url: https://www.acmicpc.net/problem/14215
//
// step: 8
//
// id: 14215
//
// title: 세 막대
//
// description:
// 영선이는 길이가 a, b, c인 세 막대를 가지고 있고, 각 막대의 길이를 마음대로 줄일 수 있다.
//
// 영선이는 세 막대를 이용해서 아래 조건을 만족하는 삼각형을 만들려고 한다.
//
//
// 	각 막대의 길이는 양의 정수이다
// 	세 막대를 이용해서 넓이가 양수인 삼각형을 만들 수 있어야 한다.
// 	삼각형의 둘레를 최대로 해야 한다.
//
//
// a, b, c가 주어졌을 때, 만들 수 있는 가장 큰 둘레를 구하는 프로그램을 작성하시오.
//
// input:
//
// 					첫째 줄에 a, b, c (1 ≤ a, b, c ≤ 100)가 주어진다.
//
//
//
// output:
//
// 					첫째 줄에 만들 수 있는 가장 큰 삼각형의 둘레를 출력한다.
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
  .split(" ")
  .map((str) => parseInt(str));

const solution = (sticks) => {
  sticks.sort((a, b) => a - b);
  const [a, b, max] = sticks;
  const exceptMax = a + b;

  if (exceptMax <= max) {
    return exceptMax * 2 - 1;
  } else {
    return exceptMax + max;
  }
};

console.log(solution(input));

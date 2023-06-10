// url: https://www.acmicpc.net/problem/25305
//
// step: 3
//
// id: 25305
//
// title: 커트라인
//
// description:
// 2022 연세대학교 미래캠퍼스 슬기로운 코딩생활에 $N$명의 학생들이 응시했다.
//
// 이들 중 점수가 가장 높은 $k$명은 상을 받을 것이다. 이 때, 상을 받는 커트라인이 몇 점인지 구하라.
//
// 커트라인이란 상을 받는 사람들 중 점수가 가장 가장 낮은 사람의 점수를 말한다.
//
// input:
//
// 					첫째 줄에는 응시자의 수 $N$과 상을 받는 사람의 수 $k$가 공백을 사이에 두고 주어진다.
//
// 둘째 줄에는 각 학생의 점수 $x$가 공백을 사이에 두고 주어진다.
//
//
//
// output:
//
// 					상을 받는 커트라인을 출력하라.
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

const solution = (input) => {
  const [examineeCount, winnerCount] = input.shift();
  const examinees = input.shift();
  const sorted = [examinees.shift()];

  outer: while (examinees.length > 0) {
    const cur = examinees.shift();
    inner: for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] <= cur) {
        sorted.splice(i, 0, cur);
        continue outer;
      } else {
        continue inner;
      }
    }
    sorted.push(cur);
  }

  return sorted[Math.min(winnerCount - 1, sorted.length - 1)];
};

console.log(solution(input));

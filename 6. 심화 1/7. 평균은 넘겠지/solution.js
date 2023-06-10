// url: https://www.acmicpc.net/problem/4344
//
// step: 7
//
// id: 4344
//
// title: 평균은 넘겠지
//
// description:
// 대학생 새내기들의 90%는 자신이 반에서 평균은 넘는다고 생각한다. 당신은 그들에게 슬픈 진실을 알려줘야 한다.
//
// input:
//
// 					첫째 줄에는 테스트 케이스의 개수 C가 주어진다.
//
// 둘째 줄부터 각 테스트 케이스마다 학생의 수 N(1 ≤ N ≤ 1000, N은 정수)이 첫 수로 주어지고, 이어서 N명의 점수가 주어진다. 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.
//
//
//
// output:
//
// 					각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다.
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

const solution = (cases) => {
  const caseCount = cases.shift();
  const aboveAvgRatios = [];

  for (let i = 0; i < caseCount; i++) {
    const curCase = cases[i];
    const studentsCount = curCase.shift();
    const avg = curCase.reduce((acc, cur) => acc + cur, 0) / studentsCount;
    const aboveAvg = curCase.filter((score) => score > avg).length;

    aboveAvgRatios.push(((aboveAvg / studentsCount) * 100).toFixed(3) + "%");
  }

  return aboveAvgRatios.join("\n");
};

console.log(solution(input));

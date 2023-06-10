// url: https://www.acmicpc.net/problem/5597
//
// step: 7
//
// id: 5597
//
// title: 과제 안 내신 분..?
//
// description:
// X대학 M교수님은 프로그래밍 수업을 맡고 있다. 교실엔 학생이 30명이 있는데, 학생 명부엔 각 학생별로 1번부터 30번까지 출석번호가 붙어 있다.
//
// 교수님이 내준 특별과제를 28명이 제출했는데, 그 중에서 제출 안 한 학생 2명의 출석번호를 구하는 프로그램을 작성하시오.
//
// input:
//
// 					입력은 총 28줄로 각 제출자(학생)의 출석번호 n(1 ≤ n ≤ 30)가 한 줄에 하나씩 주어진다. 출석번호에 중복은 없다.
//
//
//
// output:
//
// 					출력은 2줄이다. 1번째 줄엔 제출하지 않은 학생의 출석번호 중 가장 작은 것을 출력하고, 2번째 줄에선 그 다음 출석번호를 출력한다.
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
  .map((str) => parseInt(str));

const findNoSubmission = (numbers) => {
  const noSubmissions = [];
  numbers.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
  numbers.unshift(0);

  for (let i = 0; i <= numbers.length; i++) {
    const curNum = numbers[i];

    switch (i === curNum) {
      case true:
        continue;
      case false:
        noSubmissions.push(i);
        break;
    }

    if (noSubmissions.length !== 2) {
      numbers.unshift(0);
    } else {
      break;
    }
  }

  return noSubmissions;
};

console.log(findNoSubmission(input).join("\n"));

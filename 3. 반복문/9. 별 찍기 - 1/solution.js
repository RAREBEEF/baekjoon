// url: https://www.acmicpc.net/problem/2438
//
// step: 9
//
// id: 2438
//
// title: 별 찍기 - 1
//
// description:
// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
//
// input:
//
// 					첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.
//
//
//
// output:
//
// 					첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.
//
//
//
// sample input / output: 경로 내 txt 확인
//
// 이미지 여부: false
//
//

const input = parseInt(require("fs").readFileSync("../input.txt"));

const stars = (lineCount) => {
  const starsArr = [];
  for (let i = 1; i <= lineCount; i++) {
    starsArr.push("*".repeat(i));
  }
  return starsArr;
};

console.log(stars(input).join("\n"));

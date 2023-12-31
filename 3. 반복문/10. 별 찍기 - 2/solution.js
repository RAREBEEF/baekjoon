// url: https://www.acmicpc.net/problem/2439
//
// step: 10
//
// id: 2439
//
// title: 별 찍기 - 2
//
// description:
// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
//
// 하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.
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

const starsAlignRight = (lineCount) => {
  const starsArr = [];
  for (let i = 1; i <= lineCount; i++) {
    starsArr.push("*".repeat(i).padStart(lineCount, " "));
  }
  return starsArr;
};

console.log(starsAlignRight(input).join("\n"));

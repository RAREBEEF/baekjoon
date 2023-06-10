// url: https://www.acmicpc.net/problem/2444
//
// step: 3
//
// id: 2444
//
// title: 별 찍기 - 7
//
// description:
// 예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.
//
// input:
//
// 					첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.
//
//
//
// output:
//
// 					첫째 줄부터 2×N-1번째 줄까지 차례대로 별을 출력한다.
//
//
//
// sample input / output: 경로 내 txt 확인
//
// 이미지 여부: false
//
//

const input = parseInt(require("fs").readFileSync("./input1.txt"));

const solution = (num) => {
  const half = [];

  for (let i = 1; i <= num; i++) {
    const empty = num - i;
    const star = i * 2 - 1;
    half.push(" ".repeat(empty) + "*".repeat(star));
  }

  const otherHalf = half.slice(0, -1).reverse();

  return half.concat(otherHalf).join("\n");
};

console.log(solution(input));

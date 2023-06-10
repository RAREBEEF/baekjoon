// url: https://www.acmicpc.net/problem/8393
//
// step: 3
//
// id: 8393
//
// title: 합
//
// description:
// n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
//
// input:
//
// 					첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.
//
//
//
// output:
//
// 					1부터 n까지 합을 출력한다.
//
//
//
// sample input / output: 경로 내 txt 확인
//
// 이미지 여부: false
//
//

const input = parseInt(require("fs").readFileSync("../input.txt"));

const factorial = (n, sum = 0) => {
  if (n > 1) {
    return factorial(n - 1, sum + n);
  } else {
    return sum + n;
  }
};

console.log(factorial(input));

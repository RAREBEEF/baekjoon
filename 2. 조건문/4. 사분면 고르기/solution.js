// url: https://www.acmicpc.net/problem/14681
//
// step: 4
//
// id: 14681
//
// title: 사분면 고르기
//
// description:
// 흔한 수학 문제 중 하나는 주어진 점이 어느 사분면에 속하는지 알아내는 것이다. 사분면은 아래 그림처럼 1부터 4까지 번호를 갖는다. "Quadrant n"은 "제n사분면"이라는 뜻이다.
//
//
//
// 예를 들어, 좌표가 (12, 5)인 점 A는 x좌표와 y좌표가 모두 양수이므로 제1사분면에 속한다. 점 B는 x좌표가 음수이고 y좌표가 양수이므로 제2사분면에 속한다.
//
// 점의 좌표를 입력받아 그 점이 어느 사분면에 속하는지 알아내는 프로그램을 작성하시오. 단, x좌표와 y좌표는 모두 양수나 음수라고 가정한다.
//
// input:
//
// 					첫 줄에는 정수 x가 주어진다. (−1000 ≤ x ≤ 1000; x ≠ 0) 다음 줄에는 정수 y가 주어진다. (−1000 ≤ y ≤ 1000; y ≠ 0)
//
//
//
// output:
//
// 					점 (x, y)의 사분면 번호(1, 2, 3, 4 중 하나)를 출력한다.
//
//
//
// sample input / output: 경로 내 txt 확인
//
// 이미지 여부: true
//
// 원본 이미지 0: https://onlinejudgeimages.s3-ap-northeast-1.amazonaws.com/problem/14681/1.png

const rl = require("readline");

const readMultipleLines = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readMultipleLines
  .on("line", function (line) {
    input.push(line);
  })
  .on("close", function () {
    const [x, y] = input;
    findQuandrant(x, y);
    process.exit();
  });

const isPositive = (num) => num > 0;

const findQuandrant = (x, y) => {
  if (isPositive(x)) {
    console.log(isPositive(y) ? 1 : 4);
  } else {
    console.log(isPositive(y) ? 2 : 3);
  }
};

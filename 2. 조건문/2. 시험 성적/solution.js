// url: https://www.acmicpc.net/problem/9498
//
// step: 2
//
// id: 9498
//
// title: 시험 성적
//
// description:
// 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.
//
// input:
//
// 					첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.
//
//
//
// output:
//
// 					시험 성적을 출력한다.
//
//
//
// sample input / output: 경로 내 txt 확인
//
// 이미지 여부: false
//
//

const score = parseInt(require("fs").readFileSync("../input.txt"));

const grade = (score) => {
  return score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F";
};

console.log(grade(score));

// url: https://www.acmicpc.net/problem/2739
//
// step: 1
//
// id: 2739
//
// title: 구구단
//
// description:
// N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.
//
// input:
//
// 					첫째 줄에 N이 주어진다. N은 1보다 크거나 같고, 9보다 작거나 같다.
//
//
//
// output:
//
// 					출력형식과 같게 N*1부터 N*9까지 출력한다.
//
//
//
// sample input / output: 경로 내 txt 확인
//
// 이미지 여부: false
//
//

const input = parseInt(require("fs").readFileSync("../input.txt"));

const multiple = (num) => {
  for (let i = 1; i <= 9; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
};

multiple(input);

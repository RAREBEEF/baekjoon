// const input = require("fs")
//   .readFileSync("./input1.txt")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((str) => parseInt(str))
//   .slice(1);

// const countingSort = (arr) => {
//   const counting = new Array(Math.max(...arr) + 1).fill(0);
//   const sorted = new Array(arr.length).fill(0);

//   for (n of arr) {
//     counting[n] += 1;
//   }

//   for (let i = 1; i < counting.length; i++) {
//     counting[i] += counting[i - 1];
//   }

//   for (n of arr) {
//     const i = counting[n];
//     sorted[i] = n;
//     counting[n] -= 1;
//   }

//   return sorted.slice(1).join("\n");
// };

// url: https://www.acmicpc.net/problem/10989
//
// step: 5
//
// id: 10989
//
// title: 수 정렬하기 3
//
// description:
// N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.
//
// input:
//
// 					첫째 줄에 수의 개수 N(1 ≤ N ≤ 10,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수가 주어진다. 이 수는 10,000보다 작거나 같은 자연수이다.
//
//
//
// output:
//
// 					첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.
//
//
//
// sample input / output: 경로 내 txt 확인
//
// 이미지 여부: false
//
//

const readline = require("readline");
const { Readable } = require("stream");

const createReadableStream = () => {
  const readableStream = new Readable({
    read() {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      let total = -1;
      const counting = new Array(10001).fill(0);
      let max = 0;

      rl.on("line", (line) => {
        const number = parseInt(line);
        if (total === -1) {
          total = number;
        } else {
          counting[number] += 1;
          if (number > max) {
            max = number;
          }
        }
      });

      rl.on("close", () => {
        counting.splice(max + 1);
        this.push(Buffer.from(counting));
        this.push(null);
      });
    },
  });

  return readableStream;
};

const solution = () => {
  const stream = createReadableStream();
  stream.on("data", (counting) => {
    counting.forEach((el, i) => {
      if (el !== 0) {
        console.log(`${i}\n`.repeat(el).trim());
      }
    });
  });
};

// const countingSort = (counting) => {
//   for (let i = 1; i < counting.length; i++) {
//     if (counting[i] === 0) continue;
//     console.log(`${i}\n`.repeat(counting[i]).trim());
//   }
// };

// const solution = () => {
//   const counting = new Array(10000).fill(0);
//   let total = -1;
//   let max = 0;

//   const rl = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   rl.on("line", (line) => {
//     if (total === -1) {
//       total = line;
//     } else {
//       counting[line] += 1;
//       if (line > max) {
//         max = parseInt(line);
//       }
//     }
//   }).on("close", () => {
//     counting.splice(max + 1);
//     countingSort(counting);
//     process.exit();
//   });
// };

solution();

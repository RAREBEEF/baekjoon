// url: https://www.acmicpc.net/problem/17103
//
// step: 8
//
// id: 17103
//
// title: 골드바흐 파티션
//
// description:
// 골드바흐의 추측: 2보다 큰 짝수는 두 소수의 합으로 나타낼 수 있다.
//
//
// 짝수 N을 두 소수의 합으로 나타내는 표현을 골드바흐 파티션이라고 한다. 짝수 N이 주어졌을 때, 골드바흐 파티션의 개수를 구해보자. 두 소수의 순서만 다른 것은 같은 파티션이다.
//
// input:
//
// 					첫째 줄에 테스트 케이스의 개수 T (1 ≤ T ≤ 100)가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, 정수 N은 짝수이고, 2 < N ≤ 1,000,000을 만족한다.
//
//
//
// output:
//
// 					각각의 테스트 케이스마다 골드바흐 파티션의 수를 출력한다.
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
  .map((str) => parseInt(str))
  .slice(1);

const solution = (nums) => {
  const result = [];
  const primes = getPrimes(Math.max(...nums));

  for (target of nums) {
    let count = 0;
    for (let i = 0; primes[i] <= target / 2; i++) {
      if (
        binarySearch(i, primes.length - 1, target - primes[i], primes) !== -1
      ) {
        count += 1;
      }
    }
    result.push(count);
  }

  return result;
};

const getPrimes = (num) => {
  let allNums = [],
    primeNums = [];

  for (let i = 2; i < num - 1; i++) {
    allNums.push(i);
  }

  let n = 0;
  while (n < Math.sqrt(num)) {
    n = allNums.shift();
    if (checkPrime(n)) {
      primeNums.push(n);
      allNums = allNums.filter((num) => num % n !== 0);
    }
  }

  return primeNums.concat(allNums);
};

const checkPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
};

const binarySearch = (start, end, target, arr) => {
  if (arr[start] === target) return start;

  let left = start,
    right = end,
    center = Math.round((left + right) / 2);

  while (left + 1 < right) {
    center = Math.round((left + right) / 2);
    if (compare(arr[left], target) === compare(arr[center], target)) {
      left = center;
    } else {
      right = center;
    }
  }

  return arr[right] === target ? right : -1;
};

const compare = (a, b) => {
  if (a > b) {
    return ">";
  } else if (a < b) {
    return "<";
  } else {
    return "===";
  }
};

console.log(solution(input).join("\n"));

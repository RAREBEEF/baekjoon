const solution = (input) => {
  const [m, n] = input.shift(),
    container = input,
    ripe = [];

  // 시작부터 익어있는 토마토 위치 및 토마토 총 수량을 파악
  let newRipe = [],
    tomatoCount = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const curRoom = container[i][j];

      if (curRoom === -1) {
        continue;
      } else {
        tomatoCount += 1;
        curRoom === 1 && newRipe.push([i, j]);
      }
    }
  }

  // 시작부터 익어있는 토마토가 없는 경우와 이미 모두 익어있는 경우
  if (newRipe.length < 1) {
    return -1;
  } else if (newRipe.length === tomatoCount) {
    return 0;
  }

  // 날을 거듭하며 토마토 익히기
  let day = 0;
  while (ripe.length + newRipe.length < tomatoCount) {
    // 전 날 익은 토마토가 없는 경우 더 이상 전파가 불가능
    if (newRipe.length === 0) return -1;

    // 전 날 익은 토마토를 익은 토마토 배열로 옮기고
    ripe.push(...newRipe);
    // 오늘 새롭게 익은 토마토를 새로 익은 토마토 배열에 할당
    newRipe = spread(container, newRipe);
    day += 1;
  }

  return day;
};

/**
 * 컨테이너와 전 날 익은 토마토를 인자로 받아 컨테이너의 상태를 업데이트하고 오늘 새롭게 익은 토마토를 반환
 */
const spread = (container, newRipe) => {
  const [m, n] = [container[0].length - 1, container.length - 1],
    newNewRipe = [];

  // 상하좌우 체크
  for ([i, j] of newRipe) {
    if (i - 1 >= 0 && container[i - 1][j] === 0) {
      container[i - 1][j] = 1;
      newNewRipe.push([i - 1, j]);
    }
    if (i + 1 <= n && container[i + 1][j] === 0) {
      container[i + 1][j] = 1;
      newNewRipe.push([i + 1, j]);
    }
    if (j - 1 >= 0 && container[i][j - 1] === 0) {
      container[i][j - 1] = 1;
      newNewRipe.push([i, j - 1]);
    }
    if (j + 1 <= m && container[i][j + 1] === 0) {
      container[i][j + 1] = 1;
      newNewRipe.push([i, j + 1]);
    }
  }

  return newNewRipe;
};

const input = require("fs")
  .readFileSync("./input1.txt")
  .toString()
  .trim()
  .split("\n")
  .map((strs) => strs.split(" ").map((str) => parseInt(str)));

console.log(solution(input));

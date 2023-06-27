const solution = (input) => {
  const switchCount = input.shift()[0],
    switches = input.shift(),
    studentCount = input.shift()[0],
    actions = input,
    switching = [1, 0];

  for (action of actions) {
    if (action[0] === 1) {
      let i = action[1] - 1;
      while (switchCount > i) {
        switches[i] = switching[switches[i]];
        i += action[1];
      }
    } else {
      let center = action[1] - 1,
        distance = 1;
      switches[center] = switching[switches[center]];
      while (center - distance >= 0 && center + distance <= switchCount - 1) {
        if (switches[center - distance] === switches[center + distance]) {
          switches[center - distance] = switching[switches[center - distance]];
          switches[center + distance] = switching[switches[center + distance]];
          distance += 1;
        } else {
          break;
        }
      }
    }
  }

  const result = [];

  while (switches.length > 0) {
    result.push(switches.splice(0, 20));
  }

  return result;
};

const input = require("fs")
  .readFileSync("./input1.txt")
  .toString()
  .trim()
  .split("\n")
  .map((strs) => strs.split(" ").map((str) => parseInt(str)));

console.log(
  solution(input)
    .map((row) => row.join(" "))
    .join("\n")
);

// 10813
const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((strs) => strs.split(" ").map((str) => parseInt(str)));

const ballChange = (actions) => {
  const [basketCount] = actions.shift();
  const baskets = [...Array(basketCount).keys()].map((num) => num + 1);

  actions.forEach((action, i) => {
    const [indexA, indexB] = action.map((i) => i - 1);
    const [valueA, valueB] = [baskets[indexA], baskets[indexB]];
    baskets[indexA] = valueB;
    baskets[indexB] = valueA;
  });

  return baskets;
};

console.log(ballChange(input).join(" "));

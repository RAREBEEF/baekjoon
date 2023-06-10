// 10810
const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((strs) => strs.split(" ").map((str) => parseInt(str)));

const ballBasket = (actions) => {
  const [basketCount] = actions.shift();

  const baskets = new Array(basketCount).fill(0, 0);

  actions.forEach((action, i) => {
    const [from, to, num] = action;
    baskets.fill(num, from - 1, to);
  });

  return baskets;
};

console.log(ballBasket(input).join(" "));

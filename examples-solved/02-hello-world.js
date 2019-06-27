console.clear();
const DataPoint = require("data-point");

const dp = DataPoint.create();

const reducer = value => `Hello ${value}`;

async function main() {
  const result = await dp.resolve(reducer, "World");
  console.dir(result);
}

main();

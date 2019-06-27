console.clear();
const DataPoint = require("data-point");

const dp = DataPoint.create();

// create Request Entity to hit: https://swapi.co/api/planets/

async function main() {
  const result = await dp.resolve();
  console.log(result);
}

main();

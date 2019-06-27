console.clear();
const DataPoint = require("data-point");

const dp = DataPoint.create();

// DEMO:
// [ ] - create Request Entity to get all planets: https://swapi.co/api/planets/
// [ ] - create Request Entity to get single planet: https://swapi.co/api/planets/<PLANET_ID>
// [ ] - catch errors
// [ ] - setInput
// [ ] - use `after`

async function main() {
  const result = await dp.resolve();
  console.log(result);
}

main();

console.clear();
const DataPoint = require("data-point");

const dp = DataPoint.create();

// DEMO:
// [ ] - create Request Entity to get all planets: https://swapi.dev/api/planets/
// [ ] - create Request Entity to get single planet: https://swapi.dev/api/planets/<PLANET_ID>
// [ ] - catch errors
// [ ] - setInput
// [ ] - create ObjectReducer to extract data from planet

const parseInteger = value => {
  return parseInt(value, 10);
};

const PlanetsRequest = () => "WIP";

async function main() {
  const result = await dp.resolve([PlanetsRequest], 1);
  console.log(result);
}

main().catch(error => console.log(error));

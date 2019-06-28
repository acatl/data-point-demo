console.clear();
const DataPoint = require("data-point");

const dp = DataPoint.create();

// DEMO:
// [ ] - create Request Entity to get all planets: https://swapi.co/api/planets/
// [ ] - create Request Entity to get single planet: https://swapi.co/api/planets/<PLANET_ID>
// [ ] - catch errors
// [ ] - setInput
// [ ] - use `after`

const PlanetsRequest = DataPoint.Request("PlanetsRequest", {
  url: "https://swapi.co/api/planets"
});

const PlanetRequest = DataPoint.Request("PlanetRequest", {
  inputType: "number",
  url: "https://swapi.co/api/planets/{value}",
  error: reason => {
    console.error("Failed PlanetRequest", reason.message);
    return {
      message: reason.message
    };
  },
  after: "$name",
  outputType: "string"
});

async function main() {
  const result = await dp.resolve([PlanetRequest], 1);
  console.log(result);
}

main();

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

const PlanetsRequest = DataPoint.Request("PlanetsRequest", {
  url: "https://swapi.dev/api/planets"
});

const PlanetRequest = DataPoint.Request("PlanetRequest", {
  inputType: "number",
  url: "https://swapi.dev/api/planets/{value}",
  error: reason => {
    console.error("Failed PlanetRequest", reason.message);
    return {
      message: reason.message
    };
  },
  outputType: "object"
});

const Planet = {
  name: "$name",
  rotationPeriod: ["$rotation_period", parseInteger]
};

async function main() {
  const result = await dp.resolve([PlanetRequest, Planet], 1);
  console.log(result);
}

main().catch(error => console.log(error));

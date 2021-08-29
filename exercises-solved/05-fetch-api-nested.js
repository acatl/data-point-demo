console.clear();
const DataPoint = require("data-point");

// DEMO:
// [ ] - Create PlanetRequest entity api: https://swapi.dev/api/planets/<NUMBER>
// [ ] - get name and rotation, period & residents
// [ ] - get all residents, create generic request
// [ ] - get residents name and species using map

const parseInteger = value => {
  return parseInt(value, 10);
};

const PlanetRequest = DataPoint.Request({
  inputType: "number",
  url: "https://swapi.dev/api/planets/{value}"
});

const ResidentRequest = DataPoint.Request({
  inputType: "string",
  url: "{value}",
  outputType: value => {
    if (!value.name) {
      throw TypeError("name missing");
    }
  }
});

const ResidentObject = {
  name: "$name",
  species: "$species"
};

const PlanetModel = DataPoint.Model({
  value: {
    name: "$name",
    climate: "$climate",
    rotationPeriod: ["$rotation_period", parseInteger],
    residents: ["$residents", DataPoint.map([ResidentRequest, ResidentObject])]
  }
});

async function main() {
  const dp = DataPoint.create();
  const result = await dp.resolve([PlanetRequest, PlanetModel], 1);

  console.dir(result, { depth: null });
}

main().catch(error => console.log(error));

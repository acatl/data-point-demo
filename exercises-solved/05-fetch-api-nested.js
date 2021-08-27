const DataPoint = require("data-point");
console.clear();

// DEMO:
// [ ] - Create PlanetRequest entity api: https://swapi.dev/api/planets/<NUMBER>
// [ ] - get name and rotation, period & residents
// [ ] - get all residents, create generic request
// [ ] - get residents name and species using map

const parseInteger = value => {
  return parseInt(value, 10);
};

const PlanetRequest = DataPoint.Request({
  url: "https://swapi.dev/api/planets/{value}"
});

const getURL = DataPoint.Request({
  url: "{value}"
});

const Resident = {
  name: "$name",
  species: ["$species[0]", getURL, "$name"]
};

const Planet = {
  name: "$name",
  rotationPeriod: ["$rotation_period", parseInteger],
  residents: ["$residents", DataPoint.map([getURL, Resident])]
};

async function main() {
  const dp = DataPoint.create();
  const result = await dp.resolve([PlanetRequest, Planet], 1);

  console.dir(result, { depth: null });
}

main().catch(error => console.log(error));

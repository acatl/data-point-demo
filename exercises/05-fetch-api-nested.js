const DataPoint = require("data-point");
console.clear();

// DEMO:
// [ ] - Create PlanetRequest entity api: https://swapi.co/api/planets/<NUMBER>
// [ ] - get name and rotation, period & residents
// [ ] - get all residents
// [ ] - get get residents name and species

const PlanetRequest = DataPoint.Request("PlanetRequest", {
  url: "https://swapi.co/api/planets/{value}"
});

const getURL = DataPoint.Request("getURL", {
  url: "{value}"
});

const ResidentModel = {
  name: "$name",
  species: ["$species[0]", getURL, "$name"]
};

const PlanetModel = {
  name: "$name",
  rotationPeriod: "$rotation_period",
  residents: ["$residents", DataPoint.map([getURL, ResidentModel])]
};

async function main() {
  const dp = DataPoint.create();
  const result = await dp.resolve([PlanetRequest, PlanetModel], 1);

  console.dir(result, { depth: null });
}

main();

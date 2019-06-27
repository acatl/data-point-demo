const { create, Request, map } = require("data-point");
console.clear();

const dp = create();

const PlanetRequest = Request("planet", {
  url: "https://swapi.co/api/planets/{value}"
});

const urlRequest = Request("url", {
  url: "{value}"
});

const ResidentModel = {
  name: "$name",
  species: ["$species[0]", urlRequest, "$name"]
};

const PlanetModel = {
  name: "$name",
  rotationPeriod: "$rotation_period",
  residents: ["$residents", map([urlRequest, ResidentModel])]
};

async function main() {
  const result = await dp.resolve([PlanetRequest, PlanetModel], 1);
  console.dir(result, { depth: null });
  console.log("\n");
}

main();

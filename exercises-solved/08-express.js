console.clear();
const DataPoint = require("data-point");
const express = require("express");

// DEMO:
// [ ] - create Request Entity to get single planet: https://swapi.dev/api/planets/<PLANET_ID>
// [ ] - return the JSON response of the request on a route /planet/:planetId.json
// [ ] - create function reducer that returns an HTML with information of the planet
// [ ] - return the HTML response of the request & the html reducer on route /planet/:planetId

const PlanetRequest = DataPoint.Request("PlanetRequest", {
  url: "https://swapi.dev/api/planets/{value}"
});

function toHTML(input) {
  return `
    <h1>${input.name}</h1>
  `;
}

async function main() {
  const app = express();
  const port = 3000;
  const dp = DataPoint.create();

  app.get("/planet/:planetId.json", async (req, res) => {
    const result = await dp.resolve([PlanetRequest], req.params.planetId);
    res.send(result);
  });

  app.get("/planet/:planetId", async (req, res) => {
    const result = await dp.resolve(
      [PlanetRequest, toHTML],
      req.params.planetId
    );
    res.send(result);
  });

  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}

main().catch(error => console.log(error));

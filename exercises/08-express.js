console.clear();
const DataPoint = require("data-point");
const express = require("express");

// DEMO:
// [ ] - create Request Entity to get single planet: https://swapi.co/api/planets/<PLANET_ID>
// [ ] - return the JSON response of the request on a route /planet/:planetId.json
// [ ] - create function reducer that returns an HTML with information of the planet
// [ ] - return the HTML response of the request & the html reducer on route /planet/:planetId

async function main() {
  const app = express();
  const port = 3000;
  const dp = DataPoint.create();

  // json route: /planet/:planetId.json

  // html route: /planet/:planetId

  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}

main().catch(error => console.log(error));

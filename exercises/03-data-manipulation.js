const DataPoint = require("data-point");

console.clear();

const data = {
  name: "Tatooine",
  metrics: {
    rotation_period: "23",
    orbital_period: "304",
    diameter: "10465",
    gravity: "1 standard",
    surface_water: "1"
  },
  climate: "arid",
  terrain: "desert",
  population: "200000",
  residents: [
    "https://swapi.dev/api/people/1/",
    "https://swapi.dev/api/people/2/",
    "https://swapi.dev/api/people/4/",
    "https://swapi.dev/api/people/6/",
    "https://swapi.dev/api/people/7/",
    "https://swapi.dev/api/people/8/",
    "https://swapi.dev/api/people/9/",
    "https://swapi.dev/api/people/11/",
    "https://swapi.dev/api/people/43/",
    "https://swapi.dev/api/people/62/"
  ],
  films: [
    "https://swapi.dev/api/films/5/",
    "https://swapi.dev/api/films/4/",
    "https://swapi.dev/api/films/6/",
    "https://swapi.dev/api/films/3/",
    "https://swapi.dev/api/films/1/"
  ],
  created: "2014-12-09T13:50:49.641000Z",
  edited: "2014-12-21T20:48:04.175778Z",
  url: "https://swapi.dev/api/planets/1/"
};

// TODO: items to review
// [ ] - PathReducer - get all
// [ ] - PathReducer - get property
// [ ] - PathReducer - get nested property
// [ ] - FunctionReducer - parse rotation period to integer
// [ ] - ObjectReducer - map properties
// [ ] - ModelReducer - create Model
// [ ] - ModelReducer - check input
// [ ] - ModelReducer - check output

const parseInteger = value => {
  return parseInt(value, 10);
};

async function main() {
  // create data point instance
  const dp = DataPoint.create();

  // const result = await dp.resolve(, data);

  console.dir(result);
}

main().catch(error => console.log(error));

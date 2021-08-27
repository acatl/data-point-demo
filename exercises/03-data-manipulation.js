const DataPoint = require("data-point");

console.clear();

const data = {
  name: "Tatooine",
  metrics: {
    rotation_period: "23",
    surface_water: "1"
  },
  climate: "arid",
  terrain: "desert",
  population: "200000",
  residents: [
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77"
    },
    {
      name: "C-3PO",
      height: "167",
      mass: "75"
    },
    {
      name: "Darth Vader",
      height: "202",
      mass: "136"
    }
  ]
};

// simplified JSON Schema
const schema = {
  type: "object",
  default: {},
  required: ["name", "climate", "rotationPeriod", "firstResident"],
  properties: {
    name: {
      $id: "#/properties/name",
      type: "string"
    },
    climate: {
      $id: "#/properties/climate",
      type: "string"
    },
    rotationPeriod: {
      $id: "#/properties/rotationPeriod",
      type: "integer"
    },
    firstResident: {
      $id: "#/properties/firstResident",
      type: "array",
      additionalItems: true,
      items: {
        $id: "#/properties/firstResident/items",
        anyOf: [
          {
            $id: "#/properties/firstResident/items/anyOf/0",
            type: "string"
          }
        ]
      }
    }
  },
  additionalProperties: true
};

// TODO: items to review
// [ ] - PathReducer - get all
// [ ] - PathReducer - get property
// [ ] - PathReducer - get nested property
// [ ] - FunctionReducer - parse rotation period to integer
// [ ] - ObjectReducer - map properties
// [ ] - ModelReducer - create Model
// [ ] - ModelReducer - check input
// [ ] - ModelReducer - check output using plain JS type checks
// [ ] - SchemaReducer - check output using SchemaReducer

const parseInteger = value => {
  return parseInt(value, 10);
};

async function main() {
  // create data point instance
  const dp = DataPoint.create();

  const result = await dp.resolve(parseInteger, "1");

  console.dir(result);
}

main().catch(error => console.log(error));

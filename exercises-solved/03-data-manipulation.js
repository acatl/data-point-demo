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
  required: ["name", "climate", "rotationPeriod", "residents"],
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
    residents: {
      $id: "#/properties/residents",
      type: "array",
      additionalItems: true,
      items: {
        $id: "#/properties/residents/items",
        anyOf: [
          {
            $id: "#/properties/residents/items/anyOf/0",
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

  const PlanetSchemaOutput = DataPoint.Schema({
    schema
  });

  const PlanetModel = DataPoint.Model({
    inputType: value => {
      if (!value) {
        throw TypeError("nope!");
      }
      if (!value.name) {
        throw TypeError("name is missing");
      }
    },
    value: {
      name: "$name",
      climate: "$climate",
      rotationPeriod: ["$metrics.rotation_period", parseInteger],
      residents: ["$residents", DataPoint.map("$name")]
    }
  });

  const result = await dp.resolve([PlanetModel, PlanetSchemaOutput], data);

  console.dir(result);
}

main().catch(error => console.log(error));

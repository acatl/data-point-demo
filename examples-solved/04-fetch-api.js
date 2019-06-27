console.clear();
const DataPoint = require("data-point");

const dp = DataPoint.create();

const PlanetsRequest = DataPoint.Request("planets", {
  inputType: "number",
  url: "https://swapi.co/api/planets/{value}",
  after: "$name",
  error: reason => {
    console.log("PlanetsRequest failed!", reason);
    throw reason;
  }
});

async function main() {
  const result = await dp.resolve(PlanetsRequest, 1);
  console.log(result);
}

main();

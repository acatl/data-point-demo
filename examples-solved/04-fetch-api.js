console.clear();
const DataPoint = require("data-point");

const dp = DataPoint.create();

const planetsRequest = DataPoint.Request("planets", {
  url: "https://swapi.co/api/planets/"
});

async function main() {
  const result = await dp.resolve(planetsRequest, true);
  console.log(result);
}

main();

const { create, Request, map } = require("data-point");
console.clear();

const dp = create();

// 1. Create PlanetRequest entity api: https://swapi.co/api/planets/<NUMBER>
// 2. get name and rotation, period & residents
// 3. get all residents
// 4. get get residents name and species

async function main() {
  const result = await dp.resolve();

  console.dir(result, { depth: null });
}

main();

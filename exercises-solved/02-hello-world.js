console.clear();
const DataPoint = require("data-point");

const sayHello = value => `Hello ${value}`;
const getExcited = value => `${value}!!`;
const getLoud = value => value.toUpperCase();

// DEMO:
// [ ] = create data - point instance
// [ ] = use sayHello via data-point
// [ ] - show only functions: sayHello -> getExcited -> getLoud

async function main() {
  const dp = DataPoint.create();
  // execute reducer
  const result = await dp.resolve([sayHello, getExcited, getLoud], "world");

  console.dir(result);
}

main().catch(error => console.log(error));

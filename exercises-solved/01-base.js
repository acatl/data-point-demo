console.clear();

const sayHello = value => `Hello ${value}`;
const getExcited = value => `${value}!!`;
const getLoud = value => value.toUpperCase();

// DEMO:
// [ ] - show only functions: sayHello -> getExcited -> getLoud
// [ ] - raw reduce implementation

function reduce(reducers, input) {
  return reducers.reduce((value, reducer) => {
    return reducer(value);
  }, input);
}

async function main() {
  const result = reduce([sayHello, getExcited, getLoud], "Argentina");
  console.log(result);
}

main().catch(error => console.log(error));

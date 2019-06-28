console.clear();

const sayHello = value => `Hello ${value}`;
const getExcited = value => `${value}!!`;
const getLoud = value => value.toUpperCase();

// DEMO:
// [ ] - show only functions: sayHello -> getExcited -> getLoud
// [ ] - raw reduce implementation
// [ ] - make it a function

function resolve(reducers, input) {
  const result = reducers.reduce((previousValue, reducer) => {
    return reducer(previousValue);
  }, input);

  return result;
}

function main() {
  // const result = getLoud(getExcited(sayHello("world")));

  const reducers = [sayHello, getExcited, getLoud];

  const result = resolve(reducers, "world");

  console.log(result);
}

main();
console.log("");

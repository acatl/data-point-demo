console.clear();

const reducer = value => `Hello ${value}`;

function resolve(reducers, input) {
  // reduce value against supplied reducers
  const result = reducers.reduce((previousValue, reducer) => {
    return reducer(previousValue);
  }, input);

  return result;
}

function main() {
  const result = resolve([reducer], "world");
  console.log(result);
}

main();
console.log("");

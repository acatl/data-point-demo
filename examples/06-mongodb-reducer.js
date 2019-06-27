console.clear();

const DataPoint = require("data-point");
const MongoClient = require("mongodb").MongoClient;

async function getPeople(value, accumulator) {
  // get database connection from accumulator.locals
  // db.collection("people");
  // collection.find().toArray()
}

async function main() {
  const mongoClient = await MongoClient.connect("mongodb://localhost:27017", {
    useNewUrlParser: true
  });

  const database = mongoClient.db("starwars");

  const dataPoint = DataPoint.create();

  const result = await dp.resolve();
  console.log(result);

  mongoClient.close();
}

main().catch(error => console.log(error));

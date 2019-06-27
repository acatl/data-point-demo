const DataPoint = require("data-point");
const MongoClient = require("mongodb").MongoClient;

console.clear();

async function createApp() {
  const mongoClient = await MongoClient.connect("mongodb://localhost:27017", {
    useNewUrlParser: true
  });

  const db = mongoClient.db("starwars");

  const dataPoint = DataPoint.create();

  dataPoint.addValue("database", db);

  return {
    dataPoint,
    mongoClient
  };
}

async function getPerson(value, accumulator) {
  // get database connection from accumulator.values
  // db.collection("people");
  // collection.find().toArray()
}

async function main() {
  const app = await createApp();

  const result = await app.dataPoint.resolve();
  console.log(result);

  app.mongoClient.close();
}

main().catch(error => {
  console.log(error);
});

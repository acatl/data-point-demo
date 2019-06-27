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
  // get database reference from persistent values
  const db = accumulator.values.database;

  // DB operations
  const collection = db.collection("people");
  const people = await collection
    .find({
      id: value
    })
    .toArray();
  return people;
}

async function main() {
  const app = await createApp();

  const result = await app.dataPoint.resolve(getPerson, 6);
  console.log(result);

  app.mongoClient.close();
}

main().catch(error => {
  console.log(error);
});

console.clear();

const DataPoint = require("data-point");
const MongoClient = require("mongodb").MongoClient;

async function getPeople(value, accumulator) {
  const database = accumulator.values.database;
  const collection = database.collection("people");
  return collection.find().toArray();
}

async function getPerson(personId, accumulator) {
  const database = accumulator.values.database;
  const collection = database.collection("people");
  return collection
    .find({
      id: personId
    })
    .toArray();
}

async function main() {
  const mongoClient = await MongoClient.connect("mongodb://localhost:27017", {
    useNewUrlParser: true
  });

  const database = mongoClient.db("starwars");

  const dp = DataPoint.create();

  dp.addValue("database", database);

  const result = await dp.resolve([getPerson, "$[0].description"], 1);

  console.log(result);

  mongoClient.close();
}

main().catch(error => console.log(error));

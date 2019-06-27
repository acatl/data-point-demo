console.clear();

const DataPoint = require("data-point");
const MongoClient = require("mongodb").MongoClient;

async function getPeople(value, accumulator) {
  const db = accumulator.locals.database;

  const collection = db.collection("people");
  const people = await collection
    .find({
      id: value
    })
    .toArray();
  return people;
}

async function main() {
  const mongoClient = await MongoClient.connect("mongodb://localhost:27017", {
    useNewUrlParser: true
  });

  const database = mongoClient.db("starwars");

  const dataPoint = DataPoint.create();

  const result = await dataPoint.resolve(getPeople, 6, {
    locals: { database }
  });

  console.log(result);

  mongoClient.close();
}

main().catch(error => console.log(error));

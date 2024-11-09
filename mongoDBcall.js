import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const monggoKey = process.env.Mongo_connection;
console.log(monggoKey);

async function findIngredient(db, ingredient) {
  const cursor = await db.collection('FoodRestrictions').find({});
  // Convert the cursor to an array and log the result
  const ingredientIn = await db.collection('FoodRestrictions').find({
    "$or": [
      { "nutsAllergy": ingredient },
      { "muslim": ingredient },
      { "indian(cultural).jainism": ingredient },
      { "indian(cultural).hindi": ingredient },
      { "indian(cultural).sihk": ingredient },
      { "nuts": ingredient },
      { "jewish": ingredient }
    ]
  }).toArray();
  
  return ingredientIn;
}

// Call the MongoDB looking for an ingredient, if found, return JSON of items
async function findAllIngredients(db, ingredients) {
  const presentIngredients = [];
  for (let i of ingredients) {
    const result = await findIngredient(db, i);
    presentIngredients.push(result);
  }
  return presentIngredients;
}

const uri = monggoKey;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: false,
    deprecationErrors: true,
  }
});

export async function databaseQuery(ingredient) {
  // Connect the client to the server (optional starting in v4.7)
  await client.connect();
  const db = await client.db('HTF-2024');
  const result = await findAllIngredients(db, ingredient);
  for (var i in result){
    if (result[i].length > 0){
      console.log(result[i])
    }
  }

  // Ensures that the client will close when you finish/error
  await client.close();
}


databaseQuery().catch(console.dir);



import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const monggoKey = process.env.Mongo_connection;
console.log(monggoKey);

async function findIngredient(db, ingredient) {
  const cursor = await db.collection('FoodRestrictions').find({});
  
  const ingredientIn = await db.collection('FoodRestrictions').find({
    "$or": [
      { "nutsAllergy": ingredient },
      { "muslim": ingredient },
      { "jainism": ingredient },
      { "hindi": ingredient },
      { "sihk": ingredient },
      { "jewish": ingredient }
    ]
  }).toArray();
  
  return ingredientIn;
}

// Call the MongoDB looking for an ingredient, if found, return JSON of items
async function findAllIngredients(db, ingredients) {
  const presentIngredients = [];
    const result = await findIngredient(db, ingredients);
    presentIngredients.push(result);
    if (presentIngredients[0].length > 0){
      console.log(presentIngredients[0][0]);
      return presentIngredients;}
    else return;
  
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
  //console.log(ingredient);
  const result = await findAllIngredients(db, ingredient);
  if (result != undefined){return result;}
  // Ensures that the client will close when you finish/error
  
}




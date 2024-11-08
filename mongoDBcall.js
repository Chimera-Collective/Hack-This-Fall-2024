use('FoodRestrictions')
const { MongoClient } = require('mongodb')

function findIngredient(ingredient) {
  const ingredientIn = db.getCollection('FoodRestrictions').find({
    //TO-DO REmove brute force search of documents replace with a for-each of documents
    "$or": [{"muslim": {ingredient}}, {"indian(cultural).jainism": {ingredient}}, {"indian(cultural).hindi": {ingredient}}, {"indian(cultural).sihk": {ingredient}}, {"nuts": {ingredient}}, {"jewish": {ingredient}}]
  })}
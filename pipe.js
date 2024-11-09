//REsolve these imports to use os step. Implemnatation is down and dirty "works on my machine!"

import { runModel } from "./geminiAPIcall.js"

import { databaseQuery } from "./mongoDBcall.js";


const testURL = "https://www.tasteofhome.com/recipes/the-ultimate-chicken-noodle-soup/"
const testJson = {
    ingredients: [
      'chicken thigh', 'salt',           'pepper',
      'canola oil',    'onion',          'garlic clove',
      'chicken broth', 'celery rib',     'carrot',
      'bay leaf',      'thyme',          'kluski',
      'egg noodle',    'parsley',        'lemon juice',
      'hominy',        'green chile',    'tortilla chip',
      'avocado',       'cilantro',       'lime juice',
      'napa cabbage',  'oregano',        'biscuit',
      'bread',         'chicken breast', 'ginger',
      'egg',           'lemon',          'tomato',
      'chili powder',  'cumin',          'jalapeno',
      'meat',
      'orzo pasta'
    ]
  }

  const meatJson = {
    ingredients: ["meat"]
  }

async function main(url){
    const list = await runModel(url);
    console.log(`list: ${list}`);
    const data = await JSON.parse(list);
    console.log(data);
    //const data = testJson;
    for (let i = 0; i < data.ingredients.length; i++) {
        const query = await databaseQuery(data.ingredients[i]);
        console.log(query)
    }
    console.log("end for loop")
    process.exit()
}

main(testURL)
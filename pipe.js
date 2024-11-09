//REsolve these imports to use os step. Implemnatation is down and dirty "works on my machine!"

import { runModel } from "./geminiAPIcall.js"

import { databaseQuery } from "./mongoDBcall.js";


const testURL = "https://www.tasteofhome.com/recipes/the-ultimate-chicken-noodle-soup/"

async function main(url){
    const list = await runModel(url);
    console.log(`list: ${list}`);
        const data = await JSON.parse(list);
        console.log(data);
      if (data.ingredients && Array.isArray(data.ingredients)) {
        console.log("Ingredients:");
        for (let i = 0; i < data.ingredients.length; i++) {
            databaseQuery(data.ingredients[i]);
        }
    }
    
    if (data.allergens && Array.isArray(data.allergens)) {
        console.log("Allergens:");
        for (let i = 0; i < data.allergens.length; i++) {
            console.log(data.allergens[i]);
        }
    }


}

main(testURL)
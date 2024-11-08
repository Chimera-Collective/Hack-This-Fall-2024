//REquires GoogleGenAI, axios and .env with your google API key to Run!
const { GoogleGenerativeAI } = require('@google/generative-ai');
//npm install axios
const axios = require('axios')
//npm install dotenv name apikey as API_key
require('dotenv').config();


//Take in a url, retreive the HTML with axios, return that HTML 
async function getIngredients(url) {
  try {
    //Replace with url item instead of Stirng of link
    const response = await axios.get('https://www.tasteofhome.com/recipes/the-ultimate-chicken-noodle-soup/');
    const ingredientsList = response.data;  // This will be the HTML content of the page
    return ingredientsList;  // Return the HTML string
  } catch (error) {
    console.error('Error fetching the page:', error);
  }
}



API_key_imoprt = process.env.API_key
console.log(API_key_imoprt)
//This is googles test function re-implemneted. Has their debug text but now prompts the API as we wish. Currently works for one link.
//Most likely will need a seperate implementaiton for other input methods for formatting input, resolving data will work the same however. 
async function textGenTextOnlyPrompt(htmlRecipe) {
  try {
    console.log("API Key:", API_key_imoprt);

    const genAI = new GoogleGenerativeAI(API_key_imoprt);
    console.log("Model Initialized:", genAI);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    console.log("Model Loaded:", model);

    const prompt = `Can you take this HTML text ${htmlRecipe} and return a JSON of all food ingredients. Can you ensure food names are singular and lowercase.
    If there are known allergens can you make sure that they are their own string within the JSON response.`;
    //console.log("Prompt:", prompt);

    const result = await model.generateContent(prompt);
    console.log("Response:", result);

    console.log(result.response.text());
  } catch (error) {
    console.error("Error generating text:", error);
  }
}

//REsolve url, then prompt AI with it.
async function run() {
  urlToSearch = await getIngredients();
  await textGenTextOnlyPrompt(urlToSearch);
}

run();
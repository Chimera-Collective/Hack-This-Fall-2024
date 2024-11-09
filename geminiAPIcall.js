//REquires GoogleGenAI, axios and .env with your google API key to Run!
//npm install axios
import { GoogleGenerativeAI } from "@google/generative-ai"
import axios from 'axios';
//npm install dotenv name apikey as API_key
import dotenv from 'dotenv';
dotenv.config();


//Take in a url, retreive the HTML with axios, return that HTML 
async function getIngredients(url) {
  try {
    //Replace with url item instead of Stirng of link
    const response = await axios.get(url);
    response.data;  // This will be the HTML content of the page
    return response.data;  // Return the HTML string
  } catch (error) {
    console.error('Error fetching the page:', error);
  }
}



const API_key_import = process.env.API_key;

//This is googles test function re-implemneted. Has their debug text but now prompts the API as we wish. Currently works for one link.
//Most likely will need a seperate implementaiton for other input methods for formatting input, resolving data will work the same however. 
async function textGenTextOnlyPrompt(htmlRecipe) {

    //console.log("API Key:", API_key_import);

    const genAI = await new GoogleGenerativeAI(API_key_import);
    //console.log("Model Initialized:", genAI);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    //console.log("Model Loaded:", model);

    const prompt = `Please take the HTML content stored in ${htmlRecipe} and extract all food ingredients. If there is a meat product could you specify "meat" in the JSON response.
    Format the response as a JSON object with an array named ingredients, containing the ingredients in lowercase, singular form (e.g., "carrots" as "carrot"). Exclude any units, 
    quantities, or descriptive text (e.g., "2 cups chopped onion" should become "onion"). Also, please do not include backticks or the word "JSON" in your response. Here’s an example of the desired format:
    {
  "ingredients": [
    "chicken thigh",
    "salt",
    "pepper",
    "canola oil",
    "onion",
    "garlic clove",
    "chicken broth",
    "celery rib",
    "carrot",
    "bay leaf",
    "thyme",
    "kluski",
    "egg noodle",
    "parsley",
    "lemon juice"
  ]
}
`;
    //console.log("Prompt:", prompt);

    const result = await model.generateContent(prompt);

    //console.log(result.response.text());
    return result.response.text();
}

//REsolve url, then prompt AI with it.
export async function runModel(recipe) {
  const urlToSearch = await getIngredients(recipe);
  const genAIresponse = await textGenTextOnlyPrompt(urlToSearch);
  return genAIresponse;
}

export default runModel
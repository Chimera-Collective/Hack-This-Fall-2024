const { GoogleGenerativeAI } = require('@google/generative-ai');
//npm install dotenv
require('dotenv').config();

API_key_imoprt = process.env.API_key
console.log(API_key_imoprt)
async function textGenTextOnlyPrompt() {
  try {
    console.log("API Key:", API_key_imoprt);

    const genAI = new GoogleGenerativeAI(API_key_imoprt);
    console.log("Model Initialized:", genAI);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    console.log("Model Loaded:", model);

    const prompt = "Can you take this HTML text and return a JSON of all food ingredients. Can you ensure food names are singular and lowercase.";
    console.log("Prompt:", prompt);

    const result = await model.generateContent(prompt);
    console.log("Response:", result);

    console.log(result.response.text());
  } catch (error) {
    console.error("Error generating text:", error);
  }
}

async function run() {
  await textGenTextOnlyPrompt();
}

run();
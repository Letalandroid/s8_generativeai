const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config()

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });

const prompt = "Does this look store-bought or homemade?";

const generateResponse = async () => {
    const result = await model.generateContent([prompt]);
    console.log(result.response.text());
};

generateResponse().catch(console.error);

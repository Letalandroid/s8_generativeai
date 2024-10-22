require('dotenv').config();
const { Router } = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const generate = Router();

generate.post('/gen', async (req, res) => {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });

    const prompt = req.body.prompt;

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
        const result = await model.generateContent([prompt]);
        // console.log(result.response.text());
        res.json({ statusCode:200, response: result.response.text() });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = generate;
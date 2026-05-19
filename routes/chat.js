const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post('/', async (req, res) => {
    try {
        const userMessage = req.body.message;
        const prompt = `You are a polite, helpful AI Waiter at a Desi restaurant named 'Apna Dhaba'. 
        Your menu has: Breakfast (Poha Jalebi, Masala Dosa, Filter Coffee), Lunch (Paneer Tikka, Dum Biryani, Dal Makhani), Dinner (Kadhai Paneer, Jeera Rice), Special Thalis (Rajasthani Royal Thali).
        Keep answers short, friendly, and use emojis. Customer says: "${userMessage}"`;

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
        const result = await model.generateContent(prompt);
        res.json({ reply: result.response.text() });
    } catch (error) {
        console.error("AI Error:", error);
        res.status(500).json({ reply: "Sorry, I'm having a little trouble thinking right now! 😔" });
    }
});

module.exports = router;
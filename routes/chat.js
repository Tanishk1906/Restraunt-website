const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const userMessage = req.body.message;
        
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`, // यहाँ Key का नाम वही रखें जो Render में रखा है
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": "gpt-3.5-turbo", // या "gpt-4o" जो भी आपने प्लान लिया है
                "messages": [
                    { "role": "system", "content": "You are a helpful waiter at Apna Dhaba." },
                    { "role": "user", "content": userMessage }
                ]
            })
        });

        const data = await response.json();

        if (data.error) {
            console.error("OpenAI Error:", data.error);
            return res.status(500).json({ reply: "AI is having trouble! ☕" });
        }

        res.json({ reply: data.choices[0].message.content });

    } catch (error) {
        console.error("Fetch Error:", error);
        res.status(500).json({ reply: "Connection failed! 😴" });
    }
});

module.exports = router;
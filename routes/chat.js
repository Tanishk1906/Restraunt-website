const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const userMessage = req.body.message;
        
        // सुरक्षित तरीके से API कॉल
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "https://restraunt-website-beta.vercel.app", // आपकी लाइव साइट का लिंक
                "X-Title": "Apna Dhaba" 
            },
            body: JSON.stringify({
                "model": "google/gemini-flash-1.5-latest",
                "messages": [
                    {
                        "role": "system", 
                        "content": "You are a friendly, helpful waiter at 'Apna Dhaba'. Keep replies short, use emojis, and be polite."
                    },
                    {
                        "role": "user", 
                        "content": userMessage
                    }
                ]
            })
        });

        const data = await response.json();

        // एरर हैंडलिंग (अगर OpenRouter से कोई एरर आए)
        if (data.error) {
            console.error("OpenRouter API Error:", data.error);
            return res.status(500).json({ reply: "The AI waiter is having a coffee break! ☕" });
        }

        res.json({ reply: data.choices[0].message.content });

    } catch (error) {
        console.error("Fetch Error:", error);
        res.status(500).json({ reply: "AI is currently resting! 😴" });
    }
});

module.exports = router;
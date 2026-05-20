const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const userMessage = req.body.message;
        
        // मॉडल आईडी को 'google/gemini-2.0-flash-exp:free' पर अपडेट किया गया है
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "https://restraunt-website-beta.vercel.app",
                "X-Title": "Apna Dhaba" 
            },
            body: JSON.stringify({
                "model": "google/gemini-2.0-flash-exp:free", 
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

        // अगर OpenRouter कोई भी एरर दे रहा है, तो अब वो लॉग्स में पूरी तरह दिखेगा
        if (data.error) {
            console.error("OpenRouter API Error Details:", JSON.stringify(data.error, null, 2));
            return res.status(500).json({ reply: "The AI waiter is having a technical issue. ☕" });
        }

        // रिस्पॉन्स सुरक्षित तरीके से भेजें
        if (data.choices && data.choices[0] && data.choices[0].message) {
            res.json({ reply: data.choices[0].message.content });
        } else {
            throw new Error("Unexpected response structure from OpenRouter");
        }

    } catch (error) {
        console.error("Critical Fetch Error:", error);
        res.status(500).json({ reply: "AI is currently resting! 😴" });
    }
});

module.exports = router;
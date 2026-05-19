const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation'); // डेटाबेस मॉडल को बुलाना ज़रूरी है

// POST route - नई बुकिंग करने के लिए
router.post('/', async (req, res) => {
    try {
        // 1 से 20 के बीच रैंडम टेबल नंबर जनरेट करें
        const assignedTable = Math.floor(Math.random() * 20) + 1;

        // डेटाबेस में सेव करें
        const newReservation = new Reservation({
            name: req.body.name,
            email: req.body.email,
            date: req.body.date,
            guests: req.body.guests,
            tableNumber: assignedTable 
        });

        const savedReservation = await newReservation.save();
        
        // यह नया मैसेज Frontend को भेजें
        res.status(201).json({ 
            message: `Table booked successfully! 🥳 Your Table Number is: ${assignedTable}` 
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router; // फाइल को बाहर भेजने के लिए यह लाइन ज़रूरी है
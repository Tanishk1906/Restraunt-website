const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// POST: Place a new order from the table
router.post('/', async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        const savedOrder = await newOrder.save();
        res.status(201).json({ message: "Order placed successfully! Chef is preparing your food. 👨‍🍳", data: savedOrder });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;